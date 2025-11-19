import React, { useContext } from 'react'
// import Footer from '../Components/Footer/Footer'
import RouteHandler from './index'
import HomeButton from '../Components/SmallComponents/HomeButton/HomeButton'
import ContactModal from '../Components/Modals/ContactModal'
import { AppContext } from '../contexts/AppContext'
import InitialModal from '../Components/Modals/InitialModal'



function ModalContainer() {
    const { showInitialPopup, setShowInitialPopup, showContactPopup, setShowContactPopup, } = useContext(AppContext)

    return (
        <div className='FullScreen'>
            {/* --------- ALL MODALS ----------- */}
            <ContactModal isOpen={showContactPopup} setIsOpen={setShowContactPopup} />
            <InitialModal isOpen={showInitialPopup} setIsOpen={setShowInitialPopup} />
            {/* -------------------------------- */}
            <RouteHandler />
            {/* <Footer /> */}
            <HomeButton />
        </div>
    )
}

export default ModalContainer