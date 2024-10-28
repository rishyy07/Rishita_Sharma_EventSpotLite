// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import EventCard from '../components/Eventcard';
// import LoadingSpinner from '../components/LoadingSpinner';
// import Navbar from '../components/Navbar';
// import SearchBar from '../components/Searchbar'; // Importing the SearchBar component


// const eventsData = [
//     { id: 1, name: 'Concert in the Park', date: '2024-11-15', location: 'City Park', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGej9RhDzViCYqf2KgtJA6EM157GTBVaqHw&s' },
//     { id: 2, name: 'Art Exhibition', date: '2024-11-20', location: 'Art Gallery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ5IUgvMXtzx7_PSUNEeXd5tD4vgQcYhdqg&s' },
//     { id: 3, name: 'Food Festival', date: '2024-11-25', location: 'Downtown Plaza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytPFBQ-zPpvuwRD-5phFVh0RzJ0bmDDwzzg&s' },
//     { id: 4, name: 'Tech Conference', date: '2024-12-05', location: 'Convention Center', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqTead_0ThX6S37ynPEjRKE0GpYlGCDhbdw&s' },
//     { id: 5, name: 'Book Fair', date: '2024-12-10', location: 'Library Hall', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mOAe1S09vuQQMHJjYeQQBi92YP-OqeovNmcCdOgMEuvSDGKsJLyw4WJ2RKkFYt6xB40&usqp=CAU' },
//     { id: 6, name: 'Charity Run', date: '2024-12-15', location: 'Riverside Park', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdHF5Q6KjbLRgFVYexc9KLs5SNZLDBl_Qug&s' },
//     { id: 7, name: 'Stand-Up Comedy', date: '2024-12-20', location: 'Comedy Club', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYLvLo0KzHejVEu-Rtvi22ANRkYybE95CZA&s' },
//     { id: 8, name: 'Film Screening', date: '2024-12-22', location: 'Open-Air Theater', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbd059TjYxuA6bjtuCN63OnXhJbUZ8iJpNw&s' },
//     { id: 9, name: 'Yoga Workshop', date: '2024-12-25', location: 'Wellness Center', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1v-TQ8nmV0Ds3F8SE20FxdKQ8fahF0VaATQ&s' },
//     { id: 10, name: 'Christmas Market', date: '2024-12-25', location: 'Main Square', image: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1154d10f-e4ed-4caa-a97b-e712fd7b0811.jpg?crop=1350%2C900%2C125%2C0' },
//     { id: 11, name: 'New Year Bash', date: '2024-12-31', location: 'City Stadium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYOxIyeAELNbOmkpwmk06gnxASRPnlXJFtQ&s' },
//     { id: 12, name: 'Photography Workshop', date: '2025-01-05', location: 'Art Studio', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0EP57H4WjNjMwb1G-Y7xifZTMlM0vRbH8Q&s' },
//     { id: 13, name: 'Wine Tasting Event', date: '2025-01-10', location: 'Vineyard Hall', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cjwzpGIpBw6llytWnj-0fISKl5PyJhC9ZQ&s' },
//     { id: 14, name: 'Live Jazz Night', date: '2025-01-15', location: 'Jazz Club', image: 'https://static.wixstatic.com/media/a4ce6c_364a38bd402c4321a8a492ec8d94943f~mv2.jpg/v1/fill/w_980,h_513,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a4ce6c_364a38bd402c4321a8a492ec8d94943f~mv2.jpg' },
//     { id: 15, name: 'Winter Carnival', date: '2025-01-20', location: 'Fairground', image: 'https://img.freepik.com/premium-photo/winter-carnival-extravaganza_989064-4270.jpg' },
// ];


// const EventListPage = () => {
//     const [loading, setLoading] = useState(true);
//     const [events, setEvents] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         // Simulate data fetching delay
//         setTimeout(() => {
//             setEvents(eventsData); // Load mock event data
//             setLoading(false); // Turn off loading spinner
//         }, 2000); // Adjust delay as needed
//     }, []);

//     // Filter events based on search term
//     const filteredEvents = events.filter(event =>
//         event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.location.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <PageContainer>
//             <Navbar />
//             <SearchBar onSearch={(query) => setSearchTerm(query)} /> {/* Using SearchBar here */}
//             {loading ? (
//                 <LoadingContainer>
//                     <LoadingSpinner />
//                 </LoadingContainer>
//             ) : (
//                 <EventGrid>
//                     {filteredEvents.length > 0 ? (
//                         filteredEvents.map((event) => (
//                             <EventCard key={event.id} event={event} onClick={() => {/* Handle event click */ }} />
//                         ))
//                     ) : (
//                         <NoEventsMessage>No events found.</NoEventsMessage>
//                     )}
//                 </EventGrid>
//             )}
//         </PageContainer>
//     );
// };

// // Styled Components
// const PageContainer = styled.div`
//     padding: 20px;
// `;

// const LoadingContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 70vh; // Center spinner in the viewport
// `;

// const EventGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//     gap: 20px;
// `;

// const NoEventsMessage = styled.p`
//     text-align: center;
//     font-size: 18px;
//     color: #555;
// `;

// export default EventListPage;














// EventListPage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '../components/Eventcard';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
import SearchBar from '../components/Searchbar'; // Importing the SearchBar component
import EventDetail from '../components/EventDetail'; // Import the EventDetail component

const eventsData = [
    { id: 1, name: 'Concert in the Park', date: '2024-11-15', location: 'City Park', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGej9RhDzViCYqf2KgtJA6EM157GTBVaqHw&s' },
    { id: 2, name: 'Art Exhibition', date: '2024-11-20', location: 'Art Gallery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ5IUgvMXtzx7_PSUNEeXd5tD4vgQcYhdqg&s' },
    { id: 3, name: 'Food Festival', date: '2024-11-25', location: 'Downtown Plaza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytPFBQ-zPpvuwRD-5phFVh0RzJ0bmDDwzzg&s' },
    { id: 4, name: 'Tech Conference', date: '2024-12-05', location: 'Convention Center', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqTead_0ThX6S37ynPEjRKE0GpYlGCDhbdw&s' },
    { id: 5, name: 'Book Fair', date: '2024-12-10', location: 'Library Hall', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mOAe1S09vuQQMHJjYeQQBi92YP-OqeovNmcCdOgMEuvSDGKsJLyw4WJ2RKkFYt6xB40&usqp=CAU' },
    { id: 6, name: 'Charity Run', date: '2024-12-15', location: 'Riverside Park', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdHF5Q6KjbLRgFVYexc9KLs5SNZLDBl_Qug&s' },
    { id: 7, name: 'Stand-Up Comedy', date: '2024-12-20', location: 'Comedy Club', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYLvLo0KzHejVEu-Rtvi22ANRkYybE95CZA&s' },
    { id: 8, name: 'Film Screening', date: '2024-12-22', location: 'Open-Air Theater', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbd059TjYxuA6bjtuCN63OnXhJbUZ8iJpNw&s' },
    { id: 9, name: 'Yoga Workshop', date: '2024-12-25', location: 'Wellness Center', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1v-TQ8nmV0Ds3F8SE20FxdKQ8fahF0VaATQ&s' },
    { id: 10, name: 'Christmasnpm sra Market', date: '2024-12-25', location: 'Main Square', image: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1154d10f-e4ed-4caa-a97b-e712fd7b0811.jpg?crop=1350%2C900%2C125%2C0' },
    { id: 11, name: 'New Year Bash', date: '2024-12-31', location: 'City Stadium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYOxIyeAELNbOmkpwmk06gnxASRPnlXJFtQ&s' },
    { id: 12, name: 'Photography Workshop', date: '2025-01-05', location: 'Art Studio', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0EP57H4WjNjMwb1G-Y7xifZTMlM0vRbH8Q&s' },
    { id: 13, name: 'Wine Tasting Event', date: '2025-01-10', location: 'Vineyard Hall', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cjwzpGIpBw6llytWnj-0fISKl5PyJhC9ZQ&s' },
    { id: 14, name: 'Live Jazz Night', date: '2025-01-15', location: 'Jazz Club', image: 'https://static.wixstatic.com/media/a4ce6c_364a38bd402c4321a8a492ec8d94943f~mv2.jpg/v1/fill/w_980,h_513,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a4ce6c_364a38bd402c4321a8a492ec8d94943f~mv2.jpg' },
    { id: 15, name: 'Winter Carnival', date: '2025-01-20', location: 'Fairground', image: 'https://img.freepik.com/premium-photo/winter-carnival-extravaganza_989064-4270.jpg' },
];

const EventListPage = () => {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

    useEffect(() => {
        // Simulate data fetching delay
        setTimeout(() => {
            setEvents(eventsData); // Load mock event data
            setLoading(false); // Turn off loading spinner
        }, 2000); // Adjust delay as needed
    }, []);

    // Filter events based on search term
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle card click
    const handleEventClick = (event) => {
        setSelectedEvent(event); // Set the selected event
    };

    // Close the event detail view
    const closeDetail = () => {
        setSelectedEvent(null); // Clear the selected event
    };

    return (
        <PageContainer>
            <Navbar />
            <SearchBar onSearch={(query) => setSearchTerm(query)} /> {/* Using SearchBar here */}
            {loading ? (
                <LoadingContainer>
                    <LoadingSpinner />
                </LoadingContainer>
            ) : (
                <EventGrid>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onClick={() => handleEventClick(event)} // Handle click
                            />
                        ))
                    ) : (
                        <NoEventsMessage>No events found.</NoEventsMessage>
                    )}
                </EventGrid>
            )}
            {selectedEvent && <EventDetail event={selectedEvent} onClose={closeDetail} />} {/* Render detail modal */}
        </PageContainer>
    );
};

// Styled Components
const PageContainer = styled.div`
    padding: 20px;
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh; // Center spinner in the viewport
`;

const EventGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;

const NoEventsMessage = styled.p`
    text-align: center;
    font-size: 18px;
    color: #555;
`;

export default EventListPage;
