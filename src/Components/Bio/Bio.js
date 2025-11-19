import './Bio.css'
import pdf from '../../assets/Sami Rahman 2025 CV.pdf'
import { IntroSpinner } from '../SmallComponents/IntroSpinner/IntroSpinner';
import { Slide } from 'react-awesome-reveal';
import { FaDownload, FaUser, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

export const Bio = () => {

    const { showContactPopup, setShowContactPopup } = useContext(AppContext);


    const onButtonClick = () => {
        // NOTE: window.confirm() should ideally be replaced with a custom modal in a React app.
        const shouldDownload = window.confirm('Do you want to download the CV?');

        if (shouldDownload) {
            fetch(pdf).then((response) => {
                response.blob().then((blob) => {
                    // Creating a new object of the PDF file
                    const fileURL = window.URL.createObjectURL(blob);

                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Sami Rahman CV.pdf';
                    alink.click();
                });
            });
        }
    };

    // const scrollToAboutMe = () => {
    //     const aboutMeSection = document.getElementById("AboutMe");
    //     aboutMeSection.scrollIntoView({ behavior: "smooth" });
    // };

    const openContactModal = () => {
        setShowContactPopup(true);
    }

    return (
        <Slide direction='left' duration={1800} triggerOnce>
            <div className='bioContainer'>
                <div className='profileImage'>

                </div>
                <IntroSpinner />

                {/* New specific wrapper class */}
                <div className='bio-button-stack'>
                    {/* Primary Button Style for CV Download */}
                    <button className='bio-action-button primary-button' onClick={() => onButtonClick()}>
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download My CV
                    </button>

                    {/* Secondary Button Style */}
                    <button className="bio-action-button" onClick={openContactModal}>
                        <FaUser style={{ marginRight: '8px' }} />
                        Contact Me
                    </button>

                    <a
                        href="https://github.com/sami246"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bio-link-wrapper'
                    >
                        {/* Secondary Button Style for Github */}
                        <button className='bio-action-button github-button'>
                            <FaGithub style={{ marginRight: '8px' }} />
                            Github
                        </button>
                    </a>
                </div>

            </div>
        </Slide>
    )
}