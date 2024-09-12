import MyResume from '../assets/Resume.pdf';

function Resume() {
  return (
    <div className="mx-5 my-5 fs-5">
      <h1>Resume</h1>
      <p>Download my <a href={MyResume} className="link-info" download>resume</a></p>
      <p>
        Front-end Proficiencies
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        Back-end Proficiencies
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </p>
    </div>
  );
}

export default Resume;
