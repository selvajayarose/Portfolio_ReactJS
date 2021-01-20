import React from "react";
import { Link } from "react-router-dom";
import Resume from './SJ_Resume.pdf'
import "./style.css";


const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h2 className="firstLine">Hi, my name is</h2>
          <h2 className="secondLine">Selva Jaya </h2>
            <h3 className="thirdLine">Frontend Webdeveloper</h3>
            <Link to="about">
              <button>More Info</button>
            </Link>
            <a href={Resume}><button type="button" class="btn">get CV</button></a>
      </div>
    </div>
  );
};
//&#128075;
export default Home;