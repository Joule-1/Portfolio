import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";
import ProjectStorage from "../utils/ProjectStorage";
import { Github, Go_Normal } from "../assets";

const Portfolio = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

	const [iconTheme, setIconTheme] = useState(0);

	useEffect(() => {
		setIconTheme((theme==="LightTheme") ? 0 : 1);
	}, [theme]);

	const [projectHeight, setProjectHeight] = useState(2);
	const [readMore, setReadMore] = useState(true);
	const [sectionHeight, setSectionHeight] = useState(`h-screen`)
	const ProjectStorageUpdated = Object.values(ProjectStorage).slice(0, projectHeight);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 640){ 
				setProjectHeight(2);
			}
			else if(window.innerWidth > 640 && window.innerWidth <= 1024){
				setProjectHeight(4); 
			}
			else{
				setProjectHeight(6);
			}};
			
		handleResize(); 														// Initial check
		window.addEventListener("resize", handleResize);

  		return () => window.removeEventListener("resize", handleResize);}, []);

	const modifyServiceLength = () => {
		if(readMore){
			setProjectHeight((prev) => (prev + 2));
			setSectionHeight(`h-full`);
			setReadMore((projectHeight > 4 ) ? true : false)
		}
		else{
			if (window.innerWidth <= 640){ 
				setProjectHeight(2);
				setSectionHeight(`h-screen`);
				setReadMore(true);
				}
			else if(window.innerWidth > 640 && window.innerWidth <= 1024){
					setProjectHeight(4); 
					setSectionHeight(`h-screen`);
					setReadMore(true);
				}
		}
	}

  return (
    <section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-full poppins-regular ${sectionHeight}`}>
		<div className="text-2xl poppins-bold text-center pt-16 pb-2">&emsp;&emsp;
				My&nbsp; 
				<span className={`text-${currentTheme.HeroColor}`}>
					Projects
				</span>
			</div>
			<div className={`grid grid-cols-1 gap-10 w-[75%] mx-auto sm:grid-cols-2 sm:text-sm lg:grid-cols-3`}>
				{Object.keys(ProjectStorageUpdated).map((key, index) => (
					<div key={index} className={`poppins-semibold tracking-wider p-3 rounded-lg leading-7 ${currentTheme.ServiceBG} shadow-md ${currentTheme.Shadow}`}>
						
						<div className="w-[100%] mx-auto">
							<div className="hover:scale-101">
								<a href={ProjectStorageUpdated[key].GithubLink} target="_blank" className="cursor-pointer absolute">
									<img src={Github} alt="Github" className={`rounded-full w-6`} />
								</a>
							</div>
								<img src={ProjectStorageUpdated[key].Icon} alt="Icon" className="w-full rounded-lg"/>
							
						</div>
						<div className={`mt-2 text-md flex place-content-between`}>
							{ProjectStorageUpdated[key].HeadLine}
							<div className={`hover:scale-110`}>
								<a href={ProjectStorageUpdated[key].ProjectLink} target="_blank" className="cursor-pointer">
									<img src={Go_Normal} alt="Go_Icon" className={`rounded-lg w-8 bg-${currentTheme.HeroColor} items-center transition-all ease-in-out duration-100`} />
								</a>
							</div>
						</div>					
					</div>
				))}			
			</div>
			<div className="flex justify-center items-center mt-2">
				<button onClick={modifyServiceLength} className={`rounded-xl mt-3 border-4 border-transparent bg-${currentTheme.HeroColor} p-1 text-white text-sm poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer lg:hidden`}>Read <span>{readMore ? `More` : `Less`}</span></button>
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

export default Portfolio;