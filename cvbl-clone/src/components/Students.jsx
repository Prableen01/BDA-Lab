import React from "react";
import "../styles/Faculty.css";
import {
  phdStudents,
  mtechStudents,
  btechStudentGroups
} from "../data/Students";

/* ===============================
   REUSABLE STUDENT CARD
================================ */
function StudentCard({ student }) {
  return (
    <div className="faculty-card">
      <img
        src={student.img}
        alt={student.name}
        className="faculty-img"
      />

      <h3 className="faculty-name">{student.name}</h3>

      {/* Roll No shown ONLY if present */}
      {student.rollNo && (
        <p className="faculty-role">Roll No: {student.rollNo}</p>
      )}

      <p className="faculty-project">
        <strong>Project:</strong> {student.project}
      </p>

      {/* CV link shown ONLY if present (PhD students) */}
      {student.cvLink && (
        <a
          href={student.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          View CV
        </a>
      )}
    </div>
  );
}


/* ===============================
   STUDENTS PAGE
================================ */
function Students() {
  return (
    <div className="faculty-container">
      <h1>STUDENTS</h1>

      {/* ===============================
          PhD Students
      =============================== */}
      <section id="Phd">
        <h2 className="section-title">PhD Students</h2>
        <div className="faculty-grid">
          {phdStudents.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </section>

      {/* ===============================
          M.Tech Students
      =============================== */}
      <section id="Mtech">
        <h2 className="section-title">M.Tech Students</h2>
        <div className="faculty-grid">
          {mtechStudents.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </section>

      {/* ===============================
          B.Tech Students (Grouped)
      =============================== */}
      {/* ===============================
    B.Tech Students (Grouped)
=============================== */}
<section id="BTech">
  <h2 className="section-title">B.Tech Students</h2>

  <div className="btech-grid">
    {btechStudentGroups.map((group, index) => (
      <div key={index} className="btech-group">
        <h3 className="btech-group-title">{group.groupName}</h3>

        <p className="btech-group-info">
          <strong>Project:</strong> {group.project}
        </p>

        <p className="btech-group-info">
          <strong>Semester:</strong> {group.semester}
        </p>

        <ul className="btech-student-list">
          {group.students.map((stu, i) => (
            <li key={i}>
              {stu.name} — {stu.rollNo} (Sem {stu.sem})
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}

export default Students;