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
// import FamilyNoticeImage1 from '../assets/project_images/Family Notice 1.png'
// import FamilyNoticeImage2 from '../assets/project_images/Family Notice 2.png'
// import FamilyNoticeImage3 from '../assets/project_images/Family Notice 3.png'
// import FamilyNoticeImage4 from '../assets/project_images/Family Notice 4.png'
// import FamilyNoticeImage5 from '../assets/project_images/Family Notice 5.png'
import AwdaImage1 from '../assets/project_images/Awda 1.png'
import QuickTeamsImage1 from '../assets/project_images/Quick Teams 1.jpg'
import QuickTeamsImage2 from '../assets/project_images/Quick Teams 2.jpg'
import foodigif1 from '../assets/experience_images/foodii/foodii gif 1.gif'
import foodigif2 from '../assets/experience_images/foodii/foodii gif 2.gif'
// import foodiPhone1 from '../assets/experience_images/foodii/Phone Screenshots - 1.jpg'
// import foodiPhone2 from '../assets/experience_images/foodii/Phone Screenshots - 2.jpg'
// import foodiPhone3 from '../assets/experience_images/foodii/Phone Screenshots - 3.jpg'
// import foodiPhone4 from '../assets/experience_images/foodii/Phone Screenshots - 4.jpg'
// import foodiPhone5 from '../assets/experience_images/foodii/Phone Screenshots - 5.jpg'
// import foodiPhone6 from '../assets/experience_images/foodii/Phone Screenshots - 6.jpg'
import foodiCollage1 from '../assets/experience_images/foodii/phone screenshots collage 1.png'
import foodiCollage2 from '../assets/experience_images/foodii/phone screenshots collage 2.png'
import foodiWebsite1 from '../assets/experience_images/foodii/Website 1.png'
import foodiWebsiteGIF from '../assets/experience_images/foodii/Foodii Website GIF.gif'
import foodiLogo from '../assets/logos/foodii.png'
// import SRMLogo from '../assets/SRMakes Logo.png'
import SRMakesImage1 from '../assets/project_images/SRMakes Apps 1.webp'
import SRMakesImage2 from '../assets/project_images/SRMakes Apps 2.webp'
import SRMakesImage3 from '../assets/project_images/SRMakes Apps 3.webp'
import SRMakesImage4 from '../assets/project_images/SRMakes Apps 4.webp'
import SRMakesImage5 from '../assets/project_images/SRMakes Apps 5.webp'


export const ProjectData = [
    {
        id: 'apps-portal',
        title: 'SRMakes Apps Portal & Validator',
        technologies: 'React, Supabase, Tailwind CSS, TypeScript, TanStack Query',
        link: 'https://apps.srmakes.co.uk',
        startMonth: 'NOV 2024',
        endMonth: 'PRESENT',
        bulletPoints: [
            'Architected a "Startup Validator" platform designed to test market viability for new concepts (MVPs) alongside live apps. The system captures user interest via wait-lists to validate product ideas before full development.',
            'Engineered a Server-Driven UI architecture: The entire landing page layout (Hero, Features, Problem/Solution) is stored as structured JSONB in Supabase. This allows the frontend to dynamically render different component stacks for each project without code changes.',
            'Optimized Data Layer: Implemented TanStack Query (React Query) for aggressive caching and optimistic UI updates, ensuring instant feedback when users sign up or vote on features, minimizing database costs.',
            'Advanced Backend Logic: utilized Supabase RPCs (Remote Procedure Calls) to handle atomic transactions for wait-list logic and secure row-level security (RLS) policies to protect user data.',
            'Dynamic Theming Engine: Solved complex styling challenges using a Tailwind "Safelist" strategy to inject project-specific color identities (primary/secondary themes) at runtime, giving every concept its own unique brand feel.'
        ],
        buttonLinks: [
            {
                title: 'Website',
                link: 'https://apps.srmakes.co.uk'
            }
        ],
        media: [
            {
                type: 'image',
                src: SRMakesImage1,
                link: 'https://apps.srmakes.co.uk',
                description: 'Project Showcase Dashboard'
            },
            {
                type: 'image',
                src: SRMakesImage2,
                link: 'https://apps.srmakes.co.uk/projects/awda',
                description: 'Dynamic Project Hero, Timeline and Problem/Solution Sections'
            },
            {
                type: 'image',
                src: SRMakesImage3,
                link: 'https://apps.srmakes.co.uk/projects/awda',
                description: 'Dynamic Project Potential Features List'
            },
            {
                type: 'image',
                src: SRMakesImage4,
                link: 'https://apps.srmakes.co.uk/projects/awda',
                description: 'Main wait-list for under-development projects to gather user interest'
            },
            {
                type: 'image',
                src: SRMakesImage5,
                link: 'https://apps.srmakes.co.uk/projects/awda',
                description: 'Light Mode Theming with Dynamic Colors'
            },
        ]
    },
    {
        id: 'foodii',
        title: 'Foodii',
        position: 'Lead Developer',
        technologies: 'React Native, Expo, Supabase',
        link: 'https://www.foodii.co.uk',
        startMonth: 'SEP 2022',
        endMonth: 'FEB 2023',
        logoSrc: foodiLogo,
        bulletPoints: [
            `Developed a mobile application/website from the ground up in just five months using React, React Native and Firebase/Supabase.
            As a solo developer, I am responsible for all aspects of the project, including front-end design, back-end development, testing,
            architecture and more.`,
            `The app continues to evolve and grow, providing ongoing opportunities for learning and improvement.
            Through this project, I gained valuable experience with hooks, APIs, npm packages, IOS/Android and other key technologies while
            honing my design and user experience skills.`,
            `App currently on hold due to other commitments but will be continued in the future.`
        ],
        buttonLinks: [
            {
                title: 'Google Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.sami246.foodi'
            },
            {
                title: 'Apple Store',
                link: 'https://apps.apple.com/th/app/foodii-restaurant-companion/id6447701868'
            },
            {
                title: 'Website',
                link: 'https://foodii.co.uk'
            },

        ],
        media: [
            {
                type: 'image',
                src: foodigif1,
                link: 'https://foodii.co.uk',
                description: ''
            },
            {
                type: 'image',
                src: foodigif2,
                link: 'https://foodii.co.uk',
                description: ''
            },
            {
                type: 'image',
                src: foodiWebsiteGIF,
                link: 'https://foodii.co.uk',
                description: ''
            },
            {
                type: 'image',
                src: foodiWebsite1,
                link: 'https://foodii.co.uk',
                description: ''
            },
            {
                type: 'image',
                src: foodiCollage1,
                link: 'https://foodii.co.uk',
                description: ''
            },
            {
                type: 'image',
                src: foodiCollage2,
                link: 'https://foodii.co.uk',
                description: ''
            },
        ]
    },
    {
        id: 'quick-teams',
        title: 'Quick Teams',
        technologies: 'React Native, Expo, Figma',
        link: null,
        startMonth: 'NOV 2024',
        endMonth: 'JAN 2025',
        bulletPoints: [
            'Effortless Team Generation: Built a fast and intuitive mobile app for quickly creating balanced sports teams, streamlining the team-picking process.',
            'Modern Navigation & Type Safety: Used Expo Router for seamless navigation and TypeScript for a robust, maintainable codebase.',
            'Offline-First Performance: Designed the app with offline-first standards, ensuring a smooth user experience even without an internet connection.',
            'Optimized UI & Monetization: Created a clean, user-friendly interface with persistent sorting options for player lists while integrating Google AdMob for passive revenue.'
        ],
        buttonLinks: [
            {
                title: 'Google Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.SRMakes.QuickTeams&gl=UK'
            },
            {
                title: 'App Store',
                link: 'https://apps.apple.com/us/app/quick-teams-team-generator/id6740728374'
            }
        ],
        media: [
            {
                type: 'image',
                src: QuickTeamsImage1,
                description: '',
                link: ''
            },
            {
                type: 'image',
                src: QuickTeamsImage2,
                description: '',
                link: ''
            }

        ]
    },
    {
        id: 'awda',
        title: 'Awda',
        technologies: 'React Native, Expo, Supabase, Figma',
        link: null,
        startMonth: 'DEC 2023',
        endMonth: 'FEB 2024',
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
        id: 'royz-rental',
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
        id: 'learnfinity',
        title: 'Learnfinity',
        technologies: 'React, Vercel',
        link: 'https://www.learnfinity.co.uk',
        startMonth: 'MAY 2024',
        endMonth: 'JUNE 2024',
        bulletPoints: [
            'Freelance project to build a website for a computer science mentoring/boot camp business. The idea was to have a clean, professional design that would attract students and parents alike. While showing all of the main features of the business such as the courses, tutors, testimonials and contact information.',
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
        id: 'admin-dashboard',
        title: 'Admin Dashboard',
        technologies: 'React JS, Tailwind CSS',
        link: 'https://sami-dashboard.netlify.app',
        startMonth: 'AUG 2022',
        endMonth: 'SEP 2022',
        bulletPoints: [
            'Built and deployed a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and many more features using the Syncfusion library as well as Tailwind CSS as the main building blocks.',
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
        id: 'family-notice',
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
            // {
            //     type: 'image',
            //     src: FamilyNoticeImage1,
            //     link: 'https://github.com/sami246/FamilyNotice',
            //     description: ''
            // },
            // {
            //     type: 'image',
            //     src: FamilyNoticeImage2,
            //     link: 'https://github.com/sami246/FamilyNotice',
            //     description: ''
            // },
            // {
            //     type: 'image',
            //     src: FamilyNoticeImage3,
            //     link: 'https://github.com/sami246/FamilyNotice',
            //     description: ''
            // },
            // {
            //     type: 'image',
            //     src: FamilyNoticeImage4,
            //     link: 'https://github.com/sami246/FamilyNotice',
            //     description: ''
            // },
            // {
            //     type: 'image',
            //     src: FamilyNoticeImage5,
            //     link: 'https://github.com/sami246/FamilyNotice',
            //     description: ''
            // },
        ]
    },
    {
        id: 'friender',
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
        id: 'auction-website',
        title: 'Auction Website (eBay Clone)',
        technologies: 'Django, HTML, Ajax, CSS, Postgresql',
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
        id: 'recipe-finder',
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
        id: 'travel-advisor',
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
    //     id: 'demon-slayer-unity-game',
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