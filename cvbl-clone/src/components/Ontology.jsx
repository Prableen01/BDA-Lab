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
        The Lower-Limb Disability Health and Emotion Monitoring Ontology (LLDHEMO)
        forms the semantic foundation of the proposed health assistance system
        by integrating biomedical, psychological, and contextual data into a
        unified knowledge-driven framework. Built upon the Basic Formal Ontology
        (BFO), LLDHEMO ensures logical consistency, semantic interoperability,
        and alignment with established biomedical ontology standards.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Provide a unified semantic framework for health and emotion monitoring</li>
          <li>Ensure interoperability using BFO-aligned biomedical standards</li>
          <li>Extend the SSN ontology to model IoT sensors and real-time observations</li>
          <li>Enable semantic annotation and multimodal data fusion</li>
          <li>Support ontology-driven reasoning for abnormality detection and decision support</li>
          <li>Facilitate seamless integration with healthcare systems and knowledge bases</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Live Demo
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default OntologyProject;