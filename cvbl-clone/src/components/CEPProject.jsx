import React from "react";
import "../styles/HealthMonitoringProject.css";

const CEPProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">CEP (Complex Event Processing)</h2>

      {/* Brief */}
      <p className="hm-brief">
        A Complex Event Processing (CEP) engine identifies critical health
        events by applying predefined medical thresholds to multiple sensor
        inputs such as body temperature and heart rate. By correlating events
        across heterogeneous and continuous data streams, the system enables
        accurate disease detection and supports timely, data-driven clinical
        decision-making for proactive health management.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Analyze continuous streams of physiological sensor data</li>
          <li>Detect critical medical events using predefined thresholds</li>
          <li>Correlate heterogeneous sensor inputs for accurate event detection</li>
          <li>Support real-time, data-driven clinical decision-making</li>
          <li>Enable proactive health management through early disease detection</li>
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

export default CEPProject;