import React from "react";
import "../styles/Faculty.css";
import { facultyData } from "../data/facultydata";

function Faculty() {
  return (
    <div className="faculty-container">
      <h1>FACULTY</h1>

      <div className="faculty-grid">
        {facultyData.map((f, index) => (
          <div className="faculty-card" key={index}>
            <img src={f.img} alt={f.name} className="faculty-img" />

            <h3 className="faculty-name">{f.name}</h3>
            <p className="faculty-role">{f.role}</p>

            <p className="faculty-email">Email: {f.email}</p>
            <p className="faculty-phone">Mobile: {f.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
