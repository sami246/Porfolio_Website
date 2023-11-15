import React from 'react';
import './Skills.css'
import { main_skills, secondary_skills } from '../../data/SkillsData';
import { motion } from "framer-motion"

export const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
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
        </motion.div>
    );
}