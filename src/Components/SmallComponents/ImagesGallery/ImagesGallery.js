import React, { useEffect, useRef, useState } from 'react'
import './ImagesGallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { isIOS } from 'react-device-detect'

function ImagesGallery({ imagesData }) {
    const [loading, setLoading] = useState(true)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [images, setImages] = useState([]);
    const galleryRef = useRef()

    useEffect(() => {
        setLoading(true);
        // Prepare images data when imagesData prop changes
        const preparedImages = imagesData?.map(image => ({
            original: image.src,
            thumbnail: image.src,
            // originalHeight: isFullScreen ? 'unset' : 350,
            // originalWidth: isFullScreen ? '97dvw' : '80%',
            thumbnailHeight: 60,
            loading: 'lazy',
            originalClass: isFullScreen ? 'actual-image-fullscreen' : 'actual-image',
            thumbnailClass: isFullScreen ? 'thumbnail-image-fullscreen' : 'thumbnail-image'
        }));
        setImages(preparedImages);
        setLoading(false);
    }, [imagesData, isFullScreen]);


    const handleFullscreenChange = (isFullscreen) => {
        setIsFullScreen(isFullscreen)
    };

    const handleMouseOver = () => {
        galleryRef.current.pause()
    }

    const handleMouseLeave = () => {
        galleryRef.current.play()
    }


    return (
        <div>
            {loading ?
                <h3>loading....</h3>
                :
                <ImageGallery
                    ref={galleryRef}
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={isIOS ? false : true}
                    autoPlay
                    slideInterval={6000}
                    onScreenChange={handleFullscreenChange}
                    additionalClass='test'
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}

                />
            }

        </div>
    )
}

export default ImagesGallery