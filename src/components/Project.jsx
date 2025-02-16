import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useContext} from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import possibleColors from "../utils/PossibleColors.js";
import ThemeStorage from '../utils/ThemeStorage.js';
import ProjectStorage from '../utils/ProjectStorage.js';
import { Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';

const Project = () => {
    const {theme, toggleMenu, menuDisplay, setActiveSection} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
		threshold: 0.5,
		onChange: (inView) => {
			if(inView){
				setActiveSection("project")
			}
		}
	})

    return(
        <Element name="project">
            <section ref={ref} onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular pt-10`}>
                <div className="poppins-bold text-3xl pt-15 pb-5 flex justify-center">My&nbsp;
                    <span className={`text-${currentTheme.HeroColor}`}> Projects</span>
                </div>
                <VerticalTimeline>
                    {Object.keys(ProjectStorage).map((index) => (
                        <VerticalTimelineElement 
                            key={index} 
                            shadowSize={ "medium" }
                            iconStyle={{
                                background: currentTheme.HeroColorHex
                            }}
                            contentStyle={{
                                background: currentTheme.ServiceBGHex
                            }}>
                                <div className='poppins-semibold text-xl '>
                                    {ProjectStorage[index].HeadLine}
                                </div>
                                <div className='flex items-center place-content-between'>
                                    <div className='hover:scale-105 rounded-xl my-4'>
                                        <a href={ProjectStorage[index].ProjectLink} target='_blank' className='flex'>
                                            <span className={`rounded-xl text-xs sm:text-sm border-4 border-transparent p-2 bg-${currentTheme.HeroColor} text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>
                                                Project Link
                                            </span>
                                        </a>
                                    </div>
                                    <div className='w-8 hover:scale-105'>
                                        <a href={ProjectStorage[index].GitHubLink} target='_blank'>
                                            <img src={currentTheme.GitHubIcon} alt="GitHub" />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>
                                    {(ProjectStorage[index].TechStack).map((item, index) => (
                                        <div key={index} className={`text-sm`}>|&nbsp;&nbsp;{item}&nbsp;&nbsp;|</div>
                                    ))}
                                </div>
                                <div className='flex my-4 items-center'>
                                    {(ProjectStorage[index].ProjectIcon).map((item, index) => (
                                        <div key={index} className="w-[50%] mx-2">
                                            <img src={item} />
                                        </div>
                                    ))}
                                </div>
                        </VerticalTimelineElement>
                        ))}
                </VerticalTimeline>
            </section>
        </Element>
    )
}

export default Project;