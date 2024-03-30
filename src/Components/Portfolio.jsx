/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/hacker-6842560_1280.jpg";

const imageAltText = "hacker image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cryptography through Seed labs 🔒🔑🔓",
    description:
      "Implemented and experimented with Public Key Infrastructure (PKI) concepts within the framework of Seed Labs, showcasing proficiency in cryptographic protocols, digital certificates, and secure communication paradigms. Demonstrated practical applications of PKI in ensuring confidentiality, integrity, and authenticity in various networked environments.",
  
  },
  {
    title: "Security Operations Center (SOC) Practices 🛡️🚨",
    description:
      "Spearheaded Security Operations Center (SOC) practices by managing Security Information and Event Management (SIEM) with WAZUH. Led monitoring, analysis, and response to security incidents, leveraging WAZUH's functionalities for log management, intrusion detection, and threat intelligence integration, ensuring proactive defense and rapid incident resolution.",
  },
  {
    title: "Development and Cybersecurity Proficiency 👨‍💻",
    description:
      "lDeveloped various systems including Stock Management, Car Rental, Student Record, and Hospital Management Systems in C++. Additionally, created a Caesar cipher tool, mastered image encryption, crafted a password strength checker, built a keylogger, and explored packet analysis in Python, showcasing versatile skills in development and cybersecurity.",

  },
  {
    title: "Mobile Forensics 📱🔍",
    description:
      "Conducted forensic analysis on mobile devices to gather digital evidence for investigations. Employed specialized techniques and tools to extract, preserve, and analyze data from smartphones and tablets, contributing to legal proceedings and cybersecurity incident response efforts.",
  
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
