import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>BIG DATA ANALYTICS LAB</h1>
          <p className="hero-tagline">
            Empowering Insights • Driving Intelligence • Transforming Data into Knowledge
          </p>

          <div className="hero-buttons">
            <button onClick={() => document.getElementById("mission").scrollIntoView({ behavior: "smooth" })}>
              MISSION & VISION
            </button>

            <button onClick={() => document.getElementById("objectives").scrollIntoView({ behavior: "smooth" })}>
              CORE OBJECTIVES
            </button>
          </div>
        </div>
      </section>

      {/* MISSION + UPDATES */}
      <section id="mission" className="mission-section">
        <div className="mission-left">
          <h2>MISSION & VISION</h2>
          <p>
            The Big Data Analytics Lab aims to advance cutting-edge research in data science,
            large-scale analytics, distributed computing, and AI-powered decision making.
            Our vision is to enable intelligent systems that extract meaningful insights
            from massive datasets to solve real-world challenges in healthcare, finance,
            smart cities, cybersecurity, and beyond.
          </p>
        </div>

        <div className="mission-right">
          <h2>RECENT UPDATES</h2>

          <div className="update-item">
            <a>Big Data Hackathon 2026</a>
            <span>Feb 18–20, 2026</span>
          </div>

          <div className="update-item">
            <a>Workshop on Advanced AI & Data Engineering</a>
            <span>Jan 12–13, 2026</span>
          </div>

          <div className="update-item">
            <a>Industry Collaboration with NVIDIA & AWS</a>
            <span>Ongoing</span>
          </div>

          <div className="update-item">
            <a>International Conference on Data Intelligence</a>
            <span>Nov 2025</span>
          </div>
        </div>
      </section>

      {/* RESEARCH FIELDS */}
      <section className="research-section">
        <h2>RESEARCH DOMAINS</h2>
        <p className="research-subtext">
          We explore next-generation intelligent data technologies powering the future.
        </p>

        <div className="research-grid">

  <div className="research-card">
    <div className="icon-circle">📊</div>
    <h3>Big Data Analytics</h3>
    <p>
      Large-scale data analysis, pattern discovery, and predictive insights
      using distributed computing frameworks.
    </p>
  </div>

  <div className="research-card">
    <div className="icon-circle">📈</div>
    <h3>Data Visualisation</h3>
    <p>
      Interactive dashboards and visual analytics for effective interpretation
      of complex datasets.
    </p>
  </div>

  <div className="research-card">
    <div className="icon-circle">🧠</div>
    <h3>AI & Machine Learning</h3>
    <p>
      Intelligent systems using machine learning and deep learning for
      automation, prediction, and decision-making.
    </p>
  </div>

  <div className="research-card">
    <div className="icon-circle">💻</div>
    <h3>Software Engineering</h3>
    <p>
      Design and development of scalable, secure, and maintainable software
      systems.
    </p>
  </div>

</div>

      </section>

      {/* OBJECTIVES */}
      <section id="objectives" className="objectives-section">
        <h2>CORE OBJECTIVES</h2>

        <div className="objective-box">
          To create a collaborative environment for students, researchers,
          and faculty to innovate using massive data-driven technologies.
        </div>

        <div className="objective-box">
          To bridge academia and industry through real-world data projects,
          fostering innovation and impactful research outcomes.
        </div>

        <div className="objective-box">
          Our lab focuses on:
          <ul>
            <li>Developing scalable big data platforms</li>
            <li>Enhancing AI-driven decision intelligence</li>
            <li>Promoting advanced analytics research & publications</li>
            <li>Building real-world industrial & societal data solutions</li>
          </ul>
        </div>

        <div className="objective-box">
          The Lab envisions:
          <ul>
            <li>Establishing high-performance computing infrastructure</li>
            <li>Industry & Government collaborations</li>
            <li>Training students with future-ready skills</li>
            <li>Driving innovation in intelligent data ecosystems</li>
          </ul>
        </div>
      </section>

      {/* FUNDING */}
      <section id="funding" className="funding-section">
        <h2>FUNDING & COLLABORATION</h2>
        <p>
          The Big Data Analytics Lab is supported by industry leaders, research grants,
          and government funding agencies fostering innovation and excellence.
        </p>
      </section>

    </div>
  );
}

export default Home;
