import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div id='boxContainer'>
            <header className='boxHeading'>Contact</header>
            <div className='intro'>Here are the best ways to contact me <span>( in order of my preference 👍🏼 )</span> :</div>
            <ul className='contact-list'>
                <li><span>Email: </span>samisamadur@gmail.com</li>
                <li><span>LinkedIn: </span><a href='https://www.linkedin.com/in/sami-s-rahman' target="_blank" rel="noreferrer"> https://www.linkedin.com/in/sami-s-rahman</a> </li>
                <li><span>Mobile: </span> 07747590448</li>
            </ul>
        </div>
    )
}
