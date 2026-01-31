const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__info">
        <h1 className="about__title">
          Hi, I'm Asadbek. <span>Front-end Developer</span> based in Tashkent,
          Uzbekistan
        </h1>
        <p className="about__description">
          I am a passionate front-end developer with a strong foundation in
          HTML, CSS, and JavaScript. I specialize in creating responsive and
          user-friendly web applications using React.js. My goal is to build
          engaging digital experiences that not only meet but exceed client
          expectations. I am constantly learning and staying updated with the
          latest industry trends to deliver modern and efficient solutions.
        </p>
      </div>
      <div className="about__image">
        <img src="./fake.jpg" alt="About Me" />
      </div>
    </section>
  );
};

export default About;
