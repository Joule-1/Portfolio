import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useContext} from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import possibleColors from "../utils/PossibleColors.js";
import ThemeStorage from '../utils/ThemeStorage.js';
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
                    <VerticalTimelineElement
                        className={``}
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date="2011 - present"
                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
        </Element>
    )
}

export default Project;