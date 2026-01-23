import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import About from "./components/About";
// import People from "./components/People";
// import Research from "./components/Research";
// import Courses from "./components/Courses";
// import Events from "./components/Events";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import DatasetsPage from "./components/DatasetsPage";
  import ResourcesPage from "./components/ResourcesPage";
import { HashLink as Link } from 'react-router-hash-link';
import ProjectPage from './components/ProjectPage';
import BimodalGestureCareWebsite from './components/GestureCarepage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/people" element={<People />} /> */}
          {/* <Route path="/research" element={<Research />} /> */}
          {/* <Route path="/courses" element={<Courses />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/datasets" element={<DatasetsPage />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/gesturecare" element={<BimodalGestureCareWebsite />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
