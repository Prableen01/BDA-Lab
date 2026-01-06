import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>COMPUTER VISION AND BIOMETRICS LAB</h1>

          <div className="hero-buttons">
  <button onClick={() => document.getElementById("mission").scrollIntoView({behavior:"smooth"})}>
    MISSION & VISION
  </button>

  <button onClick={() => document.getElementById("objectives").scrollIntoView({behavior:"smooth"})}>
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
            Promote learning and system development in the field of Computer Vision
            and Biometrics. The research community will constantly work together 
            to exchange ideas, collaborate and bring impactful solutions to real world problems.
          </p>
        </div>

        <div className="mission-right">
          <h2>RECENT UPDATES</h2>

          <div className="update-item">
            <a>DeLTA 2025 Winter Internship</a>
            <span>Dec 01–31, 2025</span>
          </div>

          <div className="update-item">
            <a>IEEE SPS XAI 2025 Seasonal School</a>
            <span>July 16–20, 2025</span>
          </div>

          <div className="update-item">
            <a>ADASIVA 2025 Summer School</a>
            <span>July 07–12, 2025</span>
          </div>

          <div className="update-item">
            <a>3rd IEEE CVMI 2024 Conference</a>
            <span>Oct 19–20, 2024</span>
          </div>
        </div>
      </section>

      {/* RESEARCH FIELDS */}
      <section className="research-section">
  <h2>RESEARCH FIELDS</h2>
  <p className="research-subtext">
    Our research spans multiple cutting-edge domains shaping the future
    of automation, security, and intelligent systems.
  </p>

  <div className="research-grid">

    <div className="research-card">
      <div className="icon-circle">🤖</div>
      <h3>Machine Learning</h3>
      <p>Developing intelligent systems through data-driven models.</p>
    </div>

    <div className="research-card">
      <div className="icon-circle">👁️</div>
      <h3>Computer Vision</h3>
      <p>Understanding visual information for real-world applications.</p>
    </div>

    <div className="research-card">
      <div className="icon-circle">🧬</div>
      <h3>Biometrics</h3>
      <p>Secure and reliable identity recognition technologies.</p>
    </div>

    <div className="research-card">
      <div className="icon-circle">🖼️</div>
      <h3>Image Processing</h3>
      <p>Enhancing and interpreting digital images efficiently.</p>
    </div>

  </div>
</section>


      {/* OBJECTIVES */}
      <section id="objectives"  className="objectives-section">
        <h2>CORE OBJECTIVES</h2>

        <div className="objective-box">
          The Lab will provide a platform to students, faculty, and research fellows to work together and initiate teaching and research activities in the area to unveil various concepts and tools.
        </div>

        <div className="objective-box">
          The center will provide a common ground to the research community to discover challenges and possible solutions in computer vision. Teaching and learning will be the backbone of future research activities, involving all stakeholders.
        </div>

        <div className="objective-box">
          The proposed center will contribute to:
          <ul>
            <li>Enhancing the quality of education provided by the Institute with emphasis on domain-specific expertise.</li>
            <li>Grooming and nurturing young talent willing to work in the field, with ample opportunities and guidance.</li>
            <li>Promoting research by investigating existing problems that can be solved with available tools and applications.</li>
            <li>Identifying problems where computer vision, machine learning, and biometrics could serve as optimal solutions.</li>
          </ul>
        </div>

        <div className="objective-box">
          The proposed Lab will have the capability to:
          <ul>
            <li>Establish infrastructure mostly through research funding.</li>
            <li>Leverage campus and state collaborations for mutual benefit.</li>
            <li>Provide seamless support between and among student service areas (advising, tutoring, counseling, etc.).</li>
            <li>Productively involve both staff and faculty in these areas.</li>
            <li>Expand into new and emerging technologies, education, assessment, and undergraduate research.</li>
            <li>Collaborate with faculty, staff, students, community members, and programs engaged in related experiential, community-based teaching, learning, and scholarship.</li>
          </ul>
        </div>

      </section>

      {/* FUNDING */}
      <section id="funding"  className="funding-section">
        <h2>FUNDING & COLLABORATION</h2>
        <p>
          CVBL has been involved in cutting-edge research supported by
          government agencies and industry collaborators.
        </p>
      </section>

    </div>
  );
}

export default Home;
