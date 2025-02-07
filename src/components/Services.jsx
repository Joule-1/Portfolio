import ThemeStorage from "../utils/ThemeStorage";
import { ThemeContext } from "../utils/ThemeToggle";
import ServiceStorage from "../utils/ServiceStorage";
import { useEffect, useState, useContext } from "react";
import Tilt from "react-parallax-tilt";

const Services = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

	const [iconTheme, setIconTheme] = useState(0);

	useEffect(() => {
		setIconTheme((theme==="LightTheme") ? 0 : 1);
	}, [theme]);

	return (
		
		<section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-full poppins-regular py-7 xl:h-screen`}>
			<div className="mb-5 text-xl poppins-bold text-left">&emsp;&emsp;
				My&nbsp; 
				<span className={`text-${currentTheme.HeroColor}`}>
					Services
				</span>
			</div>
			<div className={`grid grid-col-1 gap-10 w-[70%] mx-auto sm:grid-cols-2 sm:text-sm lg:grid-cols-3`}>
				{Object.keys(ServiceStorage).map((key, index) => (
					<Tilt key={index} tiltReverse={true} glareEnable={true} glareBorderRadius="8px" tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={2000}>
						<div className={`poppins-medium tracking-wider p-3 rounded-lg leading-7 ${currentTheme.ServiceBG} shadow-md ${currentTheme.Shadow}`}>
							<div className="w-6 m-3">
								<img src={ServiceStorage[key].Icon[iconTheme]} alt="Icon" className="w-full" />
							</div>
							<div className={`my-3 text-lg`}>
								{ServiceStorage[key].HeadLine}
							</div>
							<div className={`${currentTheme.FadedText}`}>
								{ServiceStorage[key].ByLine}
							</div>

						</div>
					</Tilt>
				))}			
			</div>
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

export default Services;
