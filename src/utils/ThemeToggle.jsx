import { React, createContext, useState } from 'react'
import Contact from '../components/Contact';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import About from '../components/About';

const ThemeContext = createContext();

function ThemeToggle() {
    const [theme, setTheme] = useState("LightTheme");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "LightTheme" ? "DarkTheme" : "LightTheme"));
    }

  return (
    <ThemeContext.Provider value={{theme}}>
        <Navbar toggleTheme = {toggleTheme}/>
        <Home theme = {theme} />
        <About theme = {theme}/>
        <Contact theme = {theme} />
        <Portfolio theme = {theme} />
        <Services theme = {theme} />
    </ThemeContext.Provider>
  )
};

export {
    ThemeToggle,
    ThemeContext
};