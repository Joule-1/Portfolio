import { useContext } from "react";
import ThemeStorage from "../utils/ThemeStorage.js";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import possibleColors from "../utils/PossibleColors.js";
import TechCarousel from "./Carousel.jsx";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { theme, toggleMenu, menuDisplay, setActiveSection } =
        useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                setActiveSection("about");
            }
        },
    });
    return (
        <Element name="about">
            <section
                ref={ref}
                onClick={menuDisplay ? toggleMenu : undefined}
                className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular pt-10`}
            >
                <div className="poppins-bold flex justify-center pt-15 pb-5 text-4xl">
                    About&nbsp;
                    <span className={`text-${currentTheme.HeroColor}`}>
                        {" "}
                        Me
                    </span>
                </div>
                <div className="mt-5 mb-20 flex items-center justify-center">
                    <div className={`hidden h-80 md:block`}>
                        <img
                            src={currentTheme.AboutImage}
                            alt="About Image"
                            className={`h-full w-full`}
                        />
                    </div>
                    <div className={`mx-5 md:w-[60%]`}>
                        <div className="poppins-semibold m-5 lg:text-lg xl:text-xl">
                            Coding By Day | Debugging By Night
                        </div>
                        <div className="poppins-medium ml-5 text-sm leading-7 sm:text-base xl:leading-7">
                            I am an enthusiastic Full Stack Developer skilled in
                            front-end and back-end technologies like HTML, CSS,
                            JavaScript, React, and Node.js. I take pride in
                            creating scalable, user-focused web solutions that
                            bring ideas to life. Focused on clean, maintainable
                            code, I excel in collaborative environments, solving
                            complex problems and delivering high-performance
                            solutions. My commitment ensures every project is
                            visually engaging, functionally robust, and
                            optimized for seamless user accessibility.
                        </div>
                        <div className="flex">
                            <button
                                className={`m-5 rounded-xl border-4 border-transparent p-2 text-xs sm:text-sm bg-${currentTheme.HeroColor} poppins-semibold transform text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} cursor-pointer select-none`}
                            >
                                <Link
                                    id="contact"
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact Me
                                </Link>
                            </button>
                            <button
                                className={`m-5 rounded-xl border-4 border-transparent p-2 text-xs sm:text-sm bg-${currentTheme.AlternateHeroColor} poppins-semibold transform text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-${currentTheme.AlternateHeroColor} hover:border-${currentTheme.AlternateHeroColor} cursor-pointer select-none`}
                            >
                                <Link
                                    id="project"
                                    to="project"
                                    smooth={true}
                                    duration={500}
                                >
                                    My Works
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <TechCarousel />
            </section>
        </Element>
    );
};

export default About;
