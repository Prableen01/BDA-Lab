import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
  setIsMobileOpen(!isMobileOpen);
  setActiveMenu(null);
};

const [mobileDropdown, setMobileDropdown] = useState(null);

const toggleMobileDropdown = (menu) => {
  setMobileDropdown(mobileDropdown === menu ? null : menu);
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

  const handleLinkClick = () => setActiveMenu(null);

  return (
    <nav className="navbar" ref={navRef}>
      {/* LEFT LOGO */}
      <div className="nav-left">
  <img
    src="/logo.png"   // change path if needed
    alt="BDAL Logo"
    className="nav-logo"
  />
  <span className="logo">BDAL</span>
</div>

      {/* CENTER NAV */}
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
                  Vision & Mission
                </Link>
                <Link smooth to="/#objectives" onClick={handleLinkClick}>
                  Lab Objectives
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
                <Link to="/students#Phd" onClick={handleLinkClick}>Students-Phd</Link>
                <Link to="/students#Mtech" onClick={handleLinkClick}>Students-M.tech</Link>
                <Link to="/students#BTech" onClick={handleLinkClick}>Students-B.tech</Link>
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
                <Link smooth to="/publications#workshops" onClick={handleLinkClick}>Workshops</Link>
                <Link smooth to="/projects#completed" onClick={handleLinkClick}>Completed Projects</Link>
                <Link smooth to="/projects#ongoing" onClick={handleLinkClick}>Ongoing Projects</Link>
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
                <Link to="https://profile.iiita.ac.in/sonali/courses.html" onClick={handleLinkClick}>Big Data Analytics</Link>
                <Link to="https://profile.iiita.ac.in/sonali/courses.html" onClick={handleLinkClick}>AI & Machine Learning</Link>
                <Link to="https://profile.iiita.ac.in/sonali/courses.html" onClick={handleLinkClick}>Data Visualisation</Link>
                <Link to="https://profile.iiita.ac.in/sonali/courses.html" onClick={handleLinkClick}>Software Engineering</Link>
              </div>
            )}
          </li>

          {/* EVENTS */}
          {/* <li className="dropdown">
            <span onClick={() => toggleMenu("events")}>Events ▼</span>
            {activeMenu === "events" && (
              <div className="dropdown-menu">
                <Link to="/upcoming" onClick={handleLinkClick}>Workshops & Seminars</Link>
                <Link to="/past" onClick={handleLinkClick}>Past Conferences</Link>
              </div>
            )}
          </li> */}

          <li>
            <Link smooth to="#footer" onClick={handleLinkClick}>Contact</Link>
          </li>

          <li>
            <Link to="https://bdasp.iiita.ac.in/gallery.html" onClick={handleLinkClick}>Gallery</Link>
          </li>

        </ul>
      </div>

      {/* RIGHT EMPTY */}
      <div className="nav-right"></div>
      <div className="hamburger" onClick={toggleMobileMenu}>
  <span></span>
  <span></span>
  <span></span>
</div>
{isMobileOpen && (
  <div className="mobile-menu">

    <Link to="/" onClick={toggleMobileMenu}>Home</Link>

    {/* ABOUT */}
    <div className="mobile-dropdown">
      <span onClick={() => toggleMobileDropdown("about")}>
        About
      </span>
      {mobileDropdown === "about" && (
        <div className="mobile-submenu">
          <Link to="/#mission" onClick={toggleMobileMenu}>Vision & Mission</Link>
          <Link to="/#objectives" onClick={toggleMobileMenu}>Lab Objectives</Link>
          <Link to="/#funding" onClick={toggleMobileMenu}>Funding & Collaboration</Link>
        </div>
      )}
    </div>

    {/* PEOPLE */}
    <div className="mobile-dropdown">
      <span onClick={() => toggleMobileDropdown("people")}>
        People
      </span>
      {mobileDropdown === "people" && (
        <div className="mobile-submenu">
          <Link to="/faculty" onClick={toggleMobileMenu}>Faculty</Link>
          <Link to="/students#Phd" onClick={toggleMobileMenu}>Students – PhD</Link>
          <Link to="/students#Mtech" onClick={toggleMobileMenu}>Students – M.Tech</Link>
          <Link to="/students#BTech" onClick={toggleMobileMenu}>Students – B.Tech</Link>
        </div>
      )}
    </div>

    {/* RESEARCH */}
    <div className="mobile-dropdown">
      <span onClick={() => toggleMobileDropdown("research")}>
        Research
      </span>
      {mobileDropdown === "research" && (
        <div className="mobile-submenu">
          <Link to="/publications#journals" onClick={toggleMobileMenu}>Journals</Link>
          <Link to="/publications#conferences" onClick={toggleMobileMenu}>Conferences</Link>
          <Link to="/publications#workshops" onClick={toggleMobileMenu}>Workshops</Link>
          <Link to="/projects#completed" onClick={toggleMobileMenu}>Completed Projects</Link>
          <Link to="/projects#ongoing" onClick={toggleMobileMenu}>Ongoing Projects</Link>
          <Link to="/resources" onClick={toggleMobileMenu}>Resources</Link>
          <Link to="/datasets" onClick={toggleMobileMenu}>Datasets</Link>
        </div>
      )}
    </div>

    {/* COURSES */}
    <div className="mobile-dropdown">
      <span onClick={() => toggleMobileDropdown("courses")}>
        Courses
      </span>
      {mobileDropdown === "courses" && (
        <div className="mobile-submenu">
          <a href="https://profile.iiita.ac.in/sonali/courses.html">Big Data Analytics</a>
          <a href="https://profile.iiita.ac.in/sonali/courses.html">AI & Machine Learning</a>
          <a href="https://profile.iiita.ac.in/sonali/courses.html">Data Visualisation</a>
          <a href="https://profile.iiita.ac.in/sonali/courses.html">Software Engineering</a>
        </div>
      )}
    </div>

    <Link to="#footer" onClick={toggleMobileMenu}>Contact</Link>
    <Link to="https://bdasp.iiita.ac.in/gallery.html" onClick={toggleMobileMenu}>Gallery</Link>

  </div>
)}
    </nav>
  );
}

export default Navbar;
