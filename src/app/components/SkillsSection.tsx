import React from 'react';
import Image from 'next/image';
import tsimage01 from '../../../public/images/tsimage01.png';
import tailwindcssimage from '../../../public/images/tailwindcssimage.jpg';
import next2 from '../../../public/images/next2.jpg';
import jsimage from '../../../public/images/jsimage.png';
import htmlnew from '../../../public/images/htmlnew.jpg';
import cssimage from '../../../public/images/cssimage.png';
import figmaimage from '../../../public/images/figmaimage.png';
// import './SkillSection.css';

function SkillSection() {
  return (
    <div className="skill-section">
      {/* Skills Section */}
      <div className="skills-container">
        <span className="skills-title">Skills</span>
        <ul className="skills-list">
          {["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Designing", "TypeScript"].map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Images Section */}
      <div className="images-container">
        <Image src={tsimage01} alt="TypeScript" width={100} height={200} className="skill-image" />
        <Image src={next2} alt="Next.js" width={100} height={200}  className="skill-image" />
        <Image src={cssimage} alt="CSS" width={100} height={200}  className="skill-image" />
        <Image src={htmlnew} alt="HTML" width={100} height={200} className="skill-image" />
        <Image src={jsimage} alt="JavaScript" width={100} height={200}  className="skill-image" />
        <Image src={tailwindcssimage} alt="Tailwind CSS" width={100} height={200}    className="skill-image" />
        <Image src={figmaimage} alt="Figma" width={100} height={200}   className="skill-image" />
      </div>
    </div>
  );
}

export default SkillSection;
