import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import { Link } from "react-scroll";
import ThemeStorage from "../utils/ThemeStorage.js";
import possibleColors from "../utils/PossibleColors.js";

const Navbar = ({toggleTheme, activeSection}) => {
    const {theme, toggleMenu, menuDisplay, setActiveSection} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const activeClassLink = `bg-${currentTheme.HeroColor} p-2 rounded-lg ${currentTheme.OppositeGeneralText} transition-all duration-200`;    

    return(
        <section onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} z-10 h-15 w-screen fixed flex place-content-between sm:place-content-evenly poppins-regular`}>
            <div className="flex items-center ml-5 w-7 hover:scale-105">
                <img src={currentTheme.Logo} alt="Logo" className="transition-all ease-in-out duration-100"/>
            </div>
            <div className={`${menuDisplay ? 'block' : 'hidden'} poppins-medium flex flex-wrap flex-col absolute top-14 right-5 place-content-evenly items-center rounded-xl ${currentTheme.FadedText} text-sm text-center z-20 w-[40%] ${currentTheme.ServiceBG} sm:flex sm:p-0 sm:m-1 sm:flex-row sm:static sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%]`}>
                <Link id="home" to="home" smooth={true} duration={500} className={`cursor-pointer m-2 ${(activeSection)==="home" ? activeClassLink : "pt-2 sm:pt-0"}`}>Home</Link>
                <Link id="about" to="about" smooth={true} duration={500} className={`cursor-pointer m-2 ${(activeSection)==="about" ? activeClassLink : ""}`}>About</Link>
                <Link to="project" smooth={true} duration={500} className={`cursor-pointer m-2 ${(activeSection)==="project" ? activeClassLink : ""}`}>Projects</Link>
                <Link id="contact" to="contact" smooth={true} duration={500} className={`cursor-pointer m-2 ${(activeSection)==="contact" ? activeClassLink : "pb-2 sm:pb-0"}`}>Contact</Link>         
        </div>
            <div className="flex mr-5">
                <div className="flex items-center w-6 mr-6">
                    <button className="hover:scale-105 w-full cursor-pointer" onClick={toggleTheme}><img src={currentTheme.ThemeImage} alt="Theme Toggle" className="w-full transition-all ease-in-out duration-100"/></button>
                </div>
                <div className="flex items-center w-6 sm:hidden">
                    <button className="w-full cursor-pointer hover:scale-105" onClick={toggleMenu}><img src={currentTheme.NavbarMenu} alt="Logo" className="transition-all ease-in-out duration-100"/></button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;