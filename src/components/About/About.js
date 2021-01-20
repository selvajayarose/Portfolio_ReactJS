import React from "react";
import Selva from "./s.jpg";
import "./style.css";

const About = () => {
  const arrow = ('>>');
  return (<>
    <div className="about" id='grid-container'>

      <div className='col-1'>
        <h1>Let me introduce myself</h1>
        <p>
          I'm a Fresher, studied BA English literature.
          But my passion was Programming. I taught Myself HTML, CSS, JavaScript
          and NodeJs by creating Responsive and interactive web pages.
      </p>
        <div className="skills">
          <div className="content">
            <div>
              <p>Here are a few technologies I've been learning with recently:</p><br/>
              <li><span>{arrow}</span><strong>Front-end<span>{arrow}</span></strong> <p>ReactJs, Vanilla Javascript, CSS, SASS, LESS, Bootstrap</p></li>
              <li><span>{arrow}</span><strong>Back-end <span>{arrow}</span> </strong> <p>NodeJs, ExpressJS</p></li>
              <li><span>{arrow}</span><strong>Database  <span>{arrow}</span>  </strong> <p>MongoDB</p></li>
            </div>
          </div>
        </div>
      </div>
      <div className='col-2'>
        <img src={Selva} alt="Selva" width="270" height="350" />
      </div>
    </div>


  </>
  );
};

export default About;