import React, { useEffect } from "react";
import galaxy from "../images/galaxy.webp";
import planet1 from "../images/planet1copia.png";
import planet2 from "../images/planet2.png";
import planet3 from "../images/planet3.png";

import "./HomePage.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  useEffect(() => {
    // Define the toggleDisplayOnScroll function
    function toggleDisplayOnScroll(elementSelector, offset) {
      const element = document.querySelector(elementSelector);

      if (!element) {
        console.error(`Element with selector "${elementSelector}" not found.`);
        return;
      }

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate the scroll position at which you want to toggle the display
        const offsetPosition = windowHeight * offset;

        if (scrollY >= offsetPosition) {
          element.style.display = "none";
        } else {
          element.style.display = "block"; // or "inline", "flex", etc. depending on the element
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Initial call to set the initial display state
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    // Apply the toggleDisplayOnScroll function to the ParallaxLayer with the text
    toggleDisplayOnScroll(".text-parallax-layer", 0.);
  }, []);

  return (
    <div className="parallax-container">
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${galaxy})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={1} style={{ zIndex: 999 }}>
          {/* Half of planet1 image is visible initially */}
          <img
            src={planet1}
            alt="Planet 1"
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-4}
          style={{ zIndex: 99 }}
          className="text-parallax-layer" // Add a class name to identify this ParallaxLayer
        >
          {/* Half of planet1 image is visible initially */}
          <h1>Esto es una prueba</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
