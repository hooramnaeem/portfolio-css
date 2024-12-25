import React from 'react';
import Image from 'next/image';
import portfolioa1 from '../../../public/images/portfolioa1.jpg';


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className={`about-container`}>
        {/* Left Side: Image */}
        <div className={`about-image-container about-container-lg`}>
          <Image
            src={portfolioa1}
            alt="About page"
            height={250}
            width={250}
            className="about-image"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-paragraph">
            Hello! I am Asma Nazeer, a teacher, developer, and designer passionate about creating impactful projects. My background in teaching helps me bring patience and clarity to my work, making it easier for others to understand complex topics.
          </p>
          <p className="about-paragraph">
            I specialize in front-end development, with expertise in <span className="highlight">H</span>TML5, <span className="highlight">C</span>SS3, <span className="highlight">J</span>avaScript, <span className="highlight">T</span>ypeScript, and <span className="highlight">N</span>ext.js. I aim to design visually appealing and user-friendly applications.
          </p>
          <p className="about-paragraph">
            Currently, I am learning Generative AI and Web 3.0 at <span className="highlight">GIAIC</span>. My goal is to continue growing as a developer and make a positive impact in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
