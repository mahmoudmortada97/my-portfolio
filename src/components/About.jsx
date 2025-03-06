import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

function scrollToContactForm() {
    const contactForm = document.getElementById("contact");

    if (contactForm) {
        contactForm.scrollIntoView({behavior: "smooth"});
    }
}

const ServiceCard = ({index, title, icon}) => (
    <div className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Mid-level Software Engineer with over 2.5 years of expertise in Microsoft Technologies including C#,
                ASP.NET Core, SQL Server, and Azure.With a proven track record of optimizing and enhancing software solutions for performance and scalability.
                Strong understanding of the Software Development Life Cycle (SDLC) and experience working in Agile
                environments, effectively collaborating with cross-functional teams to deliver high-quality solutions.
                Demonstrates a deep ability to refactor and improve existing systems, integrating new technologies to
                drive continuous improvement.
            </motion.p>

            <div className="gap-4 align-center flex sm:hidden">
                <button
                    className="bg-[#915EFF] my-4 py-[.63rem] px-6 rounded-xl outline-none w-fit text-white cursor-pointer z-20 "
                    onClick={scrollToContactForm}
                >
                    Contact Me
                </button>
                <button
                    className="border-[#915EFF] border-[1px] my-4 py-[.63rem] px-6 rounded-xl outline-none w-fit text-white cursor-pointer z-20 transition-all">
                    <a
                        href="https://flowcv.com/resume/mrsjts2slg"
                        target="_blank"
                    >
                        My Resume
                    </a>
                </button>
            </div>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
