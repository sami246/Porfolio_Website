import React from 'react';
import './Skills.css'
import { main_skills, secondary_skills } from '../../data/SkillsData';
import { Slide } from 'react-awesome-reveal';
import { useIsStackedLayout } from '../../hooks/useIsStackedLayout';

// Refined SkillItem component
const SkillItem = ({ item, sizeClass }) => (
    // The main box receives the size, padding, and hover style via sizeClass
    <div className={sizeClass}>

        {/* REVISION: Removed the incorrect inline 'style' property for padding. 
           The padding is now correctly defined in Skills.css on the parent div. */}
        <img
            src={item.logo}
            alt={item.description}
            width='100%'
            height='100%'
        />

        {/* The description is positioned absolutely relative to the parent box */}
        <div className='img_description'>
            {item.description}
        </div>
    </div>
);


export const Skills = () => {
    const isStacked = useIsStackedLayout();
    const slideDirection = isStacked ? 'left' : 'right';
    return (
        <Slide direction={slideDirection} duration={1800} triggerOnce>
            <div id='boxContainer'>
                <header className='boxHeading'>Skills</header>

                {/* Primary Skills */}
                <h4>Primary Skills</h4>
                <div className='skillsContainer'>
                    {main_skills?.map((item, index) => (
                        <SkillItem
                            key={index}
                            item={item}
                            sizeClass='skillsBox'
                        />
                    ))}
                </div>

                {/* Secondary Skills */}
                <h4>Secondary Skills</h4>
                <div className='skillsContainer'>
                    {secondary_skills?.map((item, index) => (
                        <SkillItem
                            key={index}
                            item={item}
                            sizeClass='skillsBoxSmall'
                        />
                    ))}
                </div>
            </div>
        </Slide>
    );
}