import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  postgresql,
  mysql,
  expressjs,
  wix,
  brandcoat,
  glidelex,
  spatium,
  gerichtRestaurant,
  shirtCustomizer,
  jobit,
  ecommerceapi,
  DigitalHippo,
  nextjs,
  redis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: `CMS Developer`,
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //     name: "PostgreSql",
  //     icon: postgresql,
  // },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //     name: "Wix CMS",
  //     icon: wix,
  // },
];

const experiences = [
  {
    title: "Scrum Master | Full Stack Developer",
    company_name: "Brandcoat",
    company_website_link: "https://spatiumsoftware.com/",
    icon: spatium,
    iconBg: "#1f244e",
    date: "Jan 2024 - Current",
    points: [
      "Coached and mentored 2 teams in the adoption and implementation of scrum practices.",
      "Removed impediments, promoted continuous improvement, and tracked performance metrics for 4 projects.",
      "Acted as a liaison with stakeholders, managing expectations and providing project updates for 4 projects.",
      "Worked as a full-stack developer on two projects, building and integrating the backend while mentoring junior frontend developers on dynamically displaying data using the backend.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Brandcoat",
    company_website_link: "https://www.brandcoat.net/",
    icon: brandcoat,
    iconBg: "#f0f0f0",
    date: "Jun 2022 - Jan 2024",
    points: [
      "Developing and maintaining serverside application and API using express and webflow APi.",
      "Developing algorithms designed to extract insights and actionable information from complex databases.",
      "Developing and maintaining frontend components to show the extracted insights using ChartJS.",
      "Participating in UI/UX designing process and providing constructive feedback.",
    ],
  },
  {
    title: "Contractor CMS Developer",
    company_name: "GlideLex",
    company_website_link: "https://www.glidelex.com/",
    icon: glidelex,
    iconBg: "#1A1A1A",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Meeting and maintaining relationships with the client while extracting project requirements and constraints.",
      "Designing UI/UX ensuring clarity and presenting the brand identity of the law firm.",
      "Designing and maintaining multiple CMS databases and setting up blog functionality.",
      "Developing and maintaining custom code to meet client requirements using Velo.",
      "Setting up SEO and managing the deployment process.",
    ],
  },
];

const projects = [
  {
    name: "DigitalHippo",
    description:
      "Hippo Digital Store is a full-stack e-commerce platform designed for selling and buying digital assets, specializing in icon packs and UI kits. The platform is built entirely using TypeScript, leveraging Next.js for frontend development, TRPC for type-safe RPC communication, and Payload for flexible content management on the backend.",
    tags: [
      {
        name: "Typescript",
      },
      {
        name: "NodeJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "React",
      },
      {
        name: "Zustand",
      },
      {
        name: "TailwindCss",
      },
      {
        name: "Shadcn UI",
      },
      {
        name: "TRPC",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Payload",
      },
      {
        name: "Stripe",
      },
      {
        name: "Zod",
      },
      {
        name: "Resend",
      },
    ],
    image: DigitalHippo,
    source_code_link: "https://github.com/elmotasembelah/DigitalHippo",
    // live_demo: "https://digitalhippo-motasem.up.railway.app/",
  },
  {
    name: "3D Shirt Customizer",
    description:
      "A web application that allows users to customize a 3D model of a shirt, using React, threeJS, and Framermotion to construct the front-end, using expressJS and the OpenAI API to create the backend which allows the user to generate images using a text prompt that could be displayed on the shirt.",
    tags: [
      {
        name: "NodeJS",
      },
      {
        name: "React",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "OpenAIApi",
      },
      {
        name: "ThreeJS",
      },
    ],
    image: shirtCustomizer,
    source_code_link: "https://github.com/elmotasembelah/FullStack-Threejs-AI",
    live_demo: "https://3d-shirt-customizing.netlify.app/",
  },
  {
    name: "JobIt",
    description:
      "A comprehensive server-side application for account system management allowing the user to sign up and sign in, data encryption to encrypt users sensetive data, JWT for user authentication, and CRUD (Create, Read, Update, Delete) operations to manage each user's job applying process.",
    tags: [
      {
        name: "Nodejs",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "MongoDB",
      },
      {
        name: "JWT",
      },
      {
        name: "BcryptJS",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/elmotasembelah/Jobs-API-with-Account-System",
  },

  {
    name: "E-commerce API",
    description:
      "A server-side application for an e-commerce web application allowing the user to view all the products, search for a product, filter the product using company names or prices while sorting using the price or the name, allowing pagination to view the products in a group of 10 products on each page.",
    tags: [
      {
        name: "Nodejs",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Mongoose",
      },
    ],
    image: ecommerceapi,
    source_code_link: "https://github.com/elmotasembelah/Store-API/",
  },
  {
    name: "Gericht",
    description:
      "A responsive and dynamic restaurant landing page, using React to construct its sections as modular components. This project serves as a testament to my abilities in front-end web development, demonstrating my ability to turn a UI/UX design to real world website and integrate interactivity and elegance in user interfaces.",
    tags: [
      {
        name: "React",
      },
      {
        name: "CSS",
      },
    ],
    image: gerichtRestaurant,
    source_code_link:
      "https://github.com/elmotasembelah/Gericht-restaurant-website",
    live_demo: "https://gericht-restaurant-project.netlify.app",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
