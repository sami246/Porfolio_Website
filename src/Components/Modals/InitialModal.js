import { AnimatePresence, motion } from "framer-motion";
import { MdBusinessCenter } from "react-icons/md";
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { MdCallSplit } from "react-icons/md";

import "./InitialModal.css";


const InitialModal = ({ isOpen, setIsOpen }) => {

    // Action for the 'Explore' choice: open new site and close modal
    const handleAppChoice = () => {
        // Open the app showcase URL in a new window/tab
        window.open("https://apps.srmakes.co.uk", "_blank");
        // Close the modal
        setIsOpen(false);
    };

    // Action for the 'Recruiter' choice: close modal (stay on current site)
    const handleRecruiterChoice = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="initial-modal-div-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // Clicks outside the modal default to the portfolio view
                    onClick={handleRecruiterChoice}
                    className="modal-container"
                >
                    <motion.div
                        key="initial-modal-div-2"
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content"
                    >
                        {/* Close Button - uses the Recruiter choice action */}
                        <div className="modal-close-button" onClick={handleRecruiterChoice}>
                            <FaTimes />
                        </div>

                        {/* The general icon for background texture */}
                        {/* I changed the background icon to MdBusinessCenter to match the main choice, using the icon you added in your snippet */}
                        <MdBusinessCenter className="alert-icon" />

                        <div className="modal-content-inner">
                            {/* Main icon for visual appeal */}
                            <div className="i-icon-middle">
                                <MdCallSplit />
                            </div>
                            <h3 className="big-text">
                                Welcome! Select Your Path
                            </h3>
                            <p className="text">
                                Are you a recruiter looking to hire, or an explorer interested in my live projects and products?
                            </p>
                            <div className="button-group path-selection">
                                {/* Option 1: Recruiter (Stays on current site: srmakes.co.uk) */}
                                <button
                                    onClick={handleRecruiterChoice}
                                    className="button recruiter-choice"
                                >
                                    <MdBusinessCenter style={{ marginRight: '8px' }} />
                                    I'm a Recruiter
                                </button>

                                {/* Option 2: Explorer (Opens new site: apps.srmakes.co.uk) */}
                                <button
                                    onClick={handleAppChoice}
                                    className="button user-choice"
                                >
                                    <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                                    Explore Live Projects
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};

export default InitialModal;