import React from 'react'
import './About.css'
import { motion } from "framer-motion"

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>About</header>
            <div className='boxText'>
                Hi there 👋
                <br></br>
                <br></br>
                Welcome to my Portfolio! My name is Sami, a Queen Mary Computer Science Graduate, owner of Foodii mobile app and looking at careers in both web and software development 😁
                <br></br>
                <br></br>
                • 🔭 I’m currently working on a bunch of side projects to upskill myself for my next role
                <br></br>
                • 🌱 My Latest technologies I've been learning are React Native, Supabase, Javascript and a few others
                <br></br>
                • 🤔 I’m looking for help with finding jobs in the development sector (contact me if you feel I may be a fit for a role, I'll be happy to speak 😊)
                <br></br>
                • 💬 Ask me about all of my many many hobbies, from running my own Youtube channels on my weekly football sessions, anime, manga, long walks, traveling, food, and the list goes on!
                <br></br>
                • 📫 How to reach me: Best way would be through my email - samisamadur@gmail.com
                <br></br>
                • ⚡ Fun fact: I have amassed over 23 million views on Youtube ⭐
                <br></br><br></br>
                More About Me:
                <br></br>
                • 🕋 Devote Muslim and all my decisions revolve around it
                <br></br>
                • 🎾 Love playing sports, mainly Tennis, Football and Badminton
                <br></br>
                • ⚽ Massive Liverpool FC fan
                <br></br>
                • Bangladeshi background
                <br></br>
                • 🏋️‍♀ Gym Goer
            </div>
        </motion.div>
    )
}
