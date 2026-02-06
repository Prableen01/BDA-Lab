import React, { useEffect } from "react";
import "../styles/Projects.css";
import { Completedprojects } from "../data/CompletedprojectsData";
import { Ongoingprojects } from "../data/OngoingprojectsData";
import { Link } from "react-router-dom";

/* =========================
   PROJECT WEBSITE LINK
   ========================= */
const ProjectLink = ({ link }) => {
  if (!link) return null;

  // Internal link
  if (link.startsWith("/")) {
    return (
      <Link to={link} className="project-website">
        Website Link
      </Link>
    );
  }

  // External link
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-website"
    >
      Website Link
    </a>
  );
};

/* =========================
   PROJECT CARD (REUSABLE)
   ========================= */
const ProjectCard = (proj, index) => (
  <div className="project-item" key={proj.id}>
    <div className="project-header">
      <h3 className="project-title">
        {index + 1}. {proj.title}
      </h3>

      <ProjectLink link={proj.website || proj.link} />
    </div>

    {proj.brief && <p className="project-brief">{proj.brief}</p>}

    <div className="project-meta">
      {proj.agency && (
        <p><strong>Funding Agency:</strong> {proj.agency}</p>
      )}
      {proj.scheme && (
        <p><strong>Scheme:</strong> {proj.scheme}</p>
      )}
      {proj.role && (
        <p><strong>Role:</strong> {proj.role}</p>
      )}
      {proj.duration && (
        <p><strong>Duration:</strong> {proj.duration}</p>
      )}
    </div>

    {proj.collaborators && proj.collaborators.length > 0 && (
      <div className="project-collaborators">
        <strong>Collaborators:</strong>
        <ul>
          {proj.collaborators.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

/* =========================
   PROJECTS PAGE
   ========================= */
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
      <h1 className="page-title">Projects & Grants</h1>

      {/* ONGOING PROJECTS */}
      <section id="ongoing">
        <h2 className="section-title">Ongoing Projects</h2>
        <hr />
        {Ongoingprojects.map(ProjectCard)}
      </section>

      {/* COMPLETED PROJECTS */}
      <section id="completed">
        <h2 className="section-title">Completed Projects</h2>
        <hr />
        {Completedprojects.map(ProjectCard)}
      </section>
    </div>
  );
};

export default Projects;
