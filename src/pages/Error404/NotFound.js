// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Go Back to Home</Link>
        </div>
    );
}

export default NotFound;
