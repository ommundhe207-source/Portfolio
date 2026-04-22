import React from "react";

import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-img">
          <img src="./Om_Photo.webp" alt="Om Profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <h3>Web Designer & Developer</h3>

          <p>
            I am Om, a creative and passionate web designer who loves building
            modern, responsive, and user-friendly websites. I focus on clean UI,
            smooth user experience, and visually appealing designs.
          </p>

          <p>
            I enjoy turning ideas into reality using HTML, CSS, JavaScript and
            React. My goal is to create impactful digital experiences that make
            a difference.
          </p>
          <a href="./Resume.pdf" download className="about-btn">
            <button className="about-btn">
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
