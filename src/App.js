import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import AboutMe from "./components/aboutme";
import Project from "./components/project";
import Err404 from "./components/err404";

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <AboutMe object={aboutme1} />
        <div id="centerbox">
          <nav className="projectNav">
            <ul>
              <li>
                <NavLink to="/python" id="pythonLogo">
                  {pythonLogo}
                </NavLink>
              </li>
              <li>
                <NavLink to="javascript" id="javascriptLogo">
                  {jsLogo}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="projectDisplay">
            <Switch>
              <Route exact path="/">
                Welcome
              </Route>
              <Route path="/python">
                <Project object={project} />
                <Project object={project} />
                <Project object={project} />
                <Project object={project} />
                <Project object={project} />
              </Route>
              <Route path="/javascript">
                <Project object={project} />
              </Route>
              <Route path="*">
                <Err404 />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
