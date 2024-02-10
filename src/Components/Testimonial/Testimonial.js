import React from 'react'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import './Testimonial.css'
import { TestimonialSlide } from './TestimonialSlide';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';

export const Testimonial = ({ item }) => {
    const testimonialData = [{
        name: 'Haseem Isaac',
        image: 'https://avatars.githubusercontent.com/u/95173192?v=4',
        desc: "Brilliant guy to work with, expertise in so many different areas, has helped me in a multitude of projects but more importantly personally too. Would be a great member of any team, that's for sure.",
        link: 'https://www.linkedin.com/in/haseemisaac/',
        company: "HM Revenue & Customs",
        company_image: 'https://www.dpf.org.uk/wp-content/uploads/2019/08/hmrc-logo.jpg',
        role: 'Senior Software Engineer'
    },

    {
        name: 'Esha A.',
        image: 'https://media.licdn.com/dms/image/C5603AQGBn1Ooo4Yv0w/profile-displayphoto-shrink_800_800/0/1562220434963?e=1712188800&v=beta&t=QecD0S94JA5FtM9TjOy1Y2SSGcOh9LD0SNaBJrU3iIU',
        desc: "Amazing to work with, not only as a skilled professional but a real down to earth human who knows how to have fun with respect and boundaries while sticking firm to his beliefs which I admire the most.",
        link: 'https://www.linkedin.com/in/yassin-esha-akthar-15a062151/',
        company: "UBS",
        company_image: 'https://1000logos.net/wp-content/uploads/2021/05/UBS-logo.png',
        role: 'Software Developer'
    },
    {
        name: 'Anwar Abdi',
        image: 'https://media.licdn.com/dms/image/C4D03AQF8FPk4oTD8JQ/profile-displayphoto-shrink_800_800/0/1636072351148?e=1712188800&v=beta&t=6qsNuIY94SpgEcab8g2GqGuubTGQPMtFge4NwplJHh4',
        desc: "Business Partner, Friend, Voice of reason, talented, are all the words that come to mind when I think of Sami. A great professional with skills in all areas of work and life. His contribution to my Learnfinity company has been huge and I cannot thank him enough.",
        link: 'https://www.linkedin.com/in/anwar-abdi-931260160/',
        company: "Sky",
        company_image: 'https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt14e1dac3775ec374/5edfe23ecfec112ba2621d12/Sky_Master_Brand_Logo_LARGE_RGB.png',
        role: 'Software Developer'
    },
    {
        name: 'Elizabeth Hague',
        image: null,
        desc: "It was a pleasure to work with Sami during as a pair programming group in his first role. He was full on brilliant ideas and always had amazing creativity in things I had no idea in. I'm sure he will do amazing things in the future!",
        link: '',
        company: "Threepipe Reply",
        company_image: 'https://media.licdn.com/dms/image/C4E0BAQH-cJHNTuBj_g/company-logo_200_200/0/1630645848269/threepipe_logo?e=2147483647&v=beta&t=CguO2xvyHPTxNAi6hwVW4sduS4P8ZHMXL6CDWLzywtE',
        role: 'Senior Software Developer'
    },
    {
        name: 'Faisal Bhuiyan',
        image: 'https://media.licdn.com/dms/image/C4D03AQH7Yk8u678NCQ/profile-displayphoto-shrink_800_800/0/1610556324502?e=1712188800&v=beta&t=uKNVvM67tWKfh2a5_eaAcmMxt96b-zHAn7ClwqwCQtY',
        desc: "Worked with Sami all throughout University and most recently of an application idea where he turned my Mobile Application idea into reality with ease. His experience in React Native is amazing as can be seen with his Foodii app 👏🏼.",
        link: 'https://www.linkedin.com/in/fashalbhuiyan/',
        company: "GFT Technologies",
        company_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gft_logo.svg/1200px-Gft_logo.svg.png',
        role: 'GCP Cloud Engineer'
    },
    {
        name: 'Omar Yusuf',
        image: null,
        desc: "The Games Development project wherein I really understood the value of Sami in leading, understanding and implementing big projects which led us to passing that module with flying colours!",
        link: 'https://www.linkedin.com/in/yousuf-farhad-9a36827a/',
        company: "Sky",
        company_image: 'https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt14e1dac3775ec374/5edfe23ecfec112ba2621d12/Sky_Master_Brand_Logo_LARGE_RGB.png',
        role: 'Devops Engineer'
    },

    ]



    return (
        <Slide direction='right' duration={1300}>
            <div id='boxContainer'>
                <header className='boxHeading'>Testimonials</header>
                <div>
                    <div className='testimonialWrapper'>
                        <Splide
                            hasTrack={false}
                            options={{
                                perPage: 1,
                                arrows: true,
                                pagination: false,
                                drag: 'free',
                                gap: '3rem',
                                snap: true,
                                autoplay: true,
                                interval: 6000,
                                speed: 1000,
                                resetProgress: true,
                                type: 'loop',
                                autoHeight: true
                            }}
                        >
                            <SplideTrack>
                                {testimonialData.map((item, index) => {
                                    return (
                                        <SplideSlide key={index}>
                                            <TestimonialSlide item={item} />
                                            {/* <div className='testimonialCard'>
                                        <div>
                                            <p>{item.name}</p>
                                            <img src={item.image} alt={item.name} />
                                            <div className='testimonialGradient' />
                                        </div>
                                    </div> */}
                                        </SplideSlide>
                                    );
                                })}
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev"><IoIosArrowBack /></button>
                                <button className="splide__arrow splide__arrow--next"><IoIosArrowForward /></button>
                            </div>
                        </Splide>
                    </div>
                </div>
            </div>
        </Slide>
    )
}
