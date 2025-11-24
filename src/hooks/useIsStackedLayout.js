// useIsStackedLayout.js
import { useState, useEffect } from 'react';

// This breakpoint must match the @media query in your App.css 
const STACKED_BREAKPOINT = 1000;

export const useIsStackedLayout = () => {
    const [isStacked, setIsStacked] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.innerWidth < STACKED_BREAKPOINT;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setIsStacked(window.innerWidth < STACKED_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isStacked;
};