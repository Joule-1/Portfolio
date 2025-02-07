import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";
import Tilt from "react-parallax-tilt";

const Contact = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
	const InputCSS = `rounded-xl p-3 m-3 outline-none hover:placeholder-${currentTheme.HeroColor} ${currentTheme.HomeBG}`;

  return (
    <section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-screen py-20 poppins-regular overflow-hidden`}>
		<div className={`text-5xl text-center poppins-semibold`}>Contact <span className={`text-${currentTheme.HeroColor}`}>Me</span></div>
		<Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={2000}>
			<form className={`flex justify-center items-center flex-col placeholder-${currentTheme.FadedColor} text-lg mt-5`} onSubmit={(event) => {event.preventDefault()}}>
				<div className="w-[50%] flex justify-center">
					<input type="text" placeholder="Full Name" required autoComplete="off" className={`${InputCSS} w-[45%]`}/>
					<input type="email" placeholder="Email Address" autoComplete="off" required className={`${InputCSS} w-[45%]`}/>
				</div>
				<input type="text" placeholder="Email Subject" required autoComplete="off" className={`${InputCSS} w-[47%]`}/>
				<textarea rows={"8"} placeholder="Your Message" required autoComplete="off" className={`${InputCSS} w-[47%] resize-none`}></textarea>
				<button type="submit" className={`m-2 rounded-xl border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>
					Send Message
				</button>
			</form>
		</Tilt>
	</section>
  )
}

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

export default Contact;