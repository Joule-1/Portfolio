import { useContext } from "react";
import ThemeStorage from "../utils/ThemeStorage";
import { ThemeContext } from "../utils/ThemeToggle";
import possibleColors from "../utils/PossibleColors";
import { JS, CSS, FrameMotion, Git, HTML, MongoDB, NodeJS, ReactJS, ReactRouter, Redux, Tailwind, Postman } from "../assets";

const TechStack = [ JS, CSS, FrameMotion, Git, HTML, MongoDB, NodeJS, ReactJS, ReactRouter, Redux, Tailwind, Postman ];

const About = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    return(
        <section id="about" className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular`}>
            <div className="poppins-bold text-4xl pt-10 pb-5 flex justify-center">About&nbsp;<span className={`text-${currentTheme.HeroColor}`}> Me</span></div>
                <div className="flex justify-center items-center">
                <div className={`border-1 w-[20%]`}>
                    <img src={currentTheme.AboutImage} alt="About Image" className="w-full" />
                </div>
                <div className={`border-1 w-[60%]`}> 
                    <div className="poppins-semibold text-xl m-5">Coding By Day | Debugging By Night</div>
                    <div className="poppins-medium ml-5 leading-7">
                    I am an enthusiastic Full Stack Developer skilled in front-end and back-end technologies like HTML, CSS, JavaScript, React, and Node.js. I take pride in creating scalable, user-focused web solutions that bring ideas to life. Focused on clean, maintainable code, I excel in collaborative environments, solving complex problems and delivering high-performance solutions. My commitment ensures every project is visually engaging, functionally robust, and optimized for seamless user accessibility.
                    </div>
                    <div>
                        <button className={`rounded-xl text-sm border-4 border-transparent p-2 m-5 bg-${currentTheme.HeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>Contact Me</button>
                        <button className={`rounded-xl text-sm border-4 border-transparent p-2 m-5 bg-${currentTheme.AlternateHeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.AlternateHeroColor} hover:border-${currentTheme.AlternateHeroColor} select-none cursor-pointer`}>My Works</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;