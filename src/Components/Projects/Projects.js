import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import { ProjectData } from '../../data/ProjectData'
import ImageCarousel from '../SmallComponents/ImageCarousel/ImageCarousel'

export const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>Projects</header>
            <div className='boxText'>
                {ProjectData.map((item, index) => (
                    <div key={index + 'projects'}>
                        <div className='ExperienceHeader'>
                            {item.link
                                ?
                                <a href={item.link} className='ExperienceTitle' target="_blank" rel="noreferrer">{item.title} | {item.technologies}</a>
                                :
                                <div className='ExperienceTitle'>{item.title} | {item.technologies}</div>
                            }

                            <div className='ExperienceTime'>{item.startMonth}{item.endMonth === item.startMonth ? null : " - " + item.endMonth}</div>
                        </div>
                        <div className='ExperienceBody'>
                            <ul className='custom-list'>
                                {item?.bulletPoints?.map((bulletPoint, index) => (
                                    <li >{bulletPoint}</li>
                                ))}
                            </ul>
                            {/* {item.bulletPoints?.map((bulletPoint, index) => (
                                <div key={'bulletpoints' + Math.random()}>
                                    <span>● {bulletPoint}</span>
                                    {index === item.bulletPoints?.length - 1 ? null : <br></br>}
                                </div>
                            ))} */}
                        </div>
                        <ImageCarousel media={item.media} />
                        {/* {item.images?.map((image) => (
                            <img src={image} className='projectImage' />
                        ))} */}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
