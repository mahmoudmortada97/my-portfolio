import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    function scrollToContactForm() {
        const contactForm = document.getElementById("contact");

        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div className="z-20">
                    <h1 className={`${styles.heroHeadText} text-white `}>
                        Hi, I'm <span className="text-[#915EFF]">Motasem</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        {/* A Full Stack Developer, I Excel in Adapting,
                        <br className="sm:block hidden" />
                        Enhancing, and Delivering Results */}
                        I Develop Full Stack Web Applications{" "}
                        {/* <br className="sm:block hidden" />
                        While Adapting and Enhancing */}
                        {/* I develop 3D visuals, user{" "}
                        <br className="sm:block hidden" />
                        interfaces and web applications */}
                    </p>
                    <div className="gap-4 align-center hidden sm:flex">
                        <button
                            className="bg-[#915EFF] my-4 py-[.63rem] px-6 rounded-xl outline-none w-fit text-white cursor-pointer z-20 "
                            onClick={scrollToContactForm}
                        >
                            Contact Me
                        </button>
                        <button className="border-[#915EFF] border-[1px] my-4 py-[.63rem] px-6 rounded-xl outline-none w-fit text-white cursor-pointer z-20 transition-all">
                            <a
                                href="https://drive.google.com/file/d/1_NWT9_s8O3P93WgQX4vvFq5cjEhCR7rS/view"
                                target="_blank"
                            >
                                My Resume
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
