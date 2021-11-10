import React from "react";
import "./App.css";
import "./projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
// import Project from "./components/project";
import Project from "./components/project2";
import projects from "./projectData";
import Err404 from "./components/err404";
import Home from "./components/home";

import { HashRouter, Switch, Route, NavLink } from "react-router-dom";

const homeLogo = <FontAwesomeIcon icon={faHome} id="homeLogo" />;
const pythonLogo = <FontAwesomeIcon icon={faPython} id="pythonLogo" />;
const jsLogo = <FontAwesomeIcon icon={faJs} id="javascriptLogo" />;


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="center-box fade-in">
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="navicon" >
                {/* <NavLink to="/" className="navicon" style={{ transform: "scale(2)"}}> */}
                  {homeLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>

              <li>
                <NavLink to="/javascript" className="navicon">
                  {jsLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>

              <li>
                <NavLink to="/python" className="navicon">
                  {pythonLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/javascript">
              <div>
                <p className="javascript-project-description">
                  Click on the images to view the live app, or the GitHub icon
                  to see the repo.
                </p>
                <div className="projectDisplay">
                  <Project {...projects.issueTracker} />
                  <Project {...projects.webPortfolio} />
                  <Project {...projects.simpleResume} />
                  <Project {...projects.simpleSurveyV2} />
                  <Project {...projects.keelyTributeV2} />
                  {/* <Project {...projects.teflAssistant} /> */}
                  {/* <Project {...projects.tokyoPython} /> */}
                  <Project {...projects.pokemonPronouns} />
                  <Project {...projects.volunteers} />
                  <Project {...projects.teaDictionary} />
                  <Project {...projects.teaSentences} />
                  <Project {...projects.hidingSpotGame} />
                  <Project {...projects.matchGame} />
                  <Project {...projects.colorChangingTiles} />
                  {/* <Project {...projects.treeMap} /> */}
                  {/* <Project {...projects.choroplethMap} /> */}
                  {/* <Project {...projects.heatMap} /> */}
                  {/* <Project {...projects.scatterPlot} /> */}
                  {/* <Project {...projects.barChart} /> */}
                  <Project {...projects.pomodoroClock} />
                  {/* <Project {...projects.calculator} /> */}
                  {/* <Project {...projects.drumMachine} /> */}
                  <Project {...projects.quoteMachine} />
                  <Project {...projects.markdownPreview} />
                  {/* <Project {...projects.techDoc} /> */}
                  {/* <Project {...projects.fakeProduct} /> */}
                  {/* <Project {...projects.simpleSurvey} /> */}
                  {/* <Project {...projects.keelyTribute} /> */}
                </div>
              </div>
            </Route>

            <Route path="/python">
              <div>
                <p className="javascript-project-description">
                  Click on the projects to open up the GitHub repo.
                </p>
                <div className="projectDisplay">
                  <Project {...projects.spriteExtractor} />
                  <Project {...projects.passwordMaker} />
                  <Project {...projects.piCluster} />
                  <Project {...projects.pictureCollector} />
                  <Project {...projects.marioReview} />
                  <Project {...projects.transitFares} />
                  {/* <Project {...projects.lyricSearch} /> */}
                  <Project {...projects.pythonTEA} />
                  <Project {...projects.lyricScraper} />
                  <Project {...projects.billboardScraper} />
                  {/* <Project {...projects.machineScripts} /> */}
                  <Project {...projects.handwritingTemplate} />
                </div>
              </div>
            </Route>
            <Route path="*">
              <div className="projectDisplay">
                <Err404 />
              </div>
            </Route>
          </Switch>
          <footer></footer>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
