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
        <section className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} z-1 h-15 w-screen fixed flex place-content-evenly`}>
            <div className="w-[45%] text-center flex items-center poppins-semibold">
                <button className="w-8 hover:scale-110 cursor-pointer rounded-full" onClick={toggleTheme}><img src={currentTheme.Logo} alt="Logo" className="w-full transition-all ease-in-out duration-100"/></button>
                <span>Akshay Pandey | Web Developer</span>
            </div>
            <div className={`flex h-15 w-[40%] place-content-evenly poppins-regular items-center ${currentTheme.FadedText}`}>
                <div onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} className={`${(510 > scrollPosition) ? activeLink : ""} cursor-pointer`}>Home</div>
                <div onClick={() => {window.scrollTo({top: 695, behavior: "smooth"})}} className={`${(510 < scrollPosition & 1185 > scrollPosition) ? activeLink : ""} cursor-pointer`}>About</div>
                <div onClick={() => {window.scrollTo({top: 1390, behavior: "smooth"})}} className={`${(1185 < scrollPosition & 1924 > scrollPosition) ? activeLink : ""} cursor-pointer`}>Services</div>
                <div onClick={() => {window.scrollTo({top: 2085, behavior: "smooth"})}} className={`${(1924 < scrollPosition & 2600 > scrollPosition) ? activeLink : ""} cursor-pointer`}>Portfolio</div>
                <div onClick={() => {window.scrollTo({top: 2780, behavior: "smooth"})}} className={`${(2600 < scrollPosition) ? activeLink : ""} cursor-pointer`}>Contact</div>
                {/* <div><NavLink to="/" className={({isActive}) => [isActive ? activeLink : ""]}>Home</NavLink></div>
                <div><NavLink to="/about" className={({isActive}) => [isActive ? activeLink : ""]}>About</NavLink></div>
                <div><NavLink to="/services" className={({isActive}) => [isActive ? activeLink : ""]}>Services</NavLink></div>
                <div><NavLink to="/portfolio" className={({isActive}) => [isActive ? activeLink : ""]}>Portfolio</NavLink></div>
                <div><NavLink to="/contact" className={({isActive}) => [isActive ? activeLink : ""]}>Contact</NavLink></div>
                <div><NavLink to="*" className={({isActive}) => [isActive ? activeLink : ""]}>Contact</NavLink></div> */}
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

export default Navbar;