import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [imageToShowData, setImageToShowData] = useState(null)
    const [imageToShowIndex, setImageToShowIndex] = useState(null)
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [showInitialPopup, setShowInitialPopup] = useState(true);

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