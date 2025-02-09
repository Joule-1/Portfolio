import Typewriter from "typewriter-effect";
import { Github, LinkedIn, Profile } from "../assets";
import ThemeStorage from "../utils/ThemeStorage";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeToggle";

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    return(
        <section className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} h-full grid grid-cols-11 poppins-regular md:h-screen md:gap-10`}>
            <div className="col-span-11 m-auto md:col-span-4 md:order-last mt-20">
                <span className={`flex w-[100%] h-100 rounded-4xl border-4 border-white bg-transparent shadow-lg ${currentTheme.Shadow} img-bounce sm:h-110`}>
                    <img src={Profile} className="w-full"/>
                </span>
            </div>
            <div className="col-span-11 col-start-2 my-auto pr-2 md:col-span-5 md:col-start-2">  
                <div className="text-base poppins-semibold my-5 sm:text-3xl md:text-xl lg:text-3xl">Hi, Myself</div>
                <div className="text-2xl poppins-bold my-5 sm:text-4xl md:text-3xl lg:text-4xl">Akshay Pandey</div>
                <div className="text-base poppins-semibold flex my-5 sm:text-3xl md:text-xl lg:text-3xl">And I'm a&nbsp;
                    <span className={`text-${currentTheme.HeroColor}`}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    
                                    .typeString("Frontend Developer")
                                    .pauseFor(500)
                                    .deleteAll(100)
                                    .typeString("Web Designer")
                                    .pauseFor(500)
                                    .deleteAll(100)
                                    .typeString("Web Developer")
                                    .start()
                            }}/>
                    </span>
                </div>
                <div className={`${currentTheme.FadedText} my-5 text-sm md:text-sm lg:text-base`}>Hey there! I’m Akshay Pandey, a front-end developer with a knack for turning code into visually stunning, interactive web experiences.</div>
                <div className="my-5 flex place-content-evenly w-[30%] sm:w-[20%] md:w-[30%] xl:w-[20%]">
                    <a href="https://github.com/joule-1" target="_blank" className="hover:scale-110 cursor-pointer">
                        <img src={Github} className={`rounded-full border-${currentTheme.HeroColor} border-3 w-10 transition-all ease-in-out duration-100`} />
                    </a>
                    <a href="https://www.linkedin.com/in/akshay-pandey-joule/" target="_blank" className="hover:scale-110 cursor-pointer">
                        <img src={LinkedIn} className={`rounded-full border-${currentTheme.HeroColor} border-3 w-10 transition-all ease-in-out duration-100`} />
                    </a>
                </div>
                <a href="Resume/Akshay_Pandey_Resume.pdf" download={"Akshay_Pandey_Resume.pdf"}>
                    <button className={`rounded-xl mb-8 border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}> 
                        Download Résumé
                    </button>
                </a>
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

export default Home;