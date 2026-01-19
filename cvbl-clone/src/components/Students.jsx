import React from "react";
import "../styles/Faculty.css";
import { phdStudents,mtechStudents } from "../data/Students";


function StudentCard({ student }) {
  return (
    <div className="faculty-card">
      <img
        src={student.img}
        alt={student.name}
        className="faculty-img"
      />

      <h3 className="faculty-name">{student.name}</h3>
      <p className="faculty-role">Roll No: {student.rollNo}</p>

      <p className="faculty-project">
        <strong>Project:</strong> {student.project}
      </p>
    </div>
  );
}



function Students() {
  return (
    <div className="faculty-container">
      <h1>STUDENTS</h1>

      {/* PhD Students */}
      <section id="Phd">
      <h2 className="section-title">PhD Students</h2>
      <div className="faculty-grid">
        {phdStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
      </section>

      {/* M.Tech Students */}
      <section id="M.tech">
      <h2 className="section-title">M.Tech Students</h2>
      <div className="faculty-grid">
        {mtechStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
      </section>
    </div>
  );
}

export default Students;
