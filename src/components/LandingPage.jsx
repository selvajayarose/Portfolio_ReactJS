import React from "react";
import AboutPic from "../assets/about_illustration.svg";

function LandingPage() {
  return (
    <React.Fragment>
      <section id="home">
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-green md:ms-2">Hi, my name is</h6>
          <h2 className="text-primary">Selva Jaya </h2>
          <h3 className="text-secondary">Frontend Developer</h3>

          <div className="flex gap-4 mt-6">
            <button>More Info</button>

            <a href="/static/media/SJ_CV.6f198c89ababc51302fb.pdf">
              <button type="button">get CV</button>
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex flex-col md:flex-row items-center  gap-12">
          <img src={AboutPic} alt="about" className="md:w-2/5 w-96" />
          <div
            className="md:w-1/2 w-100 flex flex-col items-center md:items-start md:text-left text-center md:ms-12"
          >
            <h6 className="text-green md:ms-2">Hi, my name is</h6>
            <h3 className="text-primary">About Me</h3>
            <p className="text-primary">
              Passionate and self-motivated Frontend Developer and UI/UX
              Designer with a strong foundation in web development and design
              principles.
            </p>
            <div className="flex gap-4 mt-6">
              <button>More Info</button>

              <a href="/static/media/SJ_CV.6f198c89ababc51302fb.pdf">
                <button type="button">get CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingPage;
