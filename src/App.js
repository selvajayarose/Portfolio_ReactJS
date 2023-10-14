import React from "react";
import banner_profile from "./assets/banner_profile.svg";
import down_arrow from "./assets/down_arrow.svg";
import about_image from "./assets/about.svg";
import "./app.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="banner-container">
        <main>
          <div className="logo">SJ</div>

          <article className="position-center">
            <img
              src={banner_profile}
              alt="banner_profile"
              className="banner-profile"
            />
            <h1>Selva Jaya</h1>
            <h6>Frontend Developer</h6>
            <div className="square">
              <img src={down_arrow} alt="down_arrow" className="down-arrow" />
            </div>
          </article>
        </main>
      </div>

      <section>
        <img src={about_image} alt="about_image" className="about-image" />
        <article>
          <h1>About Me</h1>
          <p>
            Passionate and self-motivated Frontend Developer and UI/UX Designer
            with a strong foundation in web development and design principles.
          </p>
          <button>Download CV</button>
        </article>
      </section>
    </React.Fragment>
  );
};

export default App;
