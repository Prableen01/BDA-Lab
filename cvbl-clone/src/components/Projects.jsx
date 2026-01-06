import React, { useEffect } from "react";
import "../styles/Projects.css";

const Projects = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="projects-page">

      <h1 className="page-title">PROJECTS & GRANTS</h1>

      {/* -------- Sponsored Projects -------- */}
      <section id="sponsored">
        <h2 className="section-title">Sponsored Projects</h2>
        <hr />

        <div className="project-item">
          <b>1. Modern AI-Based Computer-Assisted Criminal Investigation using Sketch-to-Face Synthesis based Facial Recognition.</b>
          <p><strong>Granter</strong> &nbsp;&nbsp; I-DAPT HUB FOUNDATION, IIT BHU</p>
          <p><strong>Duration</strong> &nbsp; 2025 – 2027</p>
          <p><strong>Amount</strong> &nbsp;&nbsp; ₹19,97,424/-</p>
          <p><strong>Status</strong> &nbsp;&nbsp;&nbsp; Ongoing</p>
        </div>

        <div className="project-item">
          <b>2. AI System Design to Tackle Foot & Mouth Disease in Cattle from Rural Areas.</b>
          <p><strong>Granter</strong> &nbsp;&nbsp; Council of Science & Technology, U.P.</p>
          <p><strong>Duration</strong> &nbsp; 2025 – 2028</p>
          <p><strong>Amount</strong> &nbsp;&nbsp; ₹15,08,000/-</p>
          <p><strong>Status</strong> &nbsp;&nbsp;&nbsp; Ongoing</p>
        </div>

        <div className="project-item">
          <b>3. Deep Learning Methods for Object Recognition in Underwater Acoustic Images.</b>
          <p><strong>Granter</strong> &nbsp;&nbsp; Naval Research Board (NRB), DRDO</p>
          <p><strong>Duration</strong> &nbsp; 2025 – 2028</p>
          <p><strong>Amount</strong> &nbsp;&nbsp; ₹30,90,147/-</p>
          <p><strong>Status</strong> &nbsp;&nbsp;&nbsp; Ongoing</p>
        </div>
      </section>

      {/* -------- Grants Section -------- */}
      <section id="grants">
        <h2 className="section-title">Grants</h2>
        <hr />

        <div className="project-item">
          <b>1. Research Grant for AI-based Imaging Systems</b>
          <p><strong>Agency</strong> &nbsp;&nbsp; SERB, Gov. of India</p>
          <p><strong>Amount</strong> ₹12,00,000/-</p>
          <p><strong>Status</strong> Completed</p>
        </div>

        <div className="project-item">
          <b>2. Innovation Grant for Healthcare AI Solutions</b>
          <p><strong>Agency</strong> &nbsp;&nbsp; MeitY</p>
          <p><strong>Amount</strong> ₹8,50,000/-</p>
          <p><strong>Status</strong> Ongoing</p>
        </div>
      </section>

    </div>
  );
};

export default Projects;
