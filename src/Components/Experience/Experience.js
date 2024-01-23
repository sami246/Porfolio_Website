import React from 'react'
import './Experience.css'
import { motion } from 'framer-motion'
import { ExperienceData } from '../../data/ExperienceData'
import ImageCarousel from '../SmallComponents/ImageCarousel/ImageCarousel'

export const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>Technical Experience</header>
            <div className='boxText'>
                {ExperienceData.map((item, index) =>
                    <>
                        <a className='logoBox' href={item.link} target="_blank" rel="noreferrer">
                            <div className='img_description'>{item.company}</div>
                            <img src={item.logoSrc} alt={`${item.company} Logo`} width='100%' height='100%' />
                        </a>
                        <div className='ExperienceHeader'>
                            <a href={item.link} className='ExperienceTitle' target="_blank" rel="noreferrer">{item.company} - {item.position} | {item.technologies}</a>
                            <div className='ExperienceTime'>{item.startMonth} - {item.endMonth}</div>
                        </div>
                        <ul className='custom-list'>
                            {item?.bulletPoints?.map((bulletPoint, index) => (
                                <li >{bulletPoint}</li>
                            ))}
                        </ul>
                        <ImageCarousel media={item.media} />
                        {index !== ExperienceData.length - 1 && <br></br>}
                    </>
                )}
            </div>
        </motion.div>
    )
}
