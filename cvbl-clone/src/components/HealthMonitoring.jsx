import React from "react";
import "../styles/HealthMonitoringProject.css";

const HealthMonitoringProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">Health Monitoring System</h2>

      {/* Brief */}
      <p className="hm-brief">
        The system employs IoT-enabled biomedical sensors integrated with
        Arduino and Raspberry Pi to continuously monitor the physical and
        emotional well-being of individuals with lower-limb disabilities.
        It detects cardiovascular anomalies, stress levels, and abnormal
        posture or movement patterns, generating real-time alerts for caregivers.
        Edge-based AI processing ensures low-latency decision-making while
        reducing dependence on continuous cloud connectivity.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Continuously monitor vital health parameters using IoT sensors</li>
          <li>Detect cardiac irregularities, stress levels, and posture anomalies</li>
          <li>Provide real-time alerts to caregivers for immediate assistance</li>
          <li>Enable low-latency decision-making through edge-based AI processing</li>
          <li>Ensure reliable monitoring with minimal cloud dependency</li>
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

export default HealthMonitoringProject;
