import React, { createContext, useState } from 'react'
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Portfolio';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import About from '../components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const ThemeContext = createContext();

function ThemeToggle() {
    const [theme, setTheme] = useState("DarkTheme");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "LightTheme" ? "DarkTheme" : "LightTheme"));
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
		<Navbar />
		<Home />
		<About />
		<Services />
		<Projects />
		<Contact />
    </ThemeContext.Provider>
  )
};

export {
    ThemeToggle,
    ThemeContext
};