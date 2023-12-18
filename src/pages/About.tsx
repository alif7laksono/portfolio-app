import React from "react";
import Button from "../components/Button/index";
import image from "../images/1.jpg";
import { MdDoubleArrow } from "react-icons/md";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-container">
      <span className="about-span">ABOUT ME</span>

      <div className="about-infos">
        <div className="about-infos-left">
          <img src={image} alt="Photo Profile" className="about-img" />
        </div>
        <div className="about-infos-right">
          <h3 className="about-title">Alif Laksono</h3>
          <span>Web Developer</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium consequatur error quae? Ea, vero, eveniet non ad
            explicabo impedit nam ullam, quibusdam culpa voluptates sed
            doloremque? Fugit maiores explicabo commodi?
          </p>
        </div>
      </div>
      <hr />

      <div className="about-info">
        <div className="left-side">
          <p>
            <b>Birthday:</b> 01.07.1990
          </p>
          <p>
            <b>Age:</b> 32
          </p>
          <p>
            <b>Address:</b> Ave 11, New York, USA
          </p>
          <p>
            <b>Email:</b> tokyo@gmail.com
          </p>
          <p>
            <b>Phone:</b> +77 022 177 05 05
          </p>
        </div>
        <div className="right-side">
          <p>
            <b>Nationality:</b> USA
          </p>
          <p>
            <b>Study:</b> University of Texas
          </p>
          <p>
            <b>Degree:</b> Master
          </p>
          <p>
            <b>Interest:</b> Playing Football
          </p>
          <p>
            <b>Freelance:</b> Available
          </p>
        </div>
      </div>

      <Button> DOWNLOAD CV</Button>
      <hr />

      <div className="about-knowledge">
        <div className="knowledge-left">
          <h4 className="knowledge-title">Programming Skills</h4>
          <ul>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              NextJs
            </li>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              ReactJs
            </li>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Typescript
            </li>
          </ul>
        </div>
        <div className="knowledge-right">
          <h4 className="knowledge-title">Interest</h4>
          <ul>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Make UI Design
            </li>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Site Optimization
            </li>
            <li>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Travel & Picnic
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default About;
