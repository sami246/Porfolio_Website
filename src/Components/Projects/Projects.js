import React from 'react'
import { motion } from 'framer-motion'

export const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>Projects</header>
        </motion.div>
    )
}
