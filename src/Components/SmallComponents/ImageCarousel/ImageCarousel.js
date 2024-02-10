import React, { useContext } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ImageCarousel.css'
import { AppContext } from '../../../contexts/AppContext';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import './ImageCarousel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ImageSlide from './ImageSlide';

const handleDragStart = (e) => e.preventDefault();

const ImageCarousel = ({ media }) => {
    const { setImageToShowData, setImageToShowIndex } = useContext(AppContext)

    try {
        if (media?.length !== 0) {
            return (
                <div className='mediaWrapper'>
                    <Splide
                        hasTrack={false}
                        options={{
                            perPage: 1,
                            arrows: true,
                            pagination: false,
                            drag: 'free',
                            gap: '3rem',
                            snap: true,
                            autoplay: true,
                            interval: 16000,
                            speed: 1000,
                            resetProgress: true,
                            type: 'loop',
                        }}
                    >
                        <SplideTrack>
                            {media.map((item, index) => {
                                return (
                                    <SplideSlide
                                        onClick={() => {
                                            setImageToShowData(media)
                                            setImageToShowIndex(index)
                                        }} key={item.src + index}>
                                        <ImageSlide item={item} />
                                    </SplideSlide>
                                );
                            })}
                        </SplideTrack>
                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev"><IoIosArrowBack /></button>
                            <button className="splide__arrow splide__arrow--next"><IoIosArrowForward /></button>
                        </div>
                    </Splide>
                </div>
            );
        }
    } catch (e) {
        console.error(e);
    }
}

export default ImageCarousel;
