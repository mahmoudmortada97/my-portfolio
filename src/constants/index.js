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
    frontierZeroDashboard,
    blogApp,
    redis,
    ticketManagementSystem,
    Momkn,
    Ministry,
    GPG
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
        title: ".NET Developer",
        company_name: "Al-Ahly Momkn for E-payments",
        company_website_link: "https://www.alahlymomkn.com/en",
        icon: Momkn,
        iconBg: "#f0f0f0",
        date: "Feb 2024 - Current",
        points: [
            "led the development of a highly scalable backend infrastructure that powers the consumer application, ensuring seamless communication and robust performance across distributed services. My efforts have created a foundation that supports sustained growth and operational efficiency.",
            "Implemented advanced strategies to optimize backend operations, integrating effective logging, job scheduling, and notification systems. This has elevated the consumer application’s reliability and user experience, driving operational excellence and adaptability",
            "Designed and deployed a powerful admin interface to oversee and manage the consumer application, enabling real-time control and monitoring. This solution enhances decision-making and ensures the application remains responsive to user and business needs.",
            "Collaborated with cross‐functional teams to integrate directory services with other application components, ensuring seamless user experiences and data integrity.",
        
        ],
    },
    {
        title: "Full Stack .NET Developer",
        company_name: "Ministry of Planning and Economic Development",
        company_website_link: "https://mped.gov.eg/?lang=en",
        icon: Ministry,
        iconBg: "#f0f0f0",
        date: "Jul 2023 - Feb 2024",
        points: [
            "Improved the Egyptian Birth and Death project by adding critical features and export capabilities, supporting over 5,000+ health offices across Egypt with efficient data management and reporting tools.",
            "Created new functionalities for the Vaccations project, enabling seamless registration of baby vaccinations from 2 months to 3 years, enhancing public health monitoring and administration nationwide.",
            "Designed and implemented an application to register unknown families and identity-less babies in health offices, facilitating tracking until age 3, followed by a smooth transition to the Ministry of Social Solidarity.",
            //"Handled error logging and exception management to ensure robust and reliable integration services, including detailed logging of unexpected errors and API response issues.",
            "Implemented asynchronous programming patterns to improve application performance and responsiveness, particularly in handling multiple API requests concurrently.",
            //"Ensured compliance with security best practices, including handling sensitive data like access tokens and user credentials securely.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Global Brands Group",
        company_website_link: "https://gbrands.com/",
        icon: GPG,
        iconBg: "#f0f0f0",
        date: "Aug 2021 - Sep 2022",
        points: [
            "Acquired a solid understanding of the core .NET framework, building a strong technical foundation that enhanced my ability to develop effective software solutions.",
            "Utilized the Microsoft Power Platform to create and optimize low-code solutions, gaining hands-on experience in automating processes and delivering efficient applications.",
            "Immersed myself in a dynamic learning environment, absorbing extensive insights into software development and low-code technologies, preparing me for advanced professional challenges.",
            // "Architected the ‘Translation Agency Platform’, creating a scalable online marketplace connecting clients with freelancers. This platform facilitated over 1,000 successful job engagements within the first year, enhancing job management and user interaction capabilities.",
            // "Spearheaded the development of high‐impact web applications, improving functionalities and user interface designs.",
            // "Developed and implemented a CI/CD pipeline that automated testing and deployment processes, reducing manual deployment f‐forts by 40% and decreasing deployment times by 50%, thereby accelerating product delivery cycles.",
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
