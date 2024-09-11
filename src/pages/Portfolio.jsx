import * as images from "../assets/projects";

export default function Portfolio() {
  return (
    <div className="mx-5 my-5 fs-5">
      <h1>Portfolio</h1>
      <div className="container">
        <img className="p-2" src={images['Picturific']} alt="picturific" />
        <img className="p-2" src={images['Picturific']} alt="picturific" />
        <img className="p-2" src={images['Picturific']} alt="picturific" />
        <img className="p-2" src={images['Picturific']} alt="picturific" />
        <img className="p-2" src={images['Picturific']} alt="picturific" />
        <img className="p-2" src={images['Picturific']} alt="picturific" />
      </div>
    </div>
  );
}
