
import React, { useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import "./ThunderCursor.css";

const ThunderCursor = () => {

    const cursorRef = useRef(null);
    const trailRef = useRef(null);

    useEffect(() => {

        const isTouchDevice =
            window.matchMedia("(pointer: coarse)").matches;

        const reducedMotion =
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouchDevice || reducedMotion) return;

        const cursor = cursorRef.current;
        const trail = trailRef.current;

        let x = -100;
        let y = -100;
        let trailX = -100;
        let trailY = -100;
        let animationId;

        const handleMouseMove = (event) => {
            x = event.clientX;
            y = event.clientY;

            cursor.style.transform =
                `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        };

        const animateTrail = () => {

            trailX += (x - trailX) * 0.16;
            trailY += (y - trailY) * 0.16;

            trail.style.transform =
                `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

            animationId = requestAnimationFrame(animateTrail);
        };

        const handleHover = (event) => {
            const target = event.target.closest(
                "a, button, input, textarea, select, [role='button']"
            );

            cursor.classList.toggle("cursor-hover", !!target);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleHover);

        animateTrail();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleHover);
            cancelAnimationFrame(animationId);
        };

    }, []);

    return (
        <>
            <div ref={trailRef} className="thunder-trail" />
            <div ref={cursorRef} className="thunder-cursor">
                <Zap size={23} fill="currentColor" />
            </div>
        </>
    );
};

export default ThunderCursor;
