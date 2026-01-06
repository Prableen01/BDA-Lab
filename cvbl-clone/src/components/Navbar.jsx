import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link"; // ✅ Use HashLink for smooth scrolling
import "../styles/Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => setActiveMenu(null);

  return (
    <nav className="navbar" ref={navRef}>
      {/* LEFT LOGO */}
      <div className="nav-left">
        <span className="logo">CVBL</span>
      </div>

      {/* CENTER NAV LINKS */}
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link smooth to="/" onClick={handleLinkClick}>Home</Link>
          </li>

          {/* ABOUT */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("about")}>About ▼</span>
            {activeMenu === "about" && (
              <div className="dropdown-menu">
                <Link smooth to="/#mission" onClick={handleLinkClick}>
                  Mission & Vision
                </Link>
                <Link smooth to="/#objectives" onClick={handleLinkClick}>
                  Core Objectives
                </Link>
                <Link smooth to="/#funding" onClick={handleLinkClick}>
                  Funding & Collaboration
                </Link>
              </div>
            )}
          </li>

          {/* PEOPLE */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("people")}>People ▼</span>
            {activeMenu === "people" && (
              <div className="dropdown-menu">
                <Link to="/faculty" onClick={handleLinkClick}>Faculty</Link>
                <Link to="/students" onClick={handleLinkClick}>Students</Link>
              </div>
            )}
          </li>

          {/* RESEARCH */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("research")}>Research ▼</span>
            {activeMenu === "research" && (
              <div className="dropdown-menu">
                <Link smooth to="/publications#journals" onClick={handleLinkClick}>Publications - Journals</Link>
                <Link smooth to="/publications#conferences" onClick={handleLinkClick}>Publications - Conferences</Link>
                <Link smooth to="/projects#sponsored" onClick={handleLinkClick}>Sponsored Projects</Link>
                <Link smooth to="/projects#grants" onClick={handleLinkClick}>Grants</Link>
                <Link smooth to="/resources" onClick={handleLinkClick}>Resources</Link>
                <Link smooth to="/datasets" onClick={handleLinkClick}>Datasets</Link>
              </div>
            )}
          </li>

          {/* COURSES */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("courses")}>Courses ▼</span>
            {activeMenu === "courses" && (
              <div className="dropdown-menu">
                <Link to="/ug" onClick={handleLinkClick}>Deep Learning</Link>
                <Link to="/pg" onClick={handleLinkClick}>Visual Recognition</Link>
                <Link to="/workshops" onClick={handleLinkClick}>Image and Video Processing</Link>
              </div>
            )}
          </li>

          {/* EVENTS */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("events")}>Events ▼</span>
            {activeMenu === "events" && (
              <div className="dropdown-menu">
                <Link to="/upcoming" onClick={handleLinkClick}>Delta 2025</Link>
                <Link to="/past" onClick={handleLinkClick}>IEEE SPS XAI 2025</Link>
                <Link to="/past" onClick={handleLinkClick}>ADASIVA 2025</Link>
                <Link to="/past" onClick={handleLinkClick}>CVMI 2024</Link>
              </div>
            )}
          </li>

          <li>
            <Link to="#footer" onClick={handleLinkClick}>Contact</Link>
          </li>

          <li>
            <Link to="/" onClick={handleLinkClick}>Gallery</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT EMPTY FOR BALANCE */}
      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
