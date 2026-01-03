// import images
import Hero_person from "./assets/images/Hero/person.webp";

import figma from "./assets/images/Skills/figma.png";
import html from "./assets/images/Skills/html.webp";
import css from "./assets/images/Skills/css.svg";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import javascript from "./assets/images/Skills/javascript.png";
import git from "./assets/images/Skills/git.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import sass from "./assets/images/Skills/sass.png";
import reactRouter from "./assets/images/Skills/reactRouter.png";
import mongoDB from "./assets/images/Skills/mongodb.png";
import jwtLogo from "./assets/images/Skills/jwt.png";
import bcryptLogo from "./assets/images/Skills/bcrypt.jpeg";


import exp_imgIntegration from "./assets/images/Services/imgIntegration.png";
import exp_imgFleet from "./assets/images/Services/imgFleet.png";
import exp_imgChief from "./assets/images/Services/imgChief.png";

import projectKasa from "./assets/images/projects/imgKasa.png";
import projectGrimoire from "./assets/images/projects/imgGrimoire.png";
import projectBooki from "./assets/images/projects/imgBooki.png";
import projectArchi from "./assets/images/projects/imgArchi.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";


import React from "react";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: FaLayerGroup,
    },
    {
      link: "#projects",
      icon: FaLaptopCode,
    },
    {
      link: "#services",
      icon: MdWork,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Experienced Programme Manager, Junior Web Developer",
    firstName: "NICOlAS",
    LastName: "MADIER",
    btnText: "Contact me",
    image: Hero_person,
    hero_content: [
      {
        count: "15+",
        text: "Years of experience in Programme Management",
      },
      {
        count: "10+",
        text: "Digital & Non-Digital Projects worked in my career",
      },
      {
        count: "6+",
        text: "Web Developper course projects",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I am familiar with",
    skills_content: [
      {
        name: "HTML 5",
        logo: html,
      },
      {
        name: "CSS 3",
        logo: css,
      },
      {
        name: "Sass",
        logo: sass,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: 'Tailwind CSS',
        logo: tailwind,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        logo: mongoDB,
      },
      {
        name: 'git',
        logo: git,
      },
      {
        name: "Figma",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Experienced Programme Manager",
    subtitle: "Heading several major transformation programmes",
    service_content: [
      {
        title: "Head of Integration:",
        para: "leading the overall Eurostar–Thalys integration programme, coordinating cross-functional teams and senior stakeholders across both organisations. Accountable for the end‑to‑end delivery of key integration streams, including group rebranding, consolidation of inventory and booking systems, and the rollout of a single digital platform. Driving stakeholder alignment and change management to successfully launch the new Eurostar brand with one website, one app and a unified Club Eurostar loyalty programme.",
        logo: exp_imgIntegration,
      },
      {
        title: "Head of New Fleet Commercial Readiness:",
        para: "leading the overall go‑to‑market programme for Eurostar’s new train fleet, aligning commercial, digital, operations and customer teams. Accountable for the delivery of the new revenue management strategy and the redesign of the end‑to‑end digital booking journey, including seat maps and purchase flows for the new train type. Responsible for ensuring marketing and communications readiness to support a seamless launch and strong commercial performance of the new fleet",
        logo: exp_imgFleet,
      },
      {
        title: "Chief of Staff to the CEO and Head of Programme Delivery",
        para: "providing overall coordination between the executive office and the company’s strategic programmes. Preparing and supporting Executive Committee meetings end-to-end (agendas, briefing packs and dashboards, note-taking and formal minutes, tracking decisions and actions). Monitoring and challenging progress on key strategic initiatives, consolidating cross-functional updates, and providing overarching programme governance and stakeholder alignment for the CEO and ExCom.",
        logo: exp_imgChief,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "Web developper course projects",
    // image: person_project,
    project_content: [
      {
        title: "Kasa - Apartment sharing platform",
        image: projectKasa,
        url: "https://nicomad44.github.io/Kasa/",
        skillsTags: [reactjs, sass, reactRouter],
        description: [
          {
            subtitle: "Context",
            subtexts: [
              "Development of the interface for a rental accommodation application (KASA project) based on mockups, with a modern redesign of the site in React for a smooth and responsive experience.",
              "The project focuses on the front-end part, consuming simulated data from a JSON file instead of a real API in order to concentrate on display logic."
            ],
          },
          {
            subtitle: "Objectives",
            subtexts: [
              "Set up a clear React architecture with reusable components (accommodation cards, carousel, dropdowns, error page) while strictly following the provided design.",
              "Configure routing with React Router (home page, accommodation detail, About, 404) and handle URL parameters to display the correct accommodation and nonexistent routes."
            ],
          },
          {
            subtitle: "Tech stack",
            subtexts: [
              "React for building UI components.",
              "React Router for navigation and handling dynamic routes.",
              "Vite to bootstrap and serve the application quickly in development.",
              "Node.js to run the JavaScript environment during development.",
            ],
          },
          {
            subtitle: "Skills developed",
            subtexts: [
              "Structuring a single-page application with routes, layouts, and consistent React components.",
              "Handling JSON data (list of accommodations) and passing it through props to render detailed views without errors or warnings in the console.",
            ],
          },
          {
            subtitle: "Results and impact",
            subtexts: [
              "Delivery of a functional, responsive front-end application aligned with the desktop/mobile mockups, including main pages, a 404 page, and complete navigation.",
              "Organized, readable code, ready to be integrated with a future JavaScript back end, and suitable for showcasing in a junior front-end developer portfolio.",
            ],
          },
          {
            subtitle: "Improvement perspectives",
            subtexts: [
              "Add tests (unit and/or end-to-end), more advanced state management, and a real API to replace the static JSON.",
              "Improve accessibility (ARIA, keyboard navigation) and performance (image optimization, code splitting) to get closer to production level.",
            ],
          },
        ],
      },
      {
        title: "Grimoire - Book review site",
        image: projectGrimoire,
        url: "https://nicomad44.github.io/frontend/",
        skillsTags: [nodejs, mongoDB, jwtLogo, bcryptLogo],
        description: [
          {
            subtitle: "Context",
            subtexts: [
              "Back-end development of a book rating site through a secure REST API, managing books, users, and their ratings in a Node.js environment.",
            ],
          },
          {
            subtitle: "Objectives",
            subtexts: [
              "Design a robust server handling authentication, CRUD operations on books and ratings, as well as computing the average rating for each book.",
            ],
          },
          {
            subtitle: "Tech stack",
            subtexts: [
              "Node.js and Express to build the API and structure the server routes.",
              "MongoDB and Mongoose for data persistence and modeling (books, users, ratings).",
              "Security and upload tools: JWT/Bcrypt for authentication, Multer for image handling, while integrating Green Code principles.",
            ],
          },
          {
            subtitle: "Skills developed",
            subtexts: [
              "Designing an organized REST API (routes, controllers, models) following a clear MVC architecture.",
              "Implementing secure authentication (password hashing, JWT tokens) and managing access rights to resources.",
              "Handling files and basic image optimization while applying good back-end eco-design practices.",
            ],
          },
          {
            subtitle: "Results and impact",
            subtexts: [
              "Delivery of a functional and tested back end, ready to be consumed by an existing front end, offering account creation, book addition, rating, and average rating consultation for each book.",
            ],
          },
          {
            subtitle: "Improvement perspectives",
            subtexts: [
              "Increase test coverage, enrich documentation (Swagger / OpenAPI), and further optimize queries and storage to reduce the service’s environmental footprint.",
            ],
          },
        ],
      },
      {
        title: "Booki - Travel agency homepage",
        image: projectBooki,
        url: "https://nicomad44.github.io/booki/",
        skillsTags: [nodejs, mongoDB, jwtLogo, bcryptLogo],
        description: [
          {
            subtitle: "Context",
            subtexts: [
              "Integration of a travel agency homepage from Figma mockups for mobile, tablet, and desktop, with the goal of delivering a responsive interface faithful to the provided design.",
            ],
          },
          {
            subtitle: "Objectives",
            subtexts: [
              "Precisely reproduce the mockup in HTML/CSS while ensuring a consistent user experience across different screen sizes, without relying on Figma-generated code.",
            ],
          },
          {
            subtitle: "Tech stack",
            subtexts: [
              "HTML5 to structure the page content (header, sections, cards, forms, footer) in a semantic and accessible way.",
              "CSS3 for styling, responsive layout (flexbox, grid, media queries), and visual state management (hover, focus, etc.).",
            ],
          },
          {
            subtitle: "Skills developed",
            subtexts: [
              "Analyzing and interpreting Figma mockups and translating them into clean, maintainable, and well-organized code.",
              "Mastering responsive design techniques to adapt layout and typography to mobile, tablet, and desktop screens.",
            ],
          },
          {
            subtitle: "Results and impact",
            subtexts: [
              "Delivery of a static responsive landing page, W3C-valid, cross-browser compatible, and aligned with modern HTML/CSS integration best practices.",
            ],
          },
          {
            subtitle: "Improvement perspectives",
            subtexts: [
              "Potential addition of subtle animations, performance optimizations (images, CSS), and accessibility enhancements (ARIA, keyboard navigation) to reach production level.",
            ],
          },
        ],
      },
      {
        title: "Portofolio Architecte",
        image: projectArchi,
        url: "https://nicomad44.github.io/Portfolio-architecte-sophie-bluel/",
        skillsTags: [
          reactjs,
        ],
        description: [
          {
            subtitle: "Context",
            subtexts: [
              "Creation of the dynamic section of an interior architect’s portfolio, with the challenge of transforming a static mockup into an interactive interface consuming an existing API.",
            ],
          },
          {
            subtitle: "Objectives",
            subtexts: [
              "Display and filter the architect’s projects based on API data, while managing user interactions (filters, buttons, navigation) using vanilla JavaScript.",
              "Implement an admin login page and an upload modal to allow adding new media, making the gallery manageable by the client.",
            ],
          },
          {
            subtitle: "Tech stack",
            subtexts: [
              "JavaScript ES6+ for DOM manipulation, event handling, and HTTP API calls (fetch, response and error handling).",
              "Provided HTML/CSS adjusted to support dynamic behavior, Figma for mockups, VS Code for development, and Git/GitHub for version control.",
            ],
          },
          {
            subtitle: "Skills developed",
            subtexts: [
              "Fetching and displaying data from a REST API, dynamically generating content (project cards, filters), and updating the interface without page reloads.",
              "Implementing basic front-end authentication (login form, token storage) and managing media upload/deletion logic through the modal.",
            ],
          },
          {
            subtitle: "Results and impact",
            subtexts: [
              "Delivery of a dynamic and fully functional showcase website where the client can manage her projects, demonstrating strong front-end JavaScript skills and effective API communication.",
            ],
          },
          {
            subtitle: "Improvement perspectives",
            subtexts: [
              "Enhance error handling and user feedback (messages, loaders), further refactor the JavaScript code, and add tests to ensure reliability of key features.",
            ],
          },
        ],
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "nicolas.madier@gmail.com",
        icon: GrMail,
        link: "mailto:nicolas.madier@gmail.com",
      },
      // {
      //   text: "+91 1234 56778",
      //   icon: MdCall,
      //   link: "https://wa.me/1234567890",
      // },
      // {
      //   text: "codeaprogram",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
