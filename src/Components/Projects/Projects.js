import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

export const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>Projects</header>
            <div className='boxText'>
                <div className='ExperienceHeader'>
                    <div className='ExperienceTitle'>How Old? | React Native, Expo, Supabase</div>
                    <div className='ExperienceTime'>OCT 2023 - CURRENT</div>
                </div>
                <div className='ExperienceBody'>
                    ● Multi-platform Mobile Application to keep track of peoples birthdays and ages. Grouping, sorting and notifications features used.
                </div>

                <div className='ExperienceHeader'>
                    <a href='https://sami-dashboard.netlify.app' className='ExperienceTitle' target="_blank" rel="noreferrer">Admin Dashboard | React JS, Tailwind CSS </a>
                    <div className='ExperienceTime'>AUG 2022 - SEP 2022</div>
                </div>
                <div className='ExperienceBody'>
                    ● Built and deployed a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and many more features using
                    the syncfusion library as well as tailwind CSS as the main building blocks.
                    <br></br>
                    ● The project also used React Context API, was completely responsive, and had dark and light themes, using modern UI and folder
                    structure practices.
                </div>

                <div className='ExperienceHeader'>
                    <a href='https://github.com/sami246/FamilyNotice' className='ExperienceTitle' target="_blank" rel="noreferrer">Family Notice | Django, HTML, JQuery</a>
                    <div className='ExperienceTime'>SEPT 2019 - JUNE 2020</div>
                </div>
                <div className='ExperienceBody'>
                    ● My FInal Year Project in which I built a responsive web application that was conceived to be a Trello/Facebook for family
                    members. It consisted of a multitude of functions such as to-do lists, calendar (linked to Google), geo-location and 5 other
                    innovative features that heightened my coding understanding and experience immensely over the long period.
                    <br></br>
                    ● E.g. Using multiple APIs, such as Google's Maps, utilising unit testing, Django models functionality & deployment via Heroku.
                </div>

                <div className='ExperienceHeader'>
                    <div className='ExperienceTitle'>Friender | React JS, Java</div>
                    <div className='ExperienceTime'>SEPT 2018 - DEC 2018</div>
                </div>
                <div className='ExperienceBody'>
                    ● As a software engineering project, a group of colleagues and I conceived a web app, from the ground up, including all steps needed
                    for a successful real-world environment such as Domain analysis, Design report etc. We used Java for the back end and React for
                    the front end. The project increased my ability to work in a pressured, time-constrained team, sharpening skills such as supporting
                    and organising fellow team members while aiming to deliver the best end product.
                </div>

                <div className='ExperienceHeader'>
                    <div className='ExperienceTitle'>Auction Website (eBay Clone) | Django, HTML, Ajax, CSS, Postgress </div>
                    <div className='ExperienceTime'>SEPT 2019 - DEC 2019</div>
                </div>
                <div className='ExperienceBody'>
                    ● Implementing Django framework, Ajax and HTML, using Bootstrap for the main UI. The site included login authentication, bid, search,
                    notification, email and bid tracking functions, to name a few. It is fully responsive and deployed using Openshift.
                </div>

                <div className='ExperienceHeader'>
                    <a href='https://github.com/sami246/recipe_app' className='ExperienceTitle' target="_blank" rel="noreferrer">Recipe Finder Website | React JS, Splide, CSS</a>
                    <div className='ExperienceTime'>AUG 2022</div>
                </div>
                <div className='ExperienceBody'>
                    ● Simple project using with the key features being: Gathering data from API, using react-router-dom for routing, having a fully functional
                    search bar which uses API query to match recipe to input, and using Splide for seamless movement of cards and modern UI
                </div>

                <div className='ExperienceHeader'>
                    <div href='https://sami-travel-advisor.netlify.app' className='ExperienceTitle'>Travel Advisor Website | React JS, Material UI </div>
                    <div className='ExperienceTime'>SEP 2022</div>
                </div>
                <div className='ExperienceBody'>
                    ● Using React and Google API I created a website which takes the location of the user, or any search input and then displays potential
                    hotels, restaurants or attractions that the user can visit. The UI is done mainly with Material UI, using React best practices, allowing
                    for filters of rating, clicking on the map directs you to further info on the location and many more intuitive features. I used this project
                    to become familiar with using Maps API for a project currently being worked on for commercial development.
                </div>
            </div>
        </motion.div>
    )
}
