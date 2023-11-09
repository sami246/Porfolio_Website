import React from 'react';
import reactImage from '../../assets/logos/react.svg';
import photoshopImage from '../../assets/logos/adobe-photoshop-cc.svg';
import './Skills.css'
import { main_skills, secondary_skills } from '../../data/SkillsData';

export const Skills = () => {
    return (
        <div id='boxContainer'>
            <header className='boxHeading'>Skills</header>
            <h4>Primary Skills</h4>
            <div className='skillsContainer'>
                {main_skills?.map((item, index) => (
                    <div className='skillsBox'>
                        <div className='img_description'>{item.description} </div>
                        <img key={index} src={item.logo} alt={item.description} width='100%' height='100%' />
                    </div>
                ))}
            </div>
            <h4>Secondary Skills</h4>
            <div className='skillsContainer'>
                {secondary_skills?.map((item, index) => (
                    <div className='skillsBoxSmall'>
                        <div className='img_description'>{item.description} </div>
                        <img key={index} src={item.logo} alt={item.description} width='100%' height='100%' />
                    </div>

                ))}
            </div>
        </div>
    );
}