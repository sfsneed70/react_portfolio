import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project({ project }) {

  const imageStyle = {
    width: '100%',
    height: '75%',
    objectFit: 'cover',
  }

  const { name, repo, link, description, image } = project;

  return (
    <div className="col-lg-4" key={name}>
      <img
        src={image}
        alt={name}
        className="project-bg p-2 img-fluid"
        style={imageStyle}
      />
      <div className="project-text">
        <h3>
          <a href={link} className="p-2 link-light">{name}</a>
          &nbsp;
          <a href={repo}>
            <FontAwesomeIcon icon={faGithub} className="px-2" inverse size="lg"/>
          </a>
        </h3>
        <p className="p-2">{description}</p>
      </div>
    </div>
  );
}
