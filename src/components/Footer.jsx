// import * as images from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const iconStyle = {
    // width: '48px',
    // height: '48px',
    margin: '60px 10px',
  };

  return (
    <footer className="text-center" >
      {/* <a href="https://github.com/sfsneed70" className="px-2"><img src={images['Github']} alt="github logo" style={iconStyle} /></a> */}
      <a href="https://github.com/sfsneed70" className="px-2"><FontAwesomeIcon icon={faGithub} style={iconStyle} size="4x" inverse/></a>
      {/* <a href="https://www.linkedin.com/in/stephen-f-sneed-40145212/" className="px-2"><img src={images['Linkedin']} alt="linkedin logo" style={iconStyle} /></a> */}
      <a href="https://www.linkedin.com/in/stephen-f-sneed-40145212/" className="px-2"><FontAwesomeIcon icon={faLinkedinIn} style={iconStyle} size="4x" inverse/></a>

      {/* <a href="https://stackoverflow.com/users/27269174/stephen-sneed" className="px-2"><img src={images['Stackoverflow']} alt="stackoverflow logo" style={iconStyle}/></a> */}
      <a href="https://stackoverflow.com/users/27269174/stephen-sneed" className="px-2"><FontAwesomeIcon icon={faStackOverflow} style={iconStyle} size="4x" inverse/></a>
   </footer>
  );
}

export default Footer;