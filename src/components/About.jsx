import { useState, useContext, useEffect, useRef } from "react";
import ThemeStorage from "../utils/ThemeStorage";
import { ThemeContext } from "../utils/ThemeToggle";
import { JS, CSS, FrameMotion, Git, HTML, MongoDB, NodeJS, ReactJS, ReactRouter, Redux, Tailwind, Postman } from "../assets";

const TechStack = [ JS, CSS, FrameMotion, Git, HTML, MongoDB, NodeJS, ReactJS, ReactRouter, Redux, Tailwind, Postman ];

const About = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const [showReadMore, setShowReadMore] = useState(true);

    return(
        <section id="about" className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular grid grid-cols-11 pt-13 h-screen md:gap-5 lg:gap-10`}>
            <div className={`grid grid-cols-4 m-auto col-span-11 col-start-2 w-[90%] rounded-3xl flex h-100 border-5 border-${currentTheme.HeroColor} bg-transparent hidden md:grid md:col-span-6 lg:col-span-4 md:w-[75%] lg:w-[85%] xl:w-[78%]`}>
                    {Object.keys(TechStack).map((index=0) => (
                        <div key={index} className={`my-auto hover:scale-110 hover:rotate-10 transition-all duration-250 ease-in-out`}>
                            <img src={TechStack[index]} className="mx-auto md:w-[60%] lg:w-[60%] xl:w-[45%]"/>
                        </div>
                    ))}
            </div>
            <div className="col-span-10 col-start-2 my-auto tracking-widest leading-7 pr-2 md:col-span-5 lg:col-span-6"> 
                <div className="poppins-semibold text-4xl my-5 lg:text-4xl">About <span className={`text-${currentTheme.HeroColor}`}>Me</span></div>
                <div className="poppins-semibold text-xl my-3 lg:text-3xl">Frontend Developer</div>
                <div className="poppins-medium my-3 md:text-base lg:text-lg">
                    I am a dedicated Web Developer with a solid foundation in HTML, CSS, and JavaScript, specializing in React. I take pride in crafting clean, scalable, and intuitive web solutions that effectively bring ideas to life. With a strong focus on writing maintainable code, I collaborate with others to solve challenges and deliver thoughtful, practical solutions.
                    <div className={`hidden sm:${(showReadMore===true) ? (`hidden`) : (`block`)}`}>
                        I strive to ensure that every project is visually appealing, performs efficiently, and is accessible to all users.<span className="hidden sm:inline md:hidden lg:inline"> Staying informed of industry trends and best practices allows me to continually hone my skills, ensuring that I create dynamic, user-friendly web applications. My goal is to build meaningful, functional digital experiences that leave a lasting impression while providing real value.</span>
                    </div>
                </div>
                <button onClick={() => setShowReadMore((prev) => (!prev))} className={`my-3 rounded-lg border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-100 text-base hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer hidden sm:block`}>
                    Read {(showReadMore === true ? "More" : "Less")}
                </button>
            </div>
        </section>
    );
};

const possibleColors = {
	Placeholder_color1: 'placeholder-black/70',
	Placeholder_color2: 'placeholder-white/70',
	Hover_Placeholder_color1: 'hover:placeholder-teal-800',
	Hover_Placeholder_color2: 'hover:placeholder-yellow-400',
	Text_color1: 'text-teal-800',
	Text_color2: 'text-yellow-400',
	Bg_color1: 'bg-teal-800',
	Bg_color2: 'bg-yellow-400',
	Border_color1: 'border-teal-800',
	Border_color2: 'border-yellow-400',
	Hover_color1: 'hover:text-teal-800',
	Hover_color2: 'hover:text-yellow-400',
	Hover_Border_color1: 'hover:border-teal-800',
	Hover_Border_color2: 'hover:border-yellow-400',
	Shadow_color1: 'shadow-teal-400/40',
	Shadow_color2: 'shadow-yellow-400/40',
	Faded_text1: 'text-black/70',
	Faded_text2: 'text-white/70',
};

export default About;