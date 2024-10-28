import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
    <Nav>
        <h1>EventSpot Lite</h1>
    </Nav>
);

const Nav = styled.nav`
    display: flex;
    flex-direction: column;  /* Change to column for vertical stacking */
    align-items: center;     /* Center align items */
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
`;

export default Navbar;
