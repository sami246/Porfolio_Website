import React from 'react'
// import Footer from '../Components/Footer/Footer'
import RouteHandler from './index'
import HomeButton from '../Components/SmallComponents/HomeButton/HomeButton'



function ModalContainer() {
    // const { showPopup, setShowPopup, showCarDetails, setShowCarDetails, showBookNow, setShowBookNow } = useContext(AppContext)

    return (
        <div className='FullScreen'>
            {/* --------- ALL MODALS ----------- */}
            {/* <ContactModal isOpen={showPopup} setIsOpen={setShowPopup} />
            <CarDetailsModal isOpen={showCarDetails} setIsOpen={setShowCarDetails} />
            <BookNowModal isOpen={showBookNow} setIsOpen={setShowBookNow} /> */}
            {/* -------------------------------- */}
            <RouteHandler />
            {/* <Footer /> */}
            <HomeButton />
        </div>
    )
}

export default ModalContainer