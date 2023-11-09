import React from 'react'
import './Bio.css'
import pdf from '../../assets/Sami Rahman CV.pdf'

export const Bio = () => {
    const onButtonClick = () => {
        fetch(pdf).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Sami Rahman CV.pdf";
                alink.click();
            });
        });
    };

    return (
        <div className='bioContainer'>
            <div className='profileImage'>

            </div>
            <div className='title'>
                <span>Hi, I’m <span className='titleHighlight'>Sami Rahman</span>
                    <br></br>Software Engineer.
                </span>
            </div>
            <div className='bioBody'>
                <div>I am a Full-Stack Developer specialising in Front-End based in England. </div>
                <div>I have experience in a wide array of technologies and frameworks and am eager to learn more and take on exciting opportunities.</div>
            </div>
            <button className='button' onClick={() => onButtonClick()}>Download My CV</button>

        </div>
    )
}
