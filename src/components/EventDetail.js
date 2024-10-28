// EventDetail.js
import React from 'react';
import styled from 'styled-components';

const EventDetail = ({ event, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <button onClick={onClose}>Close</button>
                <EventImage src={event.image} alt={event.name} />
                <h2>{event.name}</h2>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                {/* Add more details if needed */}
            </ModalContent>
        </ModalOverlay>
    );
};

// Styled Components for Modal
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    position: relative;
    width: 80%;
    max-width: 500px;

    button {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: #e74c3c;
        color: white;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;

const EventImage = styled.img`
    width: 100%;
    height: auto;
`;

export default EventDetail;
