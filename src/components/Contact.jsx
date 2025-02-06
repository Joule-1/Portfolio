import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";

const Contact = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

  return (
    <section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-screen poppins-regular py-18`}>
		<div className="text-5xl text-center poppins-semibold">Contact <span className={`text-${currentTheme.HeroColor}`}>Me</span></div>
		<input type="text" placeholder="Full Name"/>
	</section>
  )
}

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

export default Contact;