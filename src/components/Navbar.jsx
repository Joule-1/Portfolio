import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const activeLink = `bg-${currentTheme.HeroColor} p-2 rounded-lg ${currentTheme.OppositeGeneralText} transition-all duration-200`;
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        }, [scrollPosition]);

    return(
        <section className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} z-10 h-15 w-screen fixed flex place-content-evenly poppins-regular`}>
            <div className="text-center flex items-center poppins-semibold sm:w-[45%]">
                <button className="w-8 hover:scale-110 cursor-pointer ml-2" onClick={toggleTheme}><img src={currentTheme.Logo} alt="Logo" className="w-full transition-all ease-in-out duration-100"/></button>
                <span className="hidden text-xs sm:block md:text-sm lg:text-lg">Akshay Pandey | Web Developer</span>
            </div>
            <div className={`flex text-sm h-15 w-[90%] place-content-evenly items-center ${currentTheme.FadedText} md:w-[50%] lg:w-[40%] lg:text-base`}>
                <div onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} className={`${(510 > scrollPosition) ? activeLink : ""} cursor-pointer`}>Home</div>
                <div onClick={() => {window.scrollTo({top: 695, behavior: "smooth"})}} className={`${(510 < scrollPosition & 1185 > scrollPosition) ? activeLink : ""} cursor-pointer hidden sm:block`}>About</div>
                <div onClick={() => {window.scrollTo({top: 1390, behavior: "smooth"})}} className={`${(1185 < scrollPosition & 1924 > scrollPosition) ? activeLink : ""} cursor-pointer `}>Services</div>
                <div onClick={() => {window.scrollTo({top: 2085, behavior: "smooth"})}} className={`${(1924 < scrollPosition & 2576 > scrollPosition) ? activeLink : ""} cursor-pointer`}>Portfolio</div>
                <div onClick={() => {window.scrollTo({top: 2780, behavior: "smooth"})}} className={`${(2576 < scrollPosition) ? activeLink : ""} cursor-pointer`}>Contact</div>
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

export default Navbar;