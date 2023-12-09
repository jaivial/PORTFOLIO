import React, { useEffect, useState } from "react";
import galaxy from "../images/galaxy.webp";
import planet1 from "../images/planet1copia.png";
import planet2 from "../images/planet2.png";
import planet3 from "../images/planet3.png";

import "./HomePage.css";

import { Parallax } from "react-scroll-parallax";

function HomePage() {
  return (
    <div className="parallax-container">
      <div className="parallax-1">
        <Parallax
          className="parallax-layer-1"
          translateY={["0%", "100%"]}
          easing="easeIn"
          startScroll={1}
          endScroll={300}
        >
          <img src={planet1} alt="Planet" />
        </Parallax>
      </div>
      <div className="parallax-2">
        <Parallax className="parallax-layer-2">
          <h1>Hola mundo</h1>
        </Parallax>
      </div>
    </div>
  );
}

export default HomePage;
