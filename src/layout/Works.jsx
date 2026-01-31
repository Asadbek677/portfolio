import Card from "../components/ui/Card";
import projects from "../data";

const Works = () => {
  return (
    <section className="works" id="works">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          img={project.img}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default Works;
