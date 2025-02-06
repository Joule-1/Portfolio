import { useState, useContext } from "react";
import ThemeStorage from "../utils/ThemeStorage";
import { ThemeContext } from "../utils/ThemeToggle";

const About = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const [read, setRead] = useState(true);

    return(
        <section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-screen poppins-regular grid grid-cols-11 gap-10 `}>
        <div className="col-span-4 col-start-2 my-auto">
                <span className={`flex w-[78%] h-100 rounded-full border-5 border-${currentTheme.HeroColor} bg-transparent`}>
                    <img src=""  className="w-full rounded-full"/>
                </span>
        </div>
        <div className="col-span-5 col-start-6 my-auto tracking-widest leading-7"> 
            <div className="poppins-semibold text-5xl my-5">About <span className={`text-${currentTheme.HeroColor}`}>Me</span></div>
            <div className="poppins-semibold text-3xl my-3">Frontend Developer</div>
            <div className="poppins-medium my-3">
                I am a dedicated Web Developer with a solid foundation in HTML, CSS, and JavaScript, specializing in React. I take pride in crafting clean, scalable, and intuitive web solutions that effectively bring ideas to life. With a strong focus on writing maintainable code, I collaborate with others to solve challenges and deliver thoughtful, practical solutions.
                <div className={(read===true) ? (`hidden`) : (`block`)}>
                    I strive to ensure that every project is visually appealing, performs efficiently, and is accessible to all users. Staying informed of industry trends and best practices allows me to continually hone my skills, ensuring that I create dynamic, user-friendly web applications. My goal is to build meaningful, functional digital experiences that leave a lasting impression while providing real value.
                </div>
            </div>
            <button onClick={() => setRead((prev) => (!prev))} className={`my-3 rounded-lg border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-100 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>
                Read {(read === true ? "More" : "Less")}
            </button>
        </div>
        </section>
    );
};

const possibleColors = {
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