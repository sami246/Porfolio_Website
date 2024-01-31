import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import { ProjectData } from '../../data/ProjectData'
import ImageCarousel from '../SmallComponents/ImageCarousel/ImageCarousel'
import HighlightText from '../SmallComponents/HighlightText/HighlightText'

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
                                <div className='ExperienceTitle'>
                                    <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a> | <span>{item.technologies}</span>
                                </div>
                                :
                                <div className='ExperienceTitle'>{item.title} | <span>{item.technologies}</span></div>
                            }

                            <div className='ExperienceTime'>{item.startMonth}<span style={{
                                color: item.endMonth === "CURRENT" ? '#CD921E' : 'white',
                                fontWeight: item.endMonth === "CURRENT" ? '600' : '400'
                            }}>{item.endMonth === item.startMonth ? null : " - " + item.endMonth}</span></div>
                        </div>
                        <div className='ExperienceBody'>
                            <ul className='custom-list'>
                                {item?.bulletPoints?.map((bulletPoint, index) => (
                                    <li key={bulletPoint + index}><HighlightText text={bulletPoint} /></li>
                                ))}
                            </ul>
                            {/* {item.bulletPoints?.map((bulletPoint, index) => (
                                <div key={'bulletpoints' + Math.random()}>
                                    <span>● {bulletPoint}</span>
                                    {index === item.bulletPoints?.length - 1 ? null : <br></br>}
                                </div>
                            ))} */}
                        </div>
                        {item.buttonLinks &&
                            item.buttonLinks.map((item, index) =>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <button style={{ margin: '8px 15px', fontSize: '1rem' }} className='button' onClick={() => ""}>
                                        {item.title}
                                    </button>
                                </a>
                            )
                        }
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
