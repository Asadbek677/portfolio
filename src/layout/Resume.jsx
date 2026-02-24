import React from "react";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume__title">
        <h1>Resume</h1>
        <button className="button">PDF</button>
      </div>
      <div className="resume__info">
        <div className="resume__card">
          <div className="resume__card-title">
            <h1>Experience</h1>
          </div>
          <div className="resume__card-content">
            <span>May 2022 - Present</span>
            <h1>Google</h1>
            <h2>UX Design Intern</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem
              ullamcorper blandit. Dui, semper elementum volutpat non vulputate
              ultrices sed.{" "}
            </p>
          </div>
        </div>

        <div className="resume__card">
          <div className="resume__card-title">
            <h1>Education</h1>
          </div>
          <div className="resume__card-content">
            <span>May 2022 - Present</span>
            <h1>It Center</h1>
            <h2>Frontend</h2>
            <p></p>
          </div>
        </div>

        <div className="resume__card">
          <div className="resume__card-title">
            <h1>Skills</h1>
          </div>
          <div className="resume__card-content">
            <p>
              HTML, CSS, JavaScript, React.js, Git, Figma, Adobe XD, Responsive
              Web
            </p>
          </div>
        </div>

        <div className="resume__card">
          <div className="resume__card-title">
            <h1>Tools</h1>
          </div>
          <div className="resume__card-content">
            <p>Visual Studio Code, GitHub, Figma, Adobe XD, Chrome DevTools,</p>
          </div>
        </div>

        <div className="resume__card">
          <div className="resume__card-title">
            <h1>Contact</h1>
          </div>
          <div className="resume__card-content">
            <p>
              Email: erkinjonovasadbek3@gmail.com
              <br />
              Phone: +998 90 955 50 83
            </p>
          </div>
        </div>
      </div>

      <div className="go-to-top" onClick={() => window.scrollTo(0, 0)}>
        Go to top
      </div>
    </section>
  );
};

export default Resume;
