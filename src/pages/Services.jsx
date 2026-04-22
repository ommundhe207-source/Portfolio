import React, { useEffect, useState } from "react";
import "./Services.css";

function Services() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count);
      if (count >= 75) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services">

      <h2 className="section-title">My Services</h2>

      {/* ===== ORIGINAL CARDS ===== */}
      <div className="services-container">

        <div className="service-card">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Web Design</h3>
          <p>Modern, responsive and user-friendly website designs.</p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>Clean and efficient React & frontend development.</p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-mobile-screen"></i>
          <h3>Responsive Design</h3>
          <p>Mobile-friendly layouts for all devices.</p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-pen-nib"></i>
          <h3>UI/UX Design</h3>
          <p>Creative and attractive user interface design.</p>
        </div>

      </div>

      {/* ===== NEW SKILLS SECTION ===== */}
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        <div className="skill">
          <span>HTML</span>
          <div className="progress">
            <div className="bar html"></div>
          </div>
        </div>

        <div className="skill">
          <span>CSS</span>
          <div className="progress">
            <div className="bar css"></div>
          </div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="progress">
            <div className="bar js"></div>
          </div>
        </div>

        <div className="skill">
          <span>React</span>
          <div className="progress">
            <div className="bar react"></div>
          </div>
        </div>

        <div className="skill">
          <span>Bootstrap</span>
          <div className="progress">
            <div className="bar bootstrap"></div>
          </div>
        </div>

      </div>

      {/* ===== OVERALL PROGRESS ===== */}
      <div className="overall-progress">
        <h3>Your Progress</h3>
        <p>{progress}% to complete</p>

        <div className="progress big">
          <div
            className="bar overall"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

    </section>
  );
}

export default Services;