import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [imageToShowData, setImageToShowData] = useState(null);
    const [imageToShowIndex, setImageToShowIndex] = useState(null);
    const [showContactPopup, setShowContactPopup] = useState(false);

    // Only show popup on root path (e.g. apps.srmakes.co.uk or apps.srmakes.co.uk/)
    // Hide it if visiting a sub-route like /host-worth
    const [showInitialPopup, setShowInitialPopup] = useState(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            return path === '/' || path === '';
        }
        return false;
    });

    return (
        <AppContext.Provider
            value={{
                showInitialPopup, setShowInitialPopup,
                showContactPopup, setShowContactPopup,
                imageToShowData, setImageToShowData,
                imageToShowIndex, setImageToShowIndex
            }}>
            {children}
        </AppContext.Provider>
    );
};