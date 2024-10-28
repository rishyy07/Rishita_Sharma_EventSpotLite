// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #f8f9fa;  /* Light background for contrast */
        color: #333;                /* Dark text for readability */
        line-height: 1.6;           /* Improve text readability */
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;        /* Space below headings */
        font-weight: bold;          /* Bold headings */
    }

    p {
        margin-bottom: 1rem;        /* Space below paragraphs */
    }

    a {
        text-decoration: none;       /* Remove underline from links */
        color: #007bff;             /* Bootstrap primary color for links */
        transition: color 0.3s ease; /* Smooth color transition on hover */
    }

    a:hover {
        color: #0056b3;             /* Darker blue on hover */
    }

    button {
        font-family: inherit;       /* Inherit font family */
        cursor: pointer;            /* Pointer cursor for buttons */
        transition: background-color 0.3s ease; /* Smooth transition */
    }

    button:hover {
        background-color: #e7e7e7;  /* Light grey background on hover */
    }

    // Add styles for the grid container
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
        gap: 20px;               /* Space between grid items */
        padding: 20px;           /* Padding around the grid */
    }

    // Styling for the modal
    .modal {
        background: white;      /* White background for the modal */
        border-radius: 8px;    /* Rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
        padding: 20px;         /* Padding inside the modal */
        max-width: 500px;      /* Max width for modal */
        margin: auto;          /* Center modal */
        z-index: 1000;         /* Ensure modal appears above other content */
    }

    // Add styles for the loading spinner
    .loading-spinner {
        display: flex;
        justify-content: center; /* Center spinner */
        align-items: center;     /* Align items vertically */
        height: 100vh;          /* Full height of viewport */
    }
`;

export default GlobalStyle;
