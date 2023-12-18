import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import image from "../images/1.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="image-container">
          <img src={image} alt="Photo Profile" />
        </div>
        <div className="info-container">
          <h1 className="home-title">Alif Laksono</h1>
          <span>Programmer</span>
          <p>
            Creative Photographer based in New York and happy to travel all over
            Europe to capture photos.
          </p>
          <div className="social-media-icons">
            <FaFacebook className="social-media-icon" />
            <FaTwitter className="social-media-icon" />
            <FaInstagram className="social-media-icon" />
            <FaGithub className="social-media-icon" />
            <FaLinkedin className="social-media-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
