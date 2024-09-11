import * as images from '../assets/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project p-2" key={name}>
      <img
        src={images[name]}
        alt={name}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>
          &nbsp;
          <a href={repo}>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;