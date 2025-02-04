import ThemeStorage from "../utils/ThemeStorage";
import ServiceStorage from "../utils/ServiceStorage";
import { useEffect, useState } from "react";

const Services = ({theme}) => {
	const currentTheme = ThemeStorage[theme];
	const [iconTheme, setIconTheme] = useState(0);

	useEffect(() => {
		setIconTheme((theme==="LightTheme") ? 0 : 1);
	}, [theme]);

	return (
		
		<section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-screen poppins-regular py-20`}>
			<div className="mb-15 text-lg poppins-bold text-left">&emsp;&emsp;
				My&nbsp; 
				<span className={`text-${currentTheme.HeroColor}`}>
					Services
				</span>
			</div>
			<div className={`grid grid-cols-3 gap-10 w-[70%] mx-auto`}>
				{Object.keys(ServiceStorage).map((key) => (
					<div key={key} className={`poppins-medium tracking-wider p-3 rounded-lg leading-7 ${currentTheme.ServiceBG} shadow-sm ${currentTheme.Shadow}`}>
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
				))}			
			</div>
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

export default Services;
