import React from 'react'
import './Bio.css'
import pdf from '../../assets/Sami Rahman CV.pdf'
import { IntroSpinner } from '../SmallComponents/IntroSpinner/IntroSpinner';
import { Slide } from 'react-awesome-reveal';

export const Bio = () => {

    const onButtonClick = () => {
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

    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById("AboutMe");
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Slide direction='left' duration={1800} triggerOnce>
            <div className='bioContainer'>
                <div className='profileImage'>

                </div>
                <IntroSpinner />
                {/* <div className='title'>
                <span>Hi, I’m <span className='titleHighlight'>Sami Rahman</span>
                    <br></br>Software Engineer.
                </span>
            </div>
            <div className='bioBody'>
                <div>I am a Full-Stack Developer specialising in Front-End, based in London. </div>
                <div>I have experience in a wide array of technologies and frameworks and am eager to learn more and take on exciting opportunities.</div>
            </div> */}
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <button className='AppButton bigButton' onClick={() => onButtonClick()}>Download My CV</button>
                    <button className="AppButton bigButton" onClick={scrollToAboutMe}>
                        About Me
                    </button>

                </div>

            </div>
        </Slide>
    )
}
