import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [imageToShowData, setImageToShowData] = useState(null)
    const [imageToShowIndex, setImageToShowIndex] = useState(null)

    return (
        <AppContext.Provider
            value={{
                imageToShowData, setImageToShowData,
                imageToShowIndex, setImageToShowIndex
            }}>
            {children}
        </AppContext.Provider>
    );
};