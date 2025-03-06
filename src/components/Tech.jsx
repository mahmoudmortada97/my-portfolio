import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 md:w-4/5 m-auto">
            {technologies.map((technology) => (
                <div className="w-28 h-28 mb-6" key={technology.name}>
                    <div className="flex justify-center w-[112px] h-[112px] mb-2">
                        <img src={technology.icon} alt="" />
                    </div>

                    {/* <BallCanvas icon={technology.icon} /> */}
                    <p className="text-center">{technology.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
