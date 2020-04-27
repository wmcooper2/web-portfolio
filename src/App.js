import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import AboutMe from "./components/aboutme";
import Project from "./components/project";

const pythonLogo = <FontAwesomeIcon icon={faPython} id="pythonLogo" />;
const jsLogo = <FontAwesomeIcon icon={faJs} id="javascriptLogo" />;

function App() {
  let aboutme1 = {
    text: "Coding is my passion",
    id: "aboutme1",
  };

  let project = {
    text: "Project",
  };

  return (
    <div className="App">
      <AboutMe object={aboutme1} />
      <div id="centerbox">
        <nav className="projectNav">
          <ul>
            <li id="pythonLogo">{pythonLogo}</li>
            <li id="javascriptLogo">{jsLogo}</li>
          </ul>
        </nav>
        <div className="projectDisplay">
          <Project object={project} />
          <Project object={project} />
          <Project object={project} />
          <Project object={project} />
          <Project object={project} />
        </div>
      </div>
    </div>
  );
}

export default App;
