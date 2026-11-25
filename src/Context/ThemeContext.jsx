
import {
    useEffect,
    useState
} from "react";
import { ThemeContext } from "./themeContext.js";

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("zeus-theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("zeus-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

