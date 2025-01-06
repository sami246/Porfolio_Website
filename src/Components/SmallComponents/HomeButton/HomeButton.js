import React from "react";
import "./HomeButton.css";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
    return (
        <a href="/" className="home-button" aria-label="Home">
            <FaHome className="home-icon" />
        </a>
    );
};

export default HomeButton;
