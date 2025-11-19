import React from 'react'
import './Projects.css'
import { ProjectData } from '../../data/ProjectData'
import HighlightText from '../SmallComponents/HighlightText/HighlightText'
import { Slide } from 'react-awesome-reveal'
import ImagesGallery from '../SmallComponents/ImagesGallery/ImagesGallery'

export const Projects = () => {
    return (
        <Slide direction='right' duration={1800} triggerOnce>
            <div id='boxContainer'>
                <header className='boxHeading'>Projects</header>
                <div className='boxText'>
                    {ProjectData.map((item, index) => (
                        <div key={index + 'projects'}>
                            <div className='ExperienceHeader'>
                                {item.link
                                    ?
                                    <div className='ExperienceTitle'>
                                        <a key={item.title + '-link'} href={item.link} target="_blank" rel="noreferrer">{item.title}</a> | <span>{item.technologies}</span>
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
                                    <a key={item.title + '-button-link'} href={item.link} target="_blank" rel="noreferrer">
                                        <button style={{ margin: '8px 15px' }} className='AppButton' onClick={() => ""}>
                                            {item.title}
                                        </button>
                                    </a>
                                )
                            }
                            {/* <ImageCarousel media={item.media} /> */}
                            {item?.media && item?.media.length > 0 &&
                                <div style={{ marginTop: 15, marginBottom: 30 }}>
                                    <ImagesGallery imagesData={item.media} />
                                </div>
                            }
                            {/* {item.images?.map((image) => (
                            <img src={image} className='projectImage' />
                        ))} */}
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    )
}
