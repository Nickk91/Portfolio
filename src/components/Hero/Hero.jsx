import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div id="hero-container">
        <div className="hero-left">
          <h1>Hello World!;</h1>
          <br />
          <h1>I'm Nikolai,</h1>
          <br />
          <h1>FullStack-Web-Developer()</h1>
          <br />
          <p id="myself-description">
            Hello, I'm Nikolai, a web developer with a passion for merging
            artistry and technology. My journey started with a bachelor's in
            Economics, instilling in me analytical prowess and strategic
            thinking. Outside the coding realm, I'm a music enthusiast, crafting
            melodies and harmonies. This fusion of technical and artistic
            pursuits defines my approach to web development. I view coding as an
            art form, every line a stroke on a canvas. The evolving web
            landscape fuels my excitement, pushing me to find elegant solutions
            to complex problems. Constantly learning, I stay updated on the
            latest technologies and design trends. Let's collaborate to
            transform ideas into seamless digital experiences. Join me in this
            exciting journey of creativity and innovation!
          </p>
        </div>

        <div className="hero-img"></div>
      </div>
    </>
  );
};

export default Hero;
