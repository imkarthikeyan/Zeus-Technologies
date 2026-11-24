
import React from "react";
import { Link } from "react-router-dom";
import {Mail, Zap } from "lucide-react";
import "./Footer.css";

const Footer = () => {

    return (
        <footer className="zeus-footer">

            <div className="footer-container">

                <div className="footer-main">

                    <div className="footer-brand">

                        <h2>
                            <Zap size={25} fill="currentColor" />
                            ZEUS<span>.</span>
                        </h2>

                        <p className="footer-tagline">
                            Turning Impossible Into Possible.
                        </p>

                        <p>
                            Innovative technology, creative thinking and
                            digital solutions for a smarter future.
                        </p>

                    </div>

                    <div className="footer-column">
                        <h3>Explore</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Company</h3>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Get In Touch</h3>

                        <a href="mailto:thekarthikeyan.dg@gmail.com">
                            <Mail size={15} />
                            Email Us
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Instagram size={15} />
                            Instagram
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin size={15} />
                            LinkedIn
                        </a>
                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Zeus Technology.
                        All Rights Reserved.
                    </p>

                    <p>Designed with creativity and technology ⚡</p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
