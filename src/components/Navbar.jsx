import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";
import possibleColors from "../utils/PossibleColors";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const activeLink = `bg-${currentTheme.HeroColor} p-2 rounded-lg ${currentTheme.OppositeGeneralText} transition-all duration-200`;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuDisplay, setMenuDisplay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        }, [scrollPosition]);

    return(
        <section className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} z-10 h-15 w-screen fixed flex place-content-between sm:place-content-evenly poppins-regular`}>
            <div className="flex items-center ml-5">
                <button className="w-7 hover:scale-105"><img src={currentTheme.Logo} alt="Logo" className="transition-all ease-in-out duration-100"/></button>
            </div>
            <div className={`${menuDisplay ? 'block' : 'hidden'} flex flex-wrap flex-col absolute top-14 right-5 place-content-evenly items-center rounded-xl ${currentTheme.FadedText} text-sm text-center z-20 w-[40%] ${currentTheme.GeneralBG} sm:flex sm:p-0 sm:m-1 sm:flex-row sm:static sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%]`}>
                <div onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} className={`${(510 > scrollPosition) ? activeLink : ""} cursor-pointer m-2`}>Home</div>
                <div onClick={() => {window.scrollTo({top: 695, behavior: "smooth"})}} className={`${(510 < scrollPosition & 1185 > scrollPosition) ? activeLink : ""} cursor-pointer m-2`}>About</div>
                <div onClick={() => {window.scrollTo({top: 1390, behavior: "smooth"})}} className={`${(1185 < scrollPosition & 1924 > scrollPosition) ? activeLink : ""} cursor-pointer m-2`}>Services</div>
                <div onClick={() => {window.scrollTo({top: 2085, behavior: "smooth"})}} className={`${(1924 < scrollPosition & 2576 > scrollPosition) ? activeLink : ""} cursor-pointer m-2`}>Portfolio</div>
                <div onClick={() => {window.scrollTo({top: 2780, behavior: "smooth"})}} className={`${(2576 < scrollPosition) ? activeLink : ""} cursor-pointer m-2`}>Contact</div>
            </div>
            <div className="flex mr-5">
                <div className="flex items-center w-6 mr-6">
                    <button className="hover:scale-105 w-full cursor-pointer" onClick={toggleTheme}><img src={currentTheme.ThemeImage} alt="Theme Toggle" className="w-full transition-all ease-in-out duration-100"/></button>
                </div>
                <div className="flex items-center w-6 sm:hidden">
                    <button className="w-full cursor-pointer hover:scale-105" onClick={() => (setMenuDisplay(!menuDisplay))}><img src={currentTheme.NavbarMenu} alt="Logo" className="transition-all ease-in-out duration-100"/></button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;