import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [imageToShow, setImageToShow] = useState(null)

    return (
        <AppContext.Provider
            value={{
                imageToShow, setImageToShow
            }}>
            {children}
        </AppContext.Provider>
    );
};