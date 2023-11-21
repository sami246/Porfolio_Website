import React from 'react'
import './Experience.css'
import { motion } from 'framer-motion'
import foodiLogo from '../../assets/logos/foodii.png'

export const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            id='boxContainer'>
            <header className='boxHeading'>Technical Experience</header>
            <div className='boxText'>
                <a className='logoBox' href='https://www.foodii.co.uk' target="_blank" rel="noreferrer">
                    <div className='img_description'>Foodii</div>
                    <img src={foodiLogo} alt={'Foodii Logo'} width='100%' height='100%' />
                </a>
                <div className='ExperienceHeader'>
                    <a href='https://www.foodii.co.uk' className='ExperienceTitle' target="_blank" rel="noreferrer">Foodii - Lead Developer | React Native, Expo, Supabase</a>
                    <div className='ExperienceTime'>SEP 2022 - CURRENT</div>
                </div>
                <div>
                    ● Developed a mobile application/website from the ground up in just five months using React, React Native and Firebase/Supabase.
                    As a solo developer, I am responsible for all aspects of the project, including front-end design, back-end development, testing,
                    architecture and more. The app continues to evolve and grow, providing ongoing opportunities for learning and improvement.
                    Through this project, I gained valuable experience with hooks, APIs, npm packages, IOS/Android and other key technologies while
                    honing my design and user experience skills.
                </div>
                <br></br>
                <a className='logoBox' href='https://threepipereply.com/' target="_blank" rel="noreferrer">
                    <div className='img_description'>Threepipe Reply</div>
                    <img src={'https://media.licdn.com/dms/image/C4E0BAQH-cJHNTuBj_g/company-logo_200_200/0/1630645848269/threepipe_logo?e=2147483647&v=beta&t=CguO2xvyHPTxNAi6hwVW4sduS4P8ZHMXL6CDWLzywtE'} alt={'Threepipe Reply Logo'} width='100%' height='100%' />
                </a>
                <div className='ExperienceHeader'>
                    <a href='https://threepipereply.com/' className='ExperienceTitle' target="_blank" rel="noreferrer">Threepipe Reply - Developer | Python, Pandas, MySQL, React JS</a>
                    <div className='ExperienceTime'>OCT 2021 - NOV 2022</div>
                </div>
                <div>
                    ● Built a dynamic Alteryx/Python/SQL automation using data source API, which allowed the company's SEO team to save dozens of
                    hours on manually done tedious tasks while maintaining and improving for the duration of employment. This increased productivity by
                    60% for the SEO team.
                    <br></br>
                    ● Built Connectors to Brightroll, Amazon, TikTok and more which allowed the company to transition to using new forms of contemporary
                    marketing data daily via APIs using Python and, took charge of SQL tables which were vital in company reporting
                </div>
            </div>
        </motion.div>
    )
}
