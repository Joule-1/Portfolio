import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";

const Navbar = ({toggleTheme}) => {
    const {theme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    return(
        <section className={`${currentTheme.HomeBG} ${currentTheme.GeneralText} z-1 h-15 w-screen fixed flex place-content-evenly`}>
            <div className="w-[45%] text-center flex items-center poppins-semibold">
                <button className="w-8 hover:scale-110 cursor-pointer rounded-full" onClick={toggleTheme}><img src={currentTheme.Logo} alt="Logo" className="w-full transition-all ease-in-out duration-100"/></button>
                <span>Akshay Pandey | Web Developer</span>
            </div>
            <div className={`flex h-15 w-[40%] place-content-evenly poppins-regular items-center ${currentTheme.FadedText}`}>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Portfolio</div>
                <div>Contact</div>
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

export default Navbar