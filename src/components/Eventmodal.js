// EventModal.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.2 } }
};

const EventModal = ({ event, onClose }) => (
    <Backdrop
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        onClick={onClose}
    >
        <ModalContent
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Stop click event from closing modal
        >
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <EventImage src={event.image} alt={event.name} />
            <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
    </Backdrop>
);

const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled(motion.div)`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
`;

const EventImage = styled.img`
    width: 100%;
    border-radius: 8px;
    margin: 15px 0;
`;

const CloseButton = styled.button`
    padding: 10px 20px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
        background: #555;
    }
`;

export default EventModal;
