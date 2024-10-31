import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    dotnet,
    rabbitmq,
    msql,
    postgresql,
    angular,
    elasticsearch,
    docker,
    logstash,
    tailwind,
    mongodb,
    gitBash,
    kibana,
    azure,
    jira,
    postman,
    linkDev,
    frontierZero,
    ySolution,
    frontierZeroDashboard,
    blogApp,
    DigitalHippo,
    redis,
    ticketManagementSystem,
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
        title: "Software Engineer",
        icon: backend,
    },
    {
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: `Career Development Coach`,
        icon: creator,
    },
];

const technologies = [
    {
        name: ".NET Core",
        icon: dotnet,
    },
    {
        name: "MS SQL Server",
        icon: msql,
    },
    {
        name: "Elasticsearch",
        icon: elasticsearch,
    },
    {
        name: "Kibana",
        icon: kibana,
    },
    {
        name: "Logstash",
        icon: logstash,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "RabbitMQ",
        icon: rabbitmq,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PostgresSql",
        icon: postgresql,
    },
    {
        name: "Angular+2",
        icon: angular,
    },
    {
        name: "AzureDevOps",
        icon: azure,
    },
    {
        name: "Git",
        icon: gitBash,
    },
    {
        name: "Jira",
        icon: jira,
    },
    {
        name: "Postman",
        icon: postman,
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
        name: "Tailwind CSS",
        icon: tailwind,
    }
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Link Development",
        company_website_link: "https://linkdevelopment.com/",
        icon: linkDev,
        iconBg: "#f0f0f0",
        date: "Sep 2022 - Current",
        points: [
            "Led the Technical Development of the Culture Web Platform, a dual‑component system comprising a Search Engine and an E‑commerce Web App designed for the Communications Ministry. Spearheaded the integration of complex search functionalities withuser‑centric e‑commerce features, significantly enhancing the digital experience for cultural content consumption.",
            "Implemented Advanced Full‑Text Search Capabilities using Elasticsearch, tailored to support auto‑correction and completion features for anonymous users, thereby improving user interaction and satisfaction. Developed content filtration systems by authors and subjects, which facilitated more accurate and relevant search results across diverse content types.",
            "Managed Robust Content Storage Solutions with Elasticsearch and MS SQL Server, ensuring efficient handling of both open access and secured data. This included optimizing data retrieval processes and implementing high‑level security measures for protected data purchases, increasing data security compliance by 40%.",
            "Collaborated Closely with Cross‑Functional Teams to ensure seamless integration and continuous improvement of the platform, leveraging Azure DevOps and Azure Pipelines for CI/CD processes to reduce deployment times and enhance release efficiency."
        ],
    },
    {
        title: "Backend Engineer",
        company_name: "FrontierZero",
        company_website_link: "https://www.frontierzero.io/",
        icon: frontierZero,
        iconBg: "#f0f0f0",
        date: "Mar 2024 - Current",
        points: [
            "Developed and maintained integration services for various directory platforms including Okta, Salesforce, Jira, and so on, ensuring seamless synchronization of user data and sign‐in logs.",
            "Implemented OAuth authentication flows for secure access to third‐party APIs, including token exchange and refresh mechanisms.",
            "Mapped external user data models to internal application models using AutoMapper, facilitating data consistency and ease of use within the application.",
            "Handled error logging and exception management to ensure robust and reliable integration services, including detailed logging of unexpected errors and API response issues.",
            "Implemented asynchronous programming patterns to improve application performance and responsiveness, particularly in handling multiple API requests concurrently.",
            "Ensured compliance with security best practices, including handling sensitive data like access tokens and user credentials securely.",
            "Collaborated with cross‐functional teams to integrate directory services with other application components, ensuring seamless user experiences and data integrity.",
        ],
    },
    {
        title: "Full-Stack Web Developer",
        company_name: "Yackeen Solutions",
        company_website_link: "http://yackeensolutions.com/",
        icon: ySolution,
        iconBg: "#f0f0f0",
        date: "Aug 2021 - Sep 2022",
        points: [
            "Led the development of the ‘3amaluna App’, a professional networking platform for a startup, implementing real‐time communication features including posts, comments, and shares. Designed group‐specific functionalities that doubled user interactions and increased daily active users by 40%.",
            "Engineered the ‘IslamicMarriage App’, developing user profiles and match‐making algorithms tailored for the Islamic community. The introduction of these features led to a 25% increase in user satisfaction and a 35% growth in the subscriber base within the first 6 months.",
            "Designed and implemented backend infrastructure for the ‘Naseej Project’, supporting comprehensive administrative and financialoperations for local companies. This included advanced functionalities for compensation calculations and user role management, improving operational efficiency by 45%.",
            "Architected the ‘Translation Agency Platform’, creating a scalable online marketplace connecting clients with freelancers. This platform facilitated over 1,000 successful job engagements within the first year, enhancing job management and user interaction capabilities.",
            "Spearheaded the development of high‐impact web applications, improving functionalities and user interface designs.",
            "Developed and implemented a CI/CD pipeline that automated testing and deployment processes, reducing manual deployment f‐forts by 40% and decreasing deployment times by 50%, thereby accelerating product delivery cycles.",
        ],
    },
];

const projects = [
    {
        name: "MCIT Culture Web Platform",
        description:
            "A dual-component system comprising a Search Engine and an E-commerce Web App designed for the Communications Ministry. Spearheaded the integration of complex search functionalities with user-centric e-commerce features, significantly enhancing the digital experience for cultural content consumption.",
        tags: [
            {
                name: "C#",
            },
            {
                name: ".NET Core",
            },
            {
                name: "Elasticsearch",
            },
            {
                name: "Angular+2",
            },
            {
                name: "Microsoft SQL Server",
            },
            {
                name: "Microservices",
            },
            {
                name: "EF Core",
            },
            {
                name: "Elasticsearch.Nest",
            },
            {
                name: "AzureDevOps",
            },
            {
                name: "Identity Server",
            },
            {
                name: "ExpressJS",
            },
            {
                name: "SonarQube",
            },
            {
                name: "Clean Architecture",
            },
        ],
        image: blogApp,
        // source_code_link: "https://github.com/elmotasembelah/DigitalHippo",
        // live_demo: "https://digitalhippo-motasem.up.railway.app/",
    },
    {
        name: "FrontierZero",
        description:
            "At FrontierZero, we revolutionize SaaS spending and security by addressing the limitations of traditional security approaches. Our platform empowers technology teams to work seamlessly while ensuring uncompromising security. Through continuous innovation and client feedback, we remain at the forefront of remote team security, providing a partnership that enables organizations to embrace cloud benefits without compromising on security.",
        tags: [
            {
                name: ".NET Core",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "React.js",
            },
            {
                name: "OAuth2",
            },
            {
                name: "APIKey",
            },
            {
                name: "Security",
            },
        ],
        image: frontierZeroDashboard,
        // source_code_link: "https://github.com/elmotasembelah/FullStack-Threejs-AI",
        live_demo: "https://www.frontierzero.io/",
    },
    {
        name: "Ticket Management System",
        description:
            "A ticket management system that allows users to create, view, and manage tickets. The system is designed to be used by both customers and agents. Customers can create tickets, view their tickets, and add replies to their tickets. Agents can view all tickets, reply to tickets, and close tickets.",
        tags: [
            {
                name: ".NET Core",
            },
            {
                name: "MS SQL Server",
            },
            {
                name: "EF Core",
            },
            {
                name: "DDD",
            },
            {
                name: "CQRS",
            },
            {
                name: "MediatR",
            },
            {
                name: "FluentValidation",
            },
            {
                name: "InMemoryDatabase",
            },
            {
                name: "Clean Architecture",
            },
            {
                name: "Hangfire",
            },
        ],
        image: ticketManagementSystem,
        // source_code_link:
        //     "https://github.com/elmotasembelah/Jobs-API-with-Account-System",
    },
    {
        name: "App3amaluna",
        description:
            "A professional networking platform for a startup, implementing real-time communication features including posts, comments, and shares. Designed group-specific functionalities that doubled user interactions and increased daily active users by 40%.",
        tags: [
            {
                name: ".NET Core",
            },
            {
                name: "MS SQL Server",
            },
            {
                name: "EF Core",
            },
            {
                name: "JWT",
            },
            {
                name: "LINQ",
            },
            {
                name: "SignalR",
            },
            {
                name: "Hangfire",
            },
        ],
        image: blogApp,
        // source_code_link:
        //     "https://github.com/elmotasembelah/Jobs-API-with-Account-System",
    },

    {
        name: "BlogApp",
        description:
        "This is a Blog Application using DatabaseFirst, ASP.NET Core API, Identity Library, JWT for Authentication, Dapper to connect with database, that all with Backend, and I use in Front-end: Angular11, HTML5, CSS3, Bootstrap, font-awesome, & Typescript.",
        tags: [
            {
                name: ".NET Core",
            },
            {
                name: "Dapper",
            },
            {
                name: "JWT",
            },
            {
                name: "Identity",
            },
            {
                name: "Angular 11",
            },
        ],
        image: blogApp,
        source_code_link: "https://github.com/elmotasembelah/Store-API/",
    },
    
    
    /////////////////////
    //        
    // {
    //     //need to be completed
    //     name: "Naseej Project",
    //     description:
    //         "A responsive and dynamic restaurant landing page, using React to construct its sections as modular components. This project serves as a testament to my abilities in front-end web development, demonstrating my ability to turn a UI/UX design to real world website and integrate interactivity and elegance in user interfaces.",
    //     tags: [
    //         {
    //             name: "React",
    //         },
    //         {
    //             name: "CSS",
    //         },
    //     ],
    //     image: blogApp,
    //     source_code_link:
    //         "https://github.com/elmotasembelah/Gericht-restaurant-website",
    //     live_demo: "https://gericht-restaurant-project.netlify.app",
    // },
    // {
    //     //need to be completed
    //     name: "NewWorldTrans",
    //     description:
    //         "A responsive and dynamic restaurant landing page, using React to construct its sections as modular components. This project serves as a testament to my abilities in front-end web development, demonstrating my ability to turn a UI/UX design to real world website and integrate interactivity and elegance in user interfaces.",
    //     tags: [
    //         {
    //             name: "React",
    //         },
    //         {
    //             name: "CSS",
    //         },
    //     ],
    //     image: blogApp,
    //     source_code_link:
    //         "https://github.com/elmotasembelah/Gericht-restaurant-website",
    //     live_demo: "https://gericht-restaurant-project.netlify.app",
    // },
    // {
    //     //need to be completed
    //     name: "IslamicMarriageApp",
    //     description:
    //         "A responsive and dynamic restaurant landing page, using React to construct its sections as modular components. This project serves as a testament to my abilities in front-end web development, demonstrating my ability to turn a UI/UX design to real world website and integrate interactivity and elegance in user interfaces.",
    //     tags: [
    //         {
    //             name: "React",
    //         },
    //         {
    //             name: "CSS",
    //         },
    //     ],
    //     image: blogApp,
    //     source_code_link:
    //         "https://github.com/elmotasembelah/Gericht-restaurant-website",
    //     live_demo: "https://gericht-restaurant-project.netlify.app",
    // },
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

export {services, technologies, experiences, testimonials, projects};
