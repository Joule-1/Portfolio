import { createContext, useState } from "react";
import Navbar from "../components/Navbar.jsx";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [menuDisplay, setMenuDisplay] = useState(false);

    const toggleMenu = () => {
        setMenuDisplay((prev) => !prev);
    };

    const [theme, setTheme] = useState("LightTheme");

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "LightTheme" ? "DarkTheme" : "LightTheme"
        );
    };

    const [activeSection, setActiveSection] = useState();

    return (
        <ThemeContext.Provider
            value={{ theme, toggleMenu, menuDisplay, setActiveSection }}
        >
            <Navbar toggleTheme={toggleTheme} activeSection={activeSection} />
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
