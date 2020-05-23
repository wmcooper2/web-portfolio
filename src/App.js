import React from "react";
import "./App.css";
import "./projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import Project from "./components/project";
import projects from "./projectData";
import Err404 from "./components/err404";
import Home from "./components/home";

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

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

              <li id="javascript">
                <NavLink to="/javascript" className="navicon">
                  {jsLogo}
                </NavLink>
                <div className="border-bottom-expand"></div>
              </li>

              <li id="python">
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
              <div className="projectDisplay">
                <Project {...projects.simpleResume} />
                <Project {...projects.teflAssistant} />
                <Project {...projects.tokyoPython} />
                <Project {...projects.pokemonPronouns} />
                <Project {...projects.volunteers} />
                <Project {...projects.teaDictionary} />
                <Project {...projects.teaSentences} />
                <Project {...projects.hidingSpotGame} />
                <Project {...projects.matchGame} />
                <Project {...projects.colorChangingTiles} />
                <Project {...projects.treeMap} />
                <Project {...projects.choroplethMap} />
                <Project {...projects.heatMap} />
                <Project {...projects.scatterPlot} />
                <Project {...projects.barChart} />
                <Project {...projects.pomodoroClock} />
                <Project {...projects.calculator} />
                <Project {...projects.drumMachine} />
                <Project {...projects.quoteMachine} />
                <Project {...projects.markdownPreview} />
                <Project {...projects.techDoc} />
                <Project {...projects.fakeProduct} />
                <Project {...projects.simpleSurvey} />
                <Project {...projects.keeylyTribute} />
              </div>
            </Route>

            <Route path="/python">
              <div className="projectDisplay">
                <Project {...projects.transitFares} />
                <Project {...projects.marioReview} />
                <Project {...projects.lyricScraper} />
                <Project {...projects.billboardScraper} />
                <Project {...projects.pythonTEA} />
                <Project {...projects.lyricSearch} />
                <Project {...projects.piCluster} />
                <Project {...projects.pictureCollector} />
                <Project {...projects.machineScripts} />
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
