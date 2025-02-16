import React, { Children, createContext, useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
// import Projects from '../components/Portfolio';
// import Services from '../components/Services';
import Contact from '../components/Contact.jsx';

const ThemeContext = createContext();

function ThemeProvider({children}) {
  	const [menuDisplay, setMenuDisplay] = useState(false);

  	const toggleMenu = () => {
    	setMenuDisplay((prev) => !prev);
  };

  	const [theme, setTheme] = useState("LightTheme");

  	const toggleTheme = () => {
    	setTheme((prevTheme) => (prevTheme === "LightTheme" ? "DarkTheme" : "LightTheme"));
  }

  	const [activeSection, setActiveSection] = useState();


  return (
    <ThemeContext.Provider value={{theme, toggleMenu, menuDisplay, setActiveSection}}>
		<Navbar toggleTheme={toggleTheme} activeSection={activeSection}/>
		{children}
		{/* <Home />
		<About />
		<Contact /> */}
    </ThemeContext.Provider>
  )
};

export {
    ThemeProvider,
    ThemeContext
};