import React from 'react'
import './Experience.css'
import { ExperienceData } from '../../data/ExperienceData'
import ImageCarousel from '../SmallComponents/ImageCarousel/ImageCarousel'
import HighlightText from '../SmallComponents/HighlightText/HighlightText'
import { Slide } from 'react-awesome-reveal'
import ImagesGallery from '../SmallComponents/ImagesGallery/ImagesGallery'

export const Experience = () => {
    return (
        <Slide direction='right' duration={2700} triggerOnce>
            <div id='boxContainer'>
                <header className='boxHeading'>Technical Experience</header>
                <div className='boxText'>
                    {ExperienceData.map((item, index) =>
                        <div key={item.company}>
                            <div className='ExperienceHeader'>
                                <div className='logo-and-title'>
                                    <a className='logoBox' href={item.link} target="_blank" rel="noreferrer">
                                        <div className='img_description'>{item.company}</div>
                                        <img src={item.logoSrc} alt={`${item.company} Logo`} width='100%' height='100%' />
                                    </a>
                                    <div style={{ gap: 10 }}>
                                        <div className='title-text'>
                                            <a href={item.link} target="_blank" rel="noreferrer">{item.company}</a> - <span>{item.position}</span> <br></br>
                                        </div>
                                        <div className='technologies-text'>{item.technologies}</div>
                                    </div>

                                </div>
                                <div className='ExperienceTime'>{item.startMonth} - <span style={{
                                    color: item.endMonth === "CURRENT" ? '#CD921E' : 'white',
                                    fontWeight: item.endMonth === "CURRENT" ? '600' : '400'
                                }}>{item.endMonth}</span></div>
                            </div>
                            <ul className='custom-list'>
                                {item?.bulletPoints?.map((bulletPoint, index) => (
                                    <li key={bulletPoint + index}><HighlightText text={bulletPoint} /></li>
                                ))}
                            </ul>
                            {item.buttonLinks &&
                                item.buttonLinks.map((item, index) =>
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <button style={{ margin: '0.3em 0.7em' }} className='AppButton' onClick={() => ""}>
                                            {item.title}
                                        </button>
                                    </a>
                                )
                            }
                            {/* <ImageCarousel media={item.media} /> */}
                            <div style={{ marginTop: 30, marginBottom: 30 }}>
                                <ImagesGallery imagesData={item.media} />
                            </div>
                            {index !== ExperienceData.length - 1 && <br></br>}
                        </div>
                    )}
                </div>
            </div>
        </Slide>
    )
}
