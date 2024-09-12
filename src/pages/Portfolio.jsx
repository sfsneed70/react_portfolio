import Project from "../components/Project";
import projects from "../assets/projects";

export default function Portfolio() {
  return (
    <>
      <h1 className="mx-5 my-5">Portfolio</h1>
      <div className="mx-5 d-flex flex-wrap">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </>
  );
}
