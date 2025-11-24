import React, { useContext } from 'react';
import { About } from './Components/About/About';
import { Bio } from './Components/Bio/Bio';
import { Contact } from './Components/Contact/Contact';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Testimonial } from './Components/Testimonial/Testimonial';
import { AppContext } from './contexts/AppContext';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const MainApp = () => {
    const { imageToShowData, imageToShowIndex, setImageToShowData, setImageToShowIndex, showInitialPopup } = useContext(AppContext);

    const handleCloseModal = (e) => {
        // Check if the click target is the background (modal) and not the image
        if (e.target === e.currentTarget) {
            setImageToShowIndex(null)
            setImageToShowData(null);
        }
    };

    return (
        <>
            {imageToShowData && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        height: '100%',
                        width: '100%',
                        zIndex: 100,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    onClick={handleCloseModal}
                >
                    <HiChevronLeft onClick={() => setImageToShowIndex((prev) => {
                        if (prev === 0) {
                            return imageToShowData.length - 1
                        }
                        else {
                            return prev - 1
                        }
                    })} className='image-arrow' style={{}} size={160} />
                    {/* You can replace this image element with the one from your chosen zoom library */}
                    <img
                        src={imageToShowData[imageToShowIndex].src}
                        alt="Selected"
                        unselectable='true'
                        style={{ maxWidth: '80%', maxHeight: '80%', borderColor: 'red', borderWidth: 2 }}
                        onClick={(e) => e.stopPropagation()} // Prevent the click event from reaching the modal background
                    />
                    <HiChevronRight onClick={() => setImageToShowIndex((prev) => {
                        if (prev === imageToShowData.length - 1) {
                            return 0
                        }
                        else {
                            return prev + 1
                        }
                    })} className='image-arrow' style={{}} size={160} />
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
            {!showInitialPopup &&
                <a
                    href="https://apps.srmakes.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed-cta-link"
                >
                    <button className="AppButton fixed-cta-button">
                        ✨ Check Out My Live Apps ⭐
                    </button>
                </a>
            }
        </>
    );
};
