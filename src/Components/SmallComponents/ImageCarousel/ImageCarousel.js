import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ImageCarousel.css'
import { AppContext } from '../../../contexts/AppContext';

const handleDragStart = (e) => e.preventDefault();

const ImageCarousel = ({ media }) => {
    const { setImageToShowData, setImageToShowIndex } = useContext(AppContext)

    try {
        if (media?.length !== 0) {
            return (
                <div style={{ width: '80%', margin: '10px auto', display: 'flex', justifyContent: 'center', }}>
                    <AliceCarousel
                        infinite
                        controlsStrategy='responsive'
                        mouseTracking
                        items={media?.map((mediaData, index) => {
                            console.log(mediaData);
                            if (mediaData.type === 'image') {
                                return (
                                    <div className='carouselItem' onClick={() => {
                                        setImageToShowData(media)
                                        setImageToShowIndex(index)
                                    }}>
                                        <img key={mediaData.src.toString()} alt={mediaData.src.toString()} className='projectImage' src={mediaData.src} onDragStart={handleDragStart} role="figure" />
                                    </div>
                                );
                            } else if (mediaData.type === 'video') {
                                return (
                                    <div className='carouselItem'>
                                        <div class="video_wrapper">
                                            <iframe
                                                height={'100%'}
                                                width="100%"
                                                src={mediaData.src}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>

                                            </iframe>
                                        </div>
                                    </div>
                                );
                            }
                            return null
                        })}
                    />
                </div>
            );
        }
    } catch (e) {
        console.error(e);
    }
}

export default ImageCarousel;
