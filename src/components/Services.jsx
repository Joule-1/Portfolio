	import ThemeStorage from "../utils/ThemeStorage";
	import { ThemeContext } from "../utils/ThemeProvider";
	import ServiceStorage from "../utils/ServiceStorage";
	import { useEffect, useState, useContext } from "react";
	import Tilt from "react-parallax-tilt";

	const Services = () => {
	const {theme, toggleMenu, menuDisplay} = useContext(ThemeContext);
	const currentTheme = ThemeStorage[theme];

	const [iconTheme, setIconTheme] = useState(0);

	useEffect(() => {
		setIconTheme((theme==="LightTheme") ? 0 : 1);
	}, [theme]);

	const [serviceHeight, setServiceHeight] = useState(2);
	const [readMore, setReadMore] = useState(true);
	const [sectionHeight, setSectionHeight] = useState(`h-screen`)
	const ServiceStorageUpdated = Object.values(ServiceStorage).slice(0, serviceHeight);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 640){ 
				setServiceHeight(2);
			}
			else if(window.innerWidth > 640 && window.innerWidth <= 1024){
				setServiceHeight(4); 
			}
			else{
				setServiceHeight(6);
			}};
			
		handleResize(); 														// Initial check
		window.addEventListener("resize", handleResize);

  		return () => window.removeEventListener("resize", handleResize);}, []);

	const modifyServiceLength = () => {
		if(readMore){
			setServiceHeight((prev) => (prev + 2));
			setSectionHeight(`h-full`);
			setReadMore((serviceHeight > 4 ) ? true : false)
		}
		else{
			if (window.innerWidth <= 640){ 
				setServiceHeight(2);
				setSectionHeight(`h-screen`);
				setReadMore(true);
				}
			else if(window.innerWidth > 640 && window.innerWidth <= 1024){
					setServiceHeight(4); 
					setSectionHeight(`h-screen`);
					setReadMore(true);
				}
		} 
	}
			
		return (
			<section onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular ${sectionHeight}`}>
				<div className="mb-2 pt-16 text-2xl poppins-bold">&emsp;&emsp;
					My&nbsp;
					<span className={`text-${currentTheme.HeroColor}`}>
						Services
					</span>
				</div>
				<div className={`grid grid-col-1 w-[70%] mx-auto gap-7 sm:grid-cols-2 lg:grid-cols-3`}>
					{Object.keys(ServiceStorageUpdated).map((key, index) => (
						<Tilt key={index} tiltReverse={true} glareEnable={true} glareBorderRadius="8px" tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={2000}>
							<div className={`poppins-medium tracking-wider p-3 rounded-lg leading-7 ${currentTheme.ServiceBG} shadow-md ${currentTheme.Shadow}`}>
								<div className="w-6 m-3"> 
									<img src={ServiceStorageUpdated[key].Icon[iconTheme]} alt="Icon" className="w-full" />
								</div>
								<div className={`my-3 text-base xl:text-lg`}>
									{ServiceStorageUpdated[key].HeadLine}
								</div>
								<div className={`text-sm xl:text-base ${currentTheme.FadedText}`}>
									{ServiceStorageUpdated[key].ByLine}
								</div>

							</div>
						</Tilt>
					))}			
				</div>
				<div className="flex justify-center items-center mt-2">
				<button onClick={modifyServiceLength} className={`rounded-xl mt-3 border-4 border-transparent bg-${currentTheme.HeroColor} p-1 text-white text-sm poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer lg:hidden`}>Read <span>{readMore ? `More` : `Less`}</span></button>
			 	</div>
			</section>
		)
	}

	const possibleColors = {
		section_height1: 'h-screen',
		section_height2: 'h-full',
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
