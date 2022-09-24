import logoo from './images/logo.png';
import aa from './images/logo.png';
import dd from './images/logo.png';

import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom';

function Header() {
  return (<div><header>
    <div id="header" >
      <div className="container">
        <nav>
          <img src="images/logo.png" className="logo"></img>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sevices</a></li>
              <li><a href="#">Portfolic</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="header-text">
          <p>UI/UX Designer</p>
          <h1>Hi,I'm<span> golo</span><br /> <br />from kundapura</h1>
        </div>                                                    
      </div>
    </div>
  </header>
  </div>
  );
}


function Body() {
  return (<div>
      <div id="About">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="images/logo.png" ></img>
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>About me in a resume is the opening section placed either at the top or at the top left column of a page.
                This section is a short paragraph that speaks about the candidates professional identity and experience
                kinds of stuff to grab the reader’s attention within a minute of skimming the resume.</p>

              <div className="tab-titles">
                <p className="tab-links active-link">Skills</p>
                <p className="tab-links">Experience</p>
                <p className="tab-links">Education</p>
              </div>
              <div className="tab-contents">
                <ul>
                  <li><span>UI/UX</span><br />Designing web/app interfaces</li>
                  <li><span>Web Development</span><br />web app development</li>
                  <li><span>App Development</span><br />Building Android/ios apps</li>
                </ul>
              </div>
              <div className="tab-contents">
                <ul>
                  <li><span></span><br />Designing web/app interfaces</li>
                  <li><span>Web Development</span><br />web app development</li>
                  <li><span>App Development</span><br />Building Android/ios apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}


