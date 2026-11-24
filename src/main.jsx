
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ThunderCursor from "./Components/ThunderCursor/ThunderCursor";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import "./styles/Global.css";

const Placeholder = ({ title }) => (
    <main
        className="container"
        style={{
            minHeight: "70vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center"
        }}
    >
        <div>
            <h1>{title}</h1>
            <p style={{ color: "var(--text-secondary)", marginTop: "15px" }}>
                Something extraordinary is coming.
            </p>
        </div>
    </main>
);

const App = () => {

    return (
        <ThemeProvider>

            <BrowserRouter>

                <ScrollToTop />

                <ThunderCursor />

                <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={<Placeholder title="Welcome to Zeus Technology" />}
                    />

                    <Route
                        path="/about"
                        element={<Placeholder title="About Zeus Technology" />}
                    />

                    <Route
                        path="/services"
                        element={<Placeholder title="Our Services" />}
                    />

                    <Route
                        path="/portfolio"
                        element={<Placeholder title="Our Portfolio" />}
                    />

                    <Route
                        path="/contact"
                        element={<Placeholder title="Contact Us" />}
                    />

                    <Route
                        path="/careers"
                        element={<Placeholder title="Careers at Zeus Technology" />}
                    />

                    <Route
                        path="*"
                        element={<Placeholder title="404 - Page Not Found" />}
                    />

                </Routes>

                <Footer />

            </BrowserRouter>

        </ThemeProvider>
    );
};

export default App;
