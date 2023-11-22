import React, { useContext } from 'react';
import { About } from './Components/About/About';
import { Bio } from './Components/Bio/Bio';
import { Contact } from './Components/Contact/Contact';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Testimonial } from './Components/Testimonial/Testimonial';
import { AppContext } from './contexts/AppContext';

export const MainApp = () => {
    const { imageToShow, setImageToShow } = useContext(AppContext);

    const handleCloseModal = (e) => {
        // Check if the click target is the background (modal) and not the image
        if (e.target === e.currentTarget) {
            setImageToShow(null);
        }
    };

    return (
        <>
            {imageToShow && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        height: '100%',
                        width: '100%',
                        zIndex: 1000,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={handleCloseModal}
                >
                    {/* You can replace this image element with the one from your chosen zoom library */}
                    <img
                        src={imageToShow}
                        alt="Selected Image"
                        style={{ maxWidth: '80%', maxHeight: '80%' }}
                        onClick={(e) => e.stopPropagation()} // Prevent the click event from reaching the modal background
                    />
                </div>
            )}
            <div className="App">
                <div className="leftContainer">
                    <Bio />
                </div>
                <div className="rightContainer">
                    <Skills />
                    <Experience />
                    <Projects />
                    <About />
                    <Testimonial />
                    <Contact />
                </div>
            </div>
        </>
    );
};
