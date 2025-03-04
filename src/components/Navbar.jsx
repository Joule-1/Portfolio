import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import { Link } from "react-scroll";
import ThemeStorage from "../utils/ThemeStorage.js";
import possibleColors from "../utils/PossibleColors.js";

const Navbar = ({ toggleTheme, activeSection }) => {
    const { theme, toggleMenu, menuDisplay, setActiveSection } =
        useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
    const activeClassLink = `bg-${currentTheme.HeroColor} p-2 rounded-lg ${currentTheme.OppositeGeneralText} transition-all duration-200`;

    return (
        <section
            onClick={menuDisplay ? toggleMenu : undefined}
            className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} poppins-regular fixed z-10 flex h-15 w-screen place-content-between sm:place-content-evenly`}
        >
            <div className="ml-5 flex w-7 items-center hover:scale-105">
                <img
                    src={currentTheme.Logo}
                    alt="Logo"
                    className="transition-all duration-100 ease-in-out"
                />
            </div>
            <div
                className={`${menuDisplay ? "block" : "hidden"} poppins-medium absolute top-14 right-5 flex flex-col flex-wrap place-content-evenly items-center rounded-xl ${currentTheme.FadedText} z-20 w-[40%] text-center text-sm ${currentTheme.ServiceBG} sm:static sm:m-1 sm:flex sm:w-[70%] sm:flex-row sm:p-0 md:w-[50%] lg:w-[40%] xl:w-[35%]`}
            >
                <Link
                    id="home"
                    to="home"
                    smooth={true}
                    duration={500}
                    className={`m-2 cursor-pointer ${activeSection === "home" ? activeClassLink : "pt-2 sm:pt-0"}`}
                >
                    Home
                </Link>
                <Link
                    id="about"
                    to="about"
                    smooth={true}
                    duration={500}
                    className={`m-2 cursor-pointer ${activeSection === "about" ? activeClassLink : ""}`}
                >
                    About
                </Link>
                <Link
                    to="project"
                    smooth={true}
                    duration={500}
                    className={`m-2 cursor-pointer ${activeSection === "project" ? activeClassLink : ""}`}
                >
                    Projects
                </Link>
                <Link
                    id="contact"
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={`m-2 cursor-pointer ${activeSection === "contact" ? activeClassLink : "pb-2 sm:pb-0"}`}
                >
                    Contact
                </Link>
            </div>
            <div className="mr-5 flex">
                <div className="mr-6 flex w-6 items-center">
                    <button
                        className="w-full cursor-pointer hover:scale-105"
                        onClick={toggleTheme}
                    >
                        <img
                            src={currentTheme.ThemeImage}
                            alt="Theme Toggle"
                            className="w-full transition-all duration-100 ease-in-out"
                        />
                    </button>
                </div>
                <div className="flex w-6 items-center sm:hidden">
                    <button
                        className="w-full cursor-pointer hover:scale-105"
                        onClick={toggleMenu}
                    >
                        <img
                            src={currentTheme.NavbarMenu}
                            alt="Logo"
                            className="transition-all duration-100 ease-in-out"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
