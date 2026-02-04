import React from "react";
import "../styles/Home.css";



function Home() {
  const recentUpdates = [
  {
    title: "Received a new Project grant from ISRO under RESPOND 2024 call",
    date: "2024–2025",
  },
  {
    title:
      "Published a research paper in DEXA 2025 entitled “Innovative Framework for Early Estimation of Mental Disorder Scores to Enable Timely Interventions”",
    date: "DEXA 2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zv8vatkAAAAJ&sortby=pubdate&citation_for_view=zv8vatkAAAAJ:4DMP91E08xMC", // replace with actual paper link
  },
  {
    title:
      "Published a research paper in DEXA 2025 entitled “Ontology-Based Forest Fire Management Using Complex Event Processing and Large Language Models”",
    date: "DEXA 2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zv8vatkAAAAJ&sortby=pubdate&citation_for_view=zv8vatkAAAAJ:aqlVkmm33-oC", // replace if available
  },
  {
    title:
      "Recently published a research paper in The Journal of Supercomputing entitled “Multiclass Classification in Medical Imaging Using Self-Supervised Learning vs Supervised Learning”",
    date: "Journal of Supercomputing",
    link: "https://link.springer.com/article/10.1007/s11227-025-08085-x", // replace with DOI link
  },
  {
    title:
      "Published a research paper in ICONIP 2025 entitled “Deep Semantics for Structured Data: Hybrid LLM-Based Models for Temporal Forecasting”",
    date: "ICONIP 2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hPvt6d8AAAAJ&sortby=pubdate&citation_for_view=hPvt6d8AAAAJ:R-LXmdHK_14C", // replace if available
  },
];


  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>BIG DATA ANALYTICS LAB</h1>
          <p className="hero-tagline">
            Research • Analytics • Intelligent Data Systems
          </p>

          <div className="hero-buttons">
            <button onClick={() => document.getElementById("mission").scrollIntoView({  })}>
              Mission & Vision
            </button>

            <button onClick={() => document.getElementById("objectives").scrollIntoView({  })}>
              Core Objectives
            </button>
          </div>
        </div>
      </section>

      {/* MISSION + UPDATES */}
      <section id="mission" className="mission-section">
        <div className="mission-left">
          <h2>Mission & Vision</h2>
          <p>
            The Big Data Analytics Lab focuses on research and development in data
            analytics, distributed systems, and intelligent computing. The lab aims
            to design scalable methods and tools for analysing large and complex
            datasets arising from real-world domains such as healthcare, smart
            infrastructure, cybersecurity, and social systems.
          </p>
          <p>
            Our vision is to contribute meaningful research outcomes, promote
            interdisciplinary collaboration, and support academic and industrial
            innovation through data-driven solutions.
          </p>
        </div>

        <div className="mission-right">
  <h2>Recent Updates</h2>

  {recentUpdates.map((item, index) => (
    <div className="update-item" key={index}>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      ) : (
        <span>{item.title}</span>
      )}
      <span className="update-date">{item.date}</span>
    </div>
  ))}
</div>


      </section>

      {/* RESEARCH FIELDS */}
      <section className="research-section">
        <h2>Research Domains</h2>
        <p className="research-subtext">
          The lab works across the following core research areas.
        </p>

        <div className="research-grid">

          <div className="research-card">
  <div className="icon-circle">■</div>
  <h3>Big Data Analytics</h3>
  <p>
    Scalable analysis of large datasets using distributed and parallel
    computing frameworks for knowledge discovery.
  </p>
</div>

<div className="research-card">
  <div className="icon-circle">▲</div>
  <h3>Data Visualisation</h3>
  <p>
    Visual analytics and dashboard design for effective understanding
    and communication of complex data.
  </p>
</div>

<div className="research-card">
  <div className="icon-circle">●</div>
  <h3>Artificial Intelligence & Machine Learning</h3>
  <p>
    Machine learning and deep learning models for prediction,
    classification, and intelligent decision support systems.
  </p>
</div>

<div className="research-card">
  <div className="icon-circle">◆</div>
  <h3>Software Systems</h3>
  <p>
    Development of reliable, scalable, and secure software systems
    supporting data-intensive applications.
  </p>
</div>
</div>

      </section>

      {/* OBJECTIVES */}
      <section id="objectives" className="objectives-section">
        <h2>Core Objectives</h2>

        <div className="objective-box">
          To provide a research-oriented environment for students and researchers
          to work on large-scale data analytics and intelligent systems.
        </div>

        <div className="objective-box">
          To strengthen collaboration between academia and industry through
          sponsored projects, workshops, and applied research initiatives.
        </div>

        <div className="objective-box">
          The lab aims to:
          <ul>
            <li>Design scalable data analytics and machine learning frameworks</li>
            <li>Encourage high-quality research publications</li>
            <li>Support interdisciplinary and application-driven research</li>
            <li>Develop practical solutions for societal and industrial problems</li>
          </ul>
        </div>

        <div className="objective-box">
          Long-term goals include:
          <ul>
            <li>Establishing advanced computing and analytics infrastructure</li>
            <li>Expanding national and international collaborations</li>
            <li>Training students with strong research and technical skills</li>
            <li>Contributing to policy-relevant and impact-oriented research</li>
          </ul>
        </div>
      </section>

      {/* FUNDING */}
      <section id="funding" className="funding-section">
        <h2>Funding & Collaboration</h2>
        <p>
          The lab is supported through research grants, institutional funding,
          and collaborations with industry partners and government agencies.
        </p>
      </section>

    </div>
  );
}

export default Home;
