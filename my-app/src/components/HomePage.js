import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./HomePage.css";

function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="wrapper" ref={ref}>
      <motion.h1 className="title" style={{y: textY}}>WELCOME TO MY PORTFOLIO</motion.h1>
      <motion.div className="image1" style={{y: backgroundY}}></motion.div>
      <motion.div className="image2"></motion.div>
    </div>
  );
}

export default HomePage;
