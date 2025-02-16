import Typewriter from "typewriter-effect";
import { CountUp } from 'use-count-up';
import { LinkedIn, Profile, Email, CalenderExp, CodeExp, ProjectExp } from "../assets";
import ThemeStorage from "../utils/ThemeStorage.js";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import Tilt from "react-parallax-tilt";
import possibleColors from "../utils/PossibleColors.js";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const {theme, toggleMenu, menuDisplay, setActiveSection} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
		threshold: 0.5,
		onChange: (inView) => {
			if(inView){
				setActiveSection("home")
			}
		}
	})

    return(
        <Element name="home">
            <section ref={ref} onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} poppins-regular h-full sm:pb-5`}>
                <div className={`flex items-center justify-center flex-col sm:flex-row`}>
                    <div id='ProfileImage' className={`mt-20 h-95 flex rounded-4xl border-4 border-white bg-transparent shadow-lg ${currentTheme.Shadow} img-bounce sm:mt-25 sm:order-last sm:w-auto`}>
                        <img src={Profile} className="w-full"/>
                    </div>
                    <div className="w-full sm:w-[60%] sm:mt-25">  
                        <div className="poppins-semibold m-5 text-xl">Hi, Myself</div>
                        <div className="poppins-bold m-5 text-2xl lg:text-3xl">Akshay Pandey</div>
                        <div className="poppins-semibold m-5 text-base sm:text-xl">And I'm a&nbsp;
                            <span className={`text-${currentTheme.HeroColor} inline-block`}>
                                <Typewriter
                                options={
                                    {
                                        loop: true
                                    }
                                }
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("MERN Developer")
                                        .pauseFor(500)
                                        .deleteAll(100)
                                        .typeString("Web Designer")
                                        .pauseFor(500)
                                        .deleteAll(100)
                                        .typeString("Full Stack Developer")
                                        .start()
                                    }}/>
                            </span>
                        </div>
                        <div className={`${currentTheme.FadedText} text-sm m-5 md:text-sm lg:text-base`}>Hey there! I’m Akshay Pandey, a full stack developer with a knack for turning code into visually stunning, interactive web experiences.</div>
                        <div id="SocialMediaIcons" className="flex items-center place-content-between m-5 sm:w-[30%] md:w-[25%] lg:w-[18%] xl:w-[15%]">
                            <a href="https://github.com/joule-1" target="_blank" className="hover:scale-110 cursor-pointer">
                                <img src={currentTheme.GitHubIcon} className={`w-7 transition-all ease-in-out duration-100`} />
                            </a>
                            <a href="https://www.linkedin.com/in/akshay-pandey-joule/" target="_blank" className="hover:scale-110 cursor-pointer">
                                <img src={LinkedIn} className={`w-7 transition-all ease-in-out duration-100`} />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pandeyakshay301@gmail.com" target="_blank" className="hover:scale-110 cursor-pointer">
                                <img src={Email} className={`w-7 transition-all ease-in-out duration-100`} />
                            </a>
                        </div>
                        <a href="Resume/Akshay_Pandey_Resume.pdf" target="_blank">
                            <button className={`rounded-xl text-xs sm:text-sm border-4 border-transparent p-2 m-5 bg-${currentTheme.HeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}> 
                                Download Résumé
                            </button>
                        </a>
                    </div>
                </div>
                <Tilt 
                    className={`mt-10 mx-auto w-[78%] flex items-center rounded-2xl place-content-evenly ${currentTheme.ServiceBG} poppins-semibold text-center hidden md:flex md:text-sm lg:text-base xl:text-lg `} 
                    tiltReverse={true} 
                    glareEnable={true} 
                    glareBorderRadius="16px" 
                    tiltMaxAngleX={5} 
                    tiltMaxAngleY={2} 
                    perspective={1000}
                    transitionSpeed={1000}>
                    <div className={`w-[30%] m-8`}>
                        <img src={ProjectExp} className="w-13 mx-auto m-5" />
                        <span>+<CountUp isCounting end={6} duration={1.5} /> Developed Projects</span>
                        </div>
                    <div className={`w-[30%] m-8`}>
                        <img src={CodeExp} className="w-13 mx-auto m-5" />
                        <span>+<CountUp isCounting end={8} duration={3} />  Technologies Know</span>
                        </div>
                    <div className={`w-[30%] m-8`}>
                        <img src={CalenderExp} className="w-13 mx-auto m-5" />
                        <span>+<CountUp isCounting end={1} duration={1} />  Year Of Experience</span>
                        </div>
                </Tilt>
            </section>
        </Element>
    );
};

export default Home;