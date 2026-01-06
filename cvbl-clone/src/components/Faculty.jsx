import React from "react";
import "../styles/Faculty.css";

const facultyData = [
  {
    name: "Prof. Mukul S. Sutaone",
    role: "Professor",
    email: "mssutaone@iiita.ac.in",
    phone: "+91-532-292-2222",
    img: "https://www.iiita.ac.in/institute/message_from_director/"
  },
  {
    name: "Prof. Satish Kumar Singh",
    role: "Professor",
    email: "sk.singh@iiita.ac.in",
    phone: "+91-532-292-2533",
    img: "/images/faculty2.png"
  },
  {
    name: "Dr. Shiv Ram Dubey",
    role: "Associate Professor",
    email: "srdubey@iiita.ac.in",
    phone: "+91-532-292-2211",
    img: "/images/faculty3.png"
  },
  {
    name: "Prof. Mukul S. Sutaone",
    role: "Professor",
    email: "mssutaone@iiita.ac.in",
    phone: "+91-532-292-2222",
    img: "https://www.iiita.ac.in/institute/message_from_director/"
  },
  {
    name: "Prof. Satish Kumar Singh",
    role: "Professor",
    email: "sk.singh@iiita.ac.in",
    phone: "+91-532-292-2533",
    img: "/images/faculty2.png"
  },
  {
    name: "Dr. Shiv Ram Dubey",
    role: "Associate Professor",
    email: "srdubey@iiita.ac.in",
    phone: "+91-532-292-2211",
    img: "/images/faculty3.png"
  },
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

            <p className="faculty-email">📧 {f.email}</p>
            <p className="faculty-phone">📞 {f.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
