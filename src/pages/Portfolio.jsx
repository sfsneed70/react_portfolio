import * as images from "../assets/projects";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div className="mx-5 my-5 fs-5">
      <h1>Portfolio</h1>
      <div className="container">
        <Project
          project={{
            name: "Picturific",
            repo: "https://github.com/brianleepetros/group-02-picturific",
            link: "https://brianleepetros.github.io/group-02-picturific/",
            description: "A place to organize, display, and share customizable photo gallery online with others.",
          }}
        />
        <Project
          project={{
            name: "Picturific",
            repo: "test",
            link: "test",
            description: "test",
          }}
        />
        <img className="p-2" src={images["Picturific"]} alt="picturific" />
        <img className="p-2" src={images["Picturific"]} alt="picturific" />
        <img className="p-2" src={images["Picturific"]} alt="picturific" />
        <img className="p-2" src={images["Picturific"]} alt="picturific" />
        <img className="p-2" src={images["Picturific"]} alt="picturific" />
      </div>
    </div>
  );
}
