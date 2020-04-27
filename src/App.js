import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import AboutMe from "./components/aboutme";

const pythonLogo = <FontAwesomeIcon icon={faPython} />;
const jsLogo = <FontAwesomeIcon icon={faJs} />;

//for resizing automatically
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  //for resizing automatically
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  //for resizing automatically
  let aboutme1 = {
    top: Math.round(dimensions.height / 6),
    left: Math.round(dimensions.width / 6),
    size: Math.log(dimensions.width) ** 2,
    text: "Coding is my passion",
    id: "aboutme1",
  };

  return (
    <div className="App">
      <AboutMe object={aboutme1} />
      <div className="" id="centerbox">
        <nav className="projectNav">
          <ul>
            <li>{pythonLogo}</li>
            <li>{jsLogo}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
