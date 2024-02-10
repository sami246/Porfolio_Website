import React from 'react'
import './ImageSlide.css'

const ImageSlide = ({ item }) => {

    return (
        <div className='media-slide-container'>
            {
                item.type === 'image' ?
                    <img loading='lazy' src={item.src} alt={item?.description} style={{ objectFit: 'cover', overflow: 'hidden', width: '100%', borderRadius: '10px' }} />
                    :
                    <div className="video_wrapper">
                        <iframe
                            height={'100%'}
                            width="100%"
                            src={item.src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>

                        </iframe>
                    </div>
            }
        </div>
    )
}

export default ImageSlide