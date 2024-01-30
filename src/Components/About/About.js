import React from 'react'
import './About.css'
import { motion } from "framer-motion"
import HighlightText from '../SmallComponents/HighlightText/HighlightText'

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'

        >
            <header className='boxHeading' id='AboutMe'>About</header>
            <div className='boxText'>
                <div className='ExperienceBody'>
                    Hi there 👋
                    <br></br>
                    <br></br>
                    Welcome to my Portfolio! My name is Sami, a Queen Mary Computer Science Graduate, owner of Foodii mobile app and looking at careers in both web and software development 😁
                    <br></br>
                    <ul className='custom-list'>
                        <li><HighlightText text={"🔭 I’m currently working on a bunch of side projects to upskill myself for my next role"} /></li>
                        <li><HighlightText text={"🌱 My Latest technologies I've been learning are React Native, Supabase, Javascript and a few others"} /></li>
                        <li><HighlightText text={"🤔 I’m looking for help with finding jobs in the development sector (contact me if you feel I may be a fit for a role, I'll be happy to speak 😊)"} /></li>
                        <li><HighlightText text={"💬 Ask me about all of my many many hobbies, from running my own Youtube channels on my weekly football sessions, anime, manga, long walks, traveling, food, and the list goes on!"} /></li>
                        <li><HighlightText text={"📫 How to reach me: Best way would be through my email - samisamadur@gmail.com"} /></li>
                        <li><HighlightText text={"⚡ Fun fact: I have amassed over 23 million views on Youtube ⭐"} /></li>
                    </ul>
                    More About Me:
                    <br></br>
                    <ul className='custom-list'>
                        <li><HighlightText text={"🕋 Devote Muslim and all my decisions revolve around it"} /></li>
                        <li><HighlightText text={"🎾 Love playing sports, mainly Tennis, Football and Badminton"} /></li>
                        <li><HighlightText text={"⚽ Massive Liverpool FC fan"} /></li>
                        <li><HighlightText text={"Bangladeshi background"} /></li>
                        <li><HighlightText text={"🏋️‍♀ Gym Goer"} /></li>
                    </ul>
                </div>
            </div>
            {/* <div className='boxText'>
                Hi there 👋
                <br></br>
                <br></br>
                Welcome to my Portfolio! My name is Sami, a Queen Mary Computer Science Graduate, owner of Foodii mobile app and looking at careers in both web and software development 😁
                <br></br>
                <ul>
                    <li>🔭 I’m currently working on a bunch of side projects to upskill myself for my next role</li>
                    <li>🌱 My Latest technologies I've been learning are React Native, Supabase, Javascript and a few others</li>
                    <li>🤔 I’m looking for help with finding jobs in the development sector (contact me if you feel I may be a fit for a role, I'll be happy to speak 😊)</li>
                    <li>💬 Ask me about all of my many many hobbies, from running my own Youtube channels on my weekly football sessions, anime, manga, long walks, traveling, food, and the list goes on!</li>
                    <li>📫 How to reach me: Best way would be through my email - samisamadur@gmail.com</li>
                    <li>⚡ Fun fact: I have amassed over 23 million views on Youtube ⭐</li>
                </ul>


                <ul>
                    <li>🕋 Devote Muslim and all my decisions revolve around it</li>
                    <li>🎾 Love playing sports, mainly Tennis, Football and Badminton</li>
                    <li>⚽ Massive Liverpool FC fan</li>
                    <li>Bangladeshi background</li>
                    <li>🏋️‍♀ Gym Goer</li>
                </ul>
            </div> */}
        </motion.div>
    )
}
