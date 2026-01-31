import Button from "../components/ui/button";

const Intro = () => {
  return (
    <section className="intro">
      <h1>Hi, I'm Asadbek.</h1>
      <h1>
        <span>Front-end Developer</span> based in Tashkent, Uzbekistan
      </h1>
      <p>
        I create responsive and user-friendly websites using the latest
        technologies.
      </p>
      <Button
        text="My Resume ↗"
        func={() => window.open("path/to/resume.pdf")}
      />
    </section>
  );
};

export default Intro;
