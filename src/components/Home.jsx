import Typewriter from "typewriter-effect";
import { CountUp } from "use-count-up";
import {
    LinkedIn,
    Profile,
    Email,
    CalenderExp,
    CodeExp,
    ProjectExp,
} from "../assets";
import ThemeStorage from "../utils/ThemeStorage.js";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import Tilt from "react-parallax-tilt";
import possibleColors from "../utils/PossibleColors.js";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const { theme, toggleMenu, menuDisplay, setActiveSection } =
        useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                setActiveSection("home");
            }
        },
    });

    return (
        <Element name="home">
            <section
                ref={ref}
                onClick={menuDisplay ? toggleMenu : undefined}
                className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} poppins-regular sm:pb-5`}
            >
                <div
                    className={`flex flex-col items-center justify-center sm:flex-row`}
                >
                    <div
                        id="ProfileImage"
                        className={`mt-20 flex h-95 rounded-4xl border-4 border-white bg-transparent shadow-lg ${currentTheme.Shadow} img-bounce sm:order-last sm:mt-25 sm:w-auto`}
                    >
                        <img src={Profile} className="w-full" />
                    </div>
                    <div className="w-full sm:mt-25 sm:w-[60%]">
                        <div className="poppins-semibold m-5 text-xl">
                            Hi, Myself
                        </div>
                        <div className="poppins-bold m-5 text-2xl lg:text-3xl">
                            Akshay Pandey
                        </div>
                        <div className="poppins-semibold m-5 text-base sm:text-xl">
                            And I'm a&nbsp;
                            <span
                                className={`text-${currentTheme.HeroColor} inline-block`}
                            >
                                <Typewriter
                                    options={{
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("MERN Developer")
                                            .pauseFor(500)
                                            .deleteAll(100)
                                            .typeString("Web Designer")
                                            .pauseFor(500)
                                            .deleteAll(100)
                                            .typeString("Full Stack Developer")
                                            .start();
                                    }}
                                />
                            </span>
                        </div>
                        <div
                            className={`${currentTheme.FadedText} m-5 text-sm md:text-sm lg:text-base`}
                        >
                            Hey there! I’m Akshay Pandey, a full stack developer
                            with a knack for turning code into visually
                            stunning, interactive web experiences.
                        </div>
                        <div
                            id="SocialMediaIcons"
                            className="m-5 flex place-content-between items-center sm:w-[30%] md:w-[25%] lg:w-[18%] xl:w-[15%]"
                        >
                            <a
                                href="https://github.com/joule-1"
                                target="_blank"
                                className="cursor-pointer hover:scale-110"
                            >
                                <img
                                    src={currentTheme.GitHubIcon}
                                    className={`w-7 transition-all duration-100 ease-in-out`}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/akshay-pandey-joule/"
                                target="_blank"
                                className="cursor-pointer hover:scale-110"
                            >
                                <img
                                    src={LinkedIn}
                                    className={`w-7 transition-all duration-100 ease-in-out`}
                                />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=pandeyakshay301@gmail.com"
                                target="_blank"
                                className="cursor-pointer hover:scale-110"
                            >
                                <img
                                    src={Email}
                                    className={`w-7 transition-all duration-100 ease-in-out`}
                                />
                            </a>
                        </div>
                        <a
                            href="Resume/Akshay_Pandey_Resume.pdf"
                            target="_blank"
                        >
                            <button
                                className={`m-5 rounded-xl border-4 border-transparent p-2 text-xs sm:text-sm bg-${currentTheme.HeroColor} poppins-semibold transform text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} cursor-pointer select-none`}
                            >
                                Download Résumé
                            </button>
                        </a>
                    </div>
                </div>
                <Tilt
                    className={`mx-auto mt-10 flex place-content-evenly items-center rounded-2xl ${currentTheme.ServiceBG} poppins-semibold hidden text-center md:flex md:w-[90%] md:text-sm lg:w-[80%] lg:text-base xl:w-[78%] xl:text-lg`}
                    tiltReverse={true}
                    glareEnable={true}
                    glareBorderRadius="16px"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={2}
                    perspective={1000}
                    transitionSpeed={1000}
                >
                    <div className={`m-8 w-[30%]`}>
                        <img src={ProjectExp} className="m-5 mx-auto w-13" />
                        <span>
                            +<CountUp isCounting end={6} duration={1.5} />{" "}
                            Developed Projects
                        </span>
                    </div>
                    <div className={`m-8 w-[30%]`}>
                        <img src={CodeExp} className="m-5 mx-auto w-13" />
                        <span>
                            +<CountUp isCounting end={8} duration={3} />{" "}
                            Technologies Know
                        </span>
                    </div>
                    <div className={`m-8 w-[30%]`}>
                        <img src={CalenderExp} className="m-5 mx-auto w-13" />
                        <span>
                            +<CountUp isCounting end={1} duration={1} /> Year Of
                            Experience
                        </span>
                    </div>
                </Tilt>
            </section>
        </Element>
    );
};

export default Home;
