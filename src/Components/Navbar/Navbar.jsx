
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Sun,
    Moon,
    Menu,
    X,
    Zap
} from "lucide-react";

import { useTheme } from "../../Context/ThemeContext.jsx";
import "./Navbar.css";

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" }
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">

            <div className="navbar-container">

                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <span className="logo-symbol">
                        <Zap size={27} fill="currentColor" />
                    </span>

                    <span>
                        ZEUS
                        <small>TECHNOLOGY</small>
                    </span>
                </Link>

                <nav className={`nav-links ${menuOpen ? "show" : ""}`}>

                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                </nav>

                <div className="navbar-actions">

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        title="Toggle theme"
                    >
                        {theme === "dark"
                            ? <Sun size={20} />
                            : <Moon size={20} />
                        }
                    </button>

                    <Link to="/contact" className="navbar-cta">
                        Let's Talk <span>↗</span>
                    </Link>

                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>

                </div>

            </div>

        </header>
    );
};

export default Navbar;
