import { useContext } from "react";
import ThemeStorage from "../utils/ThemeStorage.js";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import possibleColors from "../utils/PossibleColors.js";
import TechCarousel from "./Carousel.jsx";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const About = () => {
    const {theme, toggleMenu, menuDisplay, setActiveSection} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
		threshold: 0.5,
		onChange: (inView) => {
			if(inView){
				setActiveSection("about")
			}
		}
	})
    return(
        <Element name="about">
            <section ref={ref} onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular pt-10`}>
                <div className="poppins-bold text-4xl pt-15 pb-5 flex justify-center">About&nbsp;
                    <span className={`text-${currentTheme.HeroColor}`}> Me</span>
                </div>
                <div className="flex justify-center items-center mt-5 mb-20">
                    <div className={`h-80 hidden md:block`}>
                        <img src={currentTheme.AboutImage} alt="About Image" className={`w-full h-full`}/>
                    </div>
                    <div className={`mx-5 md:w-[60%]`}> 
                        <div className="poppins-semibold m-5 lg:text-lg xl:text-xl">Coding By Day | Debugging By Night</div>
                        <div className="poppins-medium ml-5 leading-7 text-sm sm:text-base xl:leading-7">
                        I am an enthusiastic Full Stack Developer skilled in front-end and back-end technologies like HTML, CSS, JavaScript, React, and Node.js. I take pride in creating scalable, user-focused web solutions that bring ideas to life. Focused on clean, maintainable code, I excel in collaborative environments, solving complex problems and delivering high-performance solutions. My commitment ensures every project is visually engaging, functionally robust, and optimized for seamless user accessibility.
                        </div>
                        <div className="flex">
                            <button className={`rounded-xl text-xs sm:text-sm border-4 border-transparent p-2 m-5 bg-${currentTheme.HeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>
                                <Link id="contact" to="contact" smooth={true} duration={500}>
                                    Contact Me
                                </Link>
                            </button>
                            <button className={`rounded-xl text-xs sm:text-sm border-4 border-transparent p-2 m-5 bg-${currentTheme.AlternateHeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.AlternateHeroColor} hover:border-${currentTheme.AlternateHeroColor} select-none cursor-pointer`}>My Works</button>
                        </div>
                    </div>
                </div>
                <TechCarousel />
            </section>
        </Element>
    );
};

export default About;