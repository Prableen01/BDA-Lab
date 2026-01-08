import React from "react";
import "../styles/Faculty.css";

const facultyData = [
  {
    name: "Prof. Sonali Agarwal",
    role: "Professor",
    email: "sonali@iiita.ac.in",
    phone: "9415647042",
    img: "https://profile.iiita.ac.in/sonali/static/images/sa.jpg"
  }
];

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
