import React from 'react';
import './Skills.css'
import { main_skills, secondary_skills } from '../../data/SkillsData';
import { Slide } from 'react-awesome-reveal';

export const Skills = () => {
    return (
        <Slide direction='right' duration={1800} triggerOnce>
            <div id='boxContainer'>
                <header className='boxHeading'>Skills</header>
                <h4>Primary Skills</h4>
                <div className='skillsContainer'>
                    {main_skills?.map((item, index) => (
                        <div className='skillsBox' key={index}
                        // style={{ boxShadow: `8px 8px 11px ${item.color}, -4px -5px 17px #2c3236` }}
                        >
                            <div className='img_description'>{item.description} </div>
                            <img src={item.logo} alt={item.description} width='100%' height='100%' />
                        </div>
                    ))}
                </div>
                <h4>Secondary Skills</h4>
                <div className='skillsContainer'>
                    {secondary_skills?.map((item, index) => (
                        <div className='skillsBoxSmall' key={index}>
                            <div className='img_description'>{item.description} </div>
                            <img src={item.logo} alt={item.description} width='100%' height='100%' />
                        </div>

                    ))}
                </div>
            </div>
        </Slide>
    );
}