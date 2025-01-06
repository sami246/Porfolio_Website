import React from 'react'
// import { SiTiktok, SiInstagram, SiTwitter } from "react-icons/si";
import './Footer.css'
// import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer-container'>
            {/* <div className="top">
                <div className="pages">
                    <ul>
                        <li><NavLink to="/features">Features</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

            </div>
            <div className="social">

                <Link to='https://twitter.com/foodii_official' target="_blank"><SiTwitter size={35} /></Link>
                <Link to='https://www.instagram.com/foodii_official/' target="_blank"><SiInstagram size={35} /></Link>
                <Link to='https://www.tiktok.com/@foodii_official' target="_blank"><SiTiktok size={35} /></Link>

            </div> */}
            <div className="info">
                <div className="legal">
                    {/* <NavLink to="/terms_and_conditions">Terms & Conditions</NavLink> */}
                    {/* <NavLink to="/privacy_policy">Privacy Policy</NavLink> */}
                </div>
                <div className="copyright">2024 Copyright &copy; Royz Rental</div>
            </div>
        </footer>
    )
}

export default Footer