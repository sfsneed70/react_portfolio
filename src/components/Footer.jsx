
const Footer = () => {

  const iconStyle = {
    width: '48px',
    height: '48px'
  };

  return (
    <footer className="text-center" >
      <a href="https://github.com/sfsneed70" className="px-2"><img src="src/assets/github-mark.svg" alt="github logo" style={iconStyle} /></a>
      <a href="https://www.linkedin.com/in/stephen-f-sneed-40145212/" className="px-2"><img src="src/assets/In-Blue-48.png" alt="linkedin logo" style={iconStyle} /></a>
      <a href="https://stackoverflow.com/users/27269174/stephen-sneed" className="px-2"><img src="src/assets/stack-overflow.svg" alt="stackoverflow logo" style={iconStyle}/></a>
   </footer>
  );
}

export default Footer;