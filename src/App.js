// // App.js
// import React from 'react';
// import EventListPage from './pages/EventListPage';
// import GlobalStyle from './GlobalStyle';

// const App = () => (
//   <div className="App">
//     <GlobalStyle /> {/* Adds global styling */}
//     <EventListPage />
//   </div>
// );

// export default App;





// App.js
import React, { useEffect, useRef, useState } from 'react';
import EventListPage from './pages/EventListPage';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRef = useRef();

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the target is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => [...prev, entry.target.id]); // Track visible cards
          observerRef.current.unobserve(entry.target); // Stop observing the card
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observerRef.current = observer;

    // Observe each event card after the component mounts
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyle /> {/* Adds global styling */}
      <EventListPage visibleCards={visibleCards} /> {/* Pass the visible cards to the page */}
    </div>
  );
};

export default App;
