// EventCard.js
import React from 'react';
import styled from 'styled-components';

// const EventCard = ({ event, onClick }) => (
//     <Card onClick={onClick}>
//         <EventImage src={event.image} alt={event.name} />
//         <EventInfo>
//             <h3>{event.name}</h3>
//             <p>{event.date}</p>
//             <p>{event.location}</p>
//         </EventInfo>
//     </Card>
// );
// Inside EventCard.js
const EventCard = ({ event, onClick }) => (
    <Card onClick={onClick}>
        <EventImage src={event.image} alt={event.name} />
        <EventInfo>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button className="button">View Details</button> {/* Button example */}
        </EventInfo>
    </Card>
);


const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05); /* Grow slightly on hover */
    }
`;

const EventImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const EventInfo = styled.div`
    padding: 16px;
    h3 {
        margin-bottom: 8px;
        font-size: 1.2rem;
    }
    p {
        margin: 4px 0;
        color: #777;
    }
`;

export default EventCard;
