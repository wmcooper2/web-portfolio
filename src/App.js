import React from "react";
import "./App.css";
import "./projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import Project from "./components/project";
import Err404 from "./components/err404";
import Home from "./components/home";

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import projects from "./projectData";

const homeLogo = <FontAwesomeIcon icon={faHome} id="homeLogo" />;
const pythonLogo = <FontAwesomeIcon icon={faPython} id="pythonLogo" />;
const jsLogo = <FontAwesomeIcon icon={faJs} id="javascriptLogo" />;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="center-box fade-in">
          <nav>
            <ul>
              <li id="home">
                <NavLink to="/" className="navicon">
                  {homeLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>
              <li id="python">
                <NavLink to="/python" className="navicon">
                  {pythonLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>
              <li id="javascript">
                <NavLink to="javascript" className="navicon">
                  {jsLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/python">
              <div className="projectDisplay">
                <Project {...projects.pythonTEA} />
                <Project {...projects.marioReview} />
                <Project {...projects.lyricScraper} />
                <Project {...projects.lyricSearch} />
                <Project {...projects.billboardScraper} />
                <Project {...projects.piCluster} />
                <Project {...projects.pictureCollector} />
                <Project {...projects.machineScripts} />
                <Project {...projects.transitFares} />
              </div>
            </Route>
            <Route path="/javascript">
              <div className="projectDisplay">
                <Project {...projects.keeylyTribute} />
                <Project {...projects.simpleSurvey} />
                <Project {...projects.fakeProduct} />
                <Project {...projects.techDoc} />
                <Project {...projects.markdownPreview} />
                <Project {...projects.quoteMachine} />
                <Project {...projects.drumMachine} />
                <Project {...projects.calculator} />
                <Project {...projects.pomodoroClock} />
                <Project {...projects.barChart} />
                <Project {...projects.scatterPlot} />
                <Project {...projects.heatMap} />
                <Project {...projects.choroplethMap} />
                <Project {...projects.treeMap} />
              </div>
            </Route>
            <Route path="*">
              <div className="projectDisplay">
                <Err404 />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
