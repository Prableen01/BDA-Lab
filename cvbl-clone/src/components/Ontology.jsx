import React from "react";
import "../styles/HealthMonitoringProject.css";

const OntologyProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">
        Ontology (LLDHEMO – Lower-Limb Disability Health & Emotion Monitoring)
      </h2>

      {/* Brief */}
      <p className="hm-brief">
       
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Demo Video
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default OntologyProject;