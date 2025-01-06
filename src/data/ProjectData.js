import DashboardImage1 from '../assets/project_images/Admin Dashboard 1.png'
import DashboardImage2 from '../assets/project_images/Admin Dashboard 2.png'
import DashboardImage3 from '../assets/project_images/Admin Dashboard 3.png'
import DashboardImage4 from '../assets/project_images/Admin Dashboard 4.png'
import RoyzImage1 from '../assets/project_images/Royz Rental 1.png'
import RoyzImage2 from '../assets/project_images/Royz Rental 2.png'
import RoyzImage3 from '../assets/project_images/Royz Rental 3.png'
import RoyzImage4 from '../assets/project_images/Royz Rental 4.png'
import RoyzImage5 from '../assets/project_images/Royz Rental 5.png'
// import RoyzImage6 from '../assets/project_images/Royz Rental 6.png'
import LearnfinityImage1 from '../assets/project_images/Learnfinity 1.jpg'
import LearnfinityImage2 from '../assets/project_images/Learnfinity 2.jpg'
import LearnfinityImage3 from '../assets/project_images/Learnfinity 3.jpg'
import LearnfinityImage4 from '../assets/project_images/Learnfinity 4.jpg'
import TravelAdvisorImage1 from '../assets/project_images/Travel Advisor 1.png'
import RecipeFinderImage1 from '../assets/project_images/Recipe Finder 1.png'
import RecipeFinderImage2 from '../assets/project_images/Recipe Finder 2.png'
import RecipeFinderImage3 from '../assets/project_images/Recipe Finder 3.png'
import FamilyNoticeImage1 from '../assets/project_images/Family Notice 1.png'
import FamilyNoticeImage2 from '../assets/project_images/Family Notice 2.png'
import FamilyNoticeImage3 from '../assets/project_images/Family Notice 3.png'
import FamilyNoticeImage4 from '../assets/project_images/Family Notice 4.png'
import FamilyNoticeImage5 from '../assets/project_images/Family Notice 5.png'
import AwdaImage1 from '../assets/project_images/Awda 1.png'

export const ProjectData = [
    {
        title: 'Awda',
        technologies: 'React Native, Expo, Supabase, Figma',
        link: null,
        startMonth: 'DEC 2023',
        endMonth: 'CURRENT',
        bulletPoints: [
            'Multi-platform Mobile Application to help Muslim Reverts learn the basics of Islam all in one place',
            'Main Focus of this was front end implementation working with other developers to create the whole application.',
            'Skills such as React-Native-Navigation, Expo, Supabase, Async Storage and many more are displayed within this application',
            'Work in progress screens can be seen below...'
        ],
        media: [
            {
                type: 'image',
                src: AwdaImage1,
                description: '',
                link: ''
            }

        ]

    },
    {
        title: 'Royz Rental',
        technologies: 'React, Vercel',
        link: 'https://www.royzrental.com',
        startMonth: 'MAR 2024',
        endMonth: 'APRIL 2024',
        bulletPoints: [
            'Freelance project to build a website for a car rental business. Everything from the text, design and images handled by myself. Attempt at a sleek, cool design which car enthusiasts will appreciate and be more likely to hire from.',
            'Fully responsive, using modern UI and features such as toasts, blur background, carousels e.t.c.'
        ],
        media: [
            {
                type: 'image',
                src: RoyzImage1,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: RoyzImage2,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: RoyzImage3,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: RoyzImage4,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: RoyzImage5,
                description: '',
                link: ''
            }

        ]
    },
    {
        title: 'Learnfinity',
        technologies: 'React, Vercel',
        link: 'https://www.learnfinity.co.uk',
        startMonth: 'MAY 2024',
        endMonth: 'JUNE 2024',
        bulletPoints: [
            'Freelance project to build a website for a computer science mentoring/bootcamp business. The idea was to have a clean, professional design that would attract students and parents alike. While showing all of the main features of the business such as the courses, tutors, testimonials and contact information.',
            'Fully responsive, using modern UI and features such as toasts, blur background, carousels e.t.c.',
            'There have been many changes to the website since the initial build, such as adding a blog, more courses, and a more interactive design.'
        ],
        media: [
            {
                type: 'image',
                src: LearnfinityImage1,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: LearnfinityImage2,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: LearnfinityImage3,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: LearnfinityImage4,
                description: '',
                link: ''
            },
        ]
    },
    {
        title: 'Admin Dashboard',
        technologies: 'React JS, Tailwind CSS',
        link: 'https://sami-dashboard.netlify.app',
        startMonth: 'AUG 2022',
        endMonth: 'SEP 2022',
        bulletPoints: [
            'Built and deployed a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and many more features using the syncfusion library as well as tailwind CSS as the main building blocks.',
            'The project also used React Context API, was completely responsive, and had dark and light themes, using modern UI and folder structure practices.'
        ],
        buttonLinks: [
            {
                title: 'Website',
                link: 'https://sami-dashboard.netlify.app'
            },
        ],
        media: [
            {
                type: 'image',
                src: DashboardImage1,
                link: 'https://sami-dashboard.netlify.app',
                description: ''
            },
            {
                type: 'image',
                src: DashboardImage2,
                link: 'https://sami-dashboard.netlify.app/kanban',
                description: ''
            },
            {
                type: 'image',
                src: DashboardImage3,
                link: 'https://sami-dashboard.netlify.app/area',
                description: ''
            },
            {
                type: 'image',
                src: DashboardImage4,
                link: 'https://sami-dashboard.netlify.app/customers',
                description: ''
            },
        ]
    },
    {
        title: 'Family Notice',
        technologies: 'Django, HTML, JQuery',
        link: 'https://github.com/sami246/FamilyNotice',
        startMonth: 'SEPT 2019',
        endMonth: 'JUNE 2020',
        bulletPoints: [
            `My Final Year Project in which I built a responsive web application that was conceived to be a Trello/Facebook for family
            members. It consisted of a multitude of functions such as to-do lists, calendar (linked to Google), geo-location and 5 other
            innovative features that heightened my coding understanding and experience immensely over the long period.`,
            `E.g. Using multiple APIs, such as Google's Maps, utilising unit testing, Django models functionality & deployment via Heroku.`,
            'Definitively not the best in terms of design but we all have to start somewhere 😅 (focus was more on the functionality)'
        ],
        media: [
            {
                type: 'image',
                src: FamilyNoticeImage1,
                link: 'https://github.com/sami246/FamilyNotice',
                description: ''
            },
            {
                type: 'image',
                src: FamilyNoticeImage2,
                link: 'https://github.com/sami246/FamilyNotice',
                description: ''
            },
            {
                type: 'image',
                src: FamilyNoticeImage3,
                link: 'https://github.com/sami246/FamilyNotice',
                description: ''
            },
            {
                type: 'image',
                src: FamilyNoticeImage4,
                link: 'https://github.com/sami246/FamilyNotice',
                description: ''
            },
            {
                type: 'image',
                src: FamilyNoticeImage5,
                link: 'https://github.com/sami246/FamilyNotice',
                description: ''
            },
        ]
    },
    {
        title: 'Friender',
        technologies: 'React JS, Java',
        link: null,
        startMonth: 'SEPT 2018',
        endMonth: 'DEC 2018',
        bulletPoints: [
            `As a software engineering project, a group of colleagues and I conceived a web app, from the ground up, including all steps needed
            for a successful real-world environment such as Domain analysis, Design report etc. We used Java for the back end and React for
            the front end.`,
            `The project increased my ability to work in a pressured, time-constrained team, sharpening skills such as supporting
            and organising fellow team members while aiming to deliver the best end product.`
        ],
        media: [

        ]
    },
    {
        title: 'Auction Website (eBay Clone)',
        technologies: 'Django, HTML, Ajax, CSS, Postgress',
        link: null,
        startMonth: 'SEPT 2019',
        endMonth: 'DEC 2019',
        bulletPoints: [
            `Implementing Django framework, Ajax and HTML, using Bootstrap for the main UI. The site included login authentication, bid, search,
            notification, email and bid tracking functions, to name a few. It is fully responsive and deployed using Openshift.`
        ],
        media: [

        ]
    },
    {
        title: 'Recipe Finder Website',
        technologies: 'React JS, Splide, CSS',
        link: 'https://github.com/sami246/recipe_app',
        startMonth: 'AUG 2022',
        endMonth: 'AUG 2022',
        bulletPoints: [
            `Simple project using with the key features being: Gathering data from API, using react-router-dom for routing, having a fully functional
            search bar which uses API query to match recipe to input, and using Splide for seamless movement of cards and modern UI`
        ],
        media: [
            {
                type: 'image',
                src: RecipeFinderImage1,
                link: 'https://github.com/sami246/recipe_app'
            },
            {
                type: 'image',
                src: RecipeFinderImage2,
                link: 'https://github.com/sami246/recipe_app'
            },
            {
                type: 'image',
                src: RecipeFinderImage3,
                link: 'https://github.com/sami246/recipe_app'
            }
        ]
    },
    {
        title: 'Travel Advisor Website',
        technologies: 'React JS, Material UI',
        link: 'https://sami-travel-advisor.netlify.app',
        startMonth: 'SEP 2022',
        endMonth: 'SEP 2022',
        bulletPoints: [
            `Using React and Google API I created a website which takes the location of the user, or any search input and then displays potential
            hotels, restaurants or attractions that the user can visit. The UI is done mainly with Material UI, using React best practices, allowing
            for filters of rating, clicking on the map directs you to further info on the location and many more intuitive features. I used this project
            to become familiar with using Maps API for a project currently being worked on for commercial development.`
        ],
        media: [
            {
                type: 'image',
                src: TravelAdvisorImage1
            }
        ]
    },
    // {
    //     title: 'Demon Slayer Unity Game',
    //     technologies: 'Unity, C#',
    //     link: 'https://docs.google.com/document/d/1QOmrPP6H8uLkEXbx791s3Ve1nKxMR7-HCJIHb9vqjhQ/edit?usp=sharing',
    //     startMonth: 'JAN 2021',
    //     endMonth: 'JUNE 2021',
    //     bulletPoints: [
    //         'Using Unity & C# I created a game based on the anime demon slayer. It included various game-making techniques such as scores, health bar, attacking, animations, sound design, level design, AI, enemies, UI and much more.'
    //     ],
    //     media: [
    //         {
    //             type: 'video',
    //             src: 'https://www.youtube.com/embed/HNdUZPEna1Q?si=0c98yTXOVIHkDSFi'
    //         },
    //     ]
    // },
    // {
    //     title: '',
    //     technologies: '',
    //     link: null,
    //     startMonth: '',
    //     endMonth: '',
    //     bulletPoints: [
    //         ''
    //     ]
    // },
]