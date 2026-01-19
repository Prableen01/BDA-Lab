import React, { useEffect } from "react";
import "../styles/Projects.css";
import { projects } from "../data/projectsData";

const renderProject = (proj, index) => (
  <div className="project-item" key={proj.id}>
    <b>{index + 1}. {proj.title}</b>

    {proj.agency && <p><strong>Agency:</strong> {proj.agency}</p>}
    {proj.scheme && <p><strong>Scheme:</strong> {proj.scheme}</p>}
    {proj.role && <p><strong>Role:</strong> {proj.role}</p>}
    {proj.duration && <p><strong>Duration:</strong> {proj.duration}</p>}
    {proj.amount && <p><strong>Amount:</strong> {proj.amount}</p>}
    {proj.status && <p><strong>Status:</strong> {proj.status}</p>}

    {proj.collaborators && (
      <p>
        <strong>Collaborators:</strong>
        <ul>
          {proj.collaborators.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </p>
    )}
  </div>
);

const Projects = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="projects-page">
      <h1 className="page-title">PROJECTS & GRANTS</h1>

      <section id="sponsored">
        <h2 className="section-title">Sponsored Projects</h2>
        <hr />
        {projects.sponsored.map(renderProject)}
      </section>

      <section id="international">
        <h2 className="section-title">International Projects</h2>
        <hr />
        {projects.international.map(renderProject)}
      </section>

      <section id="national">
        <h2 className="section-title">National Projects</h2>
        <hr />
        {projects.national.map(renderProject)}
      </section>
    </div>
  );
};

export default Projects;
