import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
// import AboutMe from "./components/aboutme";
import Project from "./components/project";
import Err404 from "./components/err404";
import Home from "./components/home";

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const pythonLogo = <FontAwesomeIcon icon={faPython} id="pythonLogo" />;
const jsLogo = <FontAwesomeIcon icon={faJs} id="javascriptLogo" />;
const homeLogo = <FontAwesomeIcon icon={faHome} id="homeLogo" />;

function App() {
  // let aboutme1 = {
  // text: "Coding is my passion",
  // id: "aboutme1",
  // };

  let picProj = {
    href: "someurl",
    thumbnail: "thumbs/workingonit.png",
    altText: "alt text",
    description: "Some description about a project.",
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <AboutMe object={aboutme1} /> */}
        <div id="centerbox">
          {/* <nav className="projectNav"> */}
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="navicon">
                  {homeLogo}
                </NavLink>
              </li>
              <li>
                <NavLink to="/python" className="navicon" id="pythonLogo">
                  {pythonLogo}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="javascript"
                  className="navicon"
                  id="javascriptLogo"
                >
                  {jsLogo}
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <div className="projectDisplay"> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/python">
              <div className="projectDisplay">
                <Project object={picProj} />
                <Project object={picProj} />
                <Project object={picProj} />
                <Project object={picProj} />
                <Project object={picProj} />
              </div>
            </Route>
            <Route path="/javascript">
              <div className="projectDisplay">
                <Project object={picProj} />
              </div>
            </Route>
            <Route path="*">
              <div className="projectDisplay">
                <Err404 />
              </div>
            </Route>
          </Switch>
          {/* </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
