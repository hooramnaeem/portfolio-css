"use client";
import React from "react";
import Image from "next/image";
import portfolioimagedit from "../../../public/images/portfolioimagedit.jpg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Text Content */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-highlight">
              Hello, I am <br />
              Asma Nazeer
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "A Developer",
                1000,
                "A Designer",
                1000,
                "A Programmer",
                1000,
                "A Teacher",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-description">
            Front-End Developer, Designer, and Teacher dedicated to crafting
            beautiful, user-friendly web experiences and inspiring others in
            tech.
          </p>
          <div className="hero-button-container">
            <Link
              href="https://new-hackathone1-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hero-button">
                <span className="hero-button-text">My CV</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
         <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src={portfolioimagedit}
              alt="portfolio image"
              className="hero-image"
              width={250}
              height={250}
            />
          </div>
        </div> 
      </div>
    </section>
  );
}
