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
 * laptop-desk-window.jpg
 * design-desk.jpeg
 */
import image from "../images/laptop-desk-window.jpg";

const imageAltText = "Desktop with books, monitor and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Crypto Trading Bot",
    description:
      "Collaboration to create an automated crypto trading bot using Python and the Kraken, BTCm, Independent Reserve and Binance APIs. The bot is able to trade on multiple exchanges and has a web interface for monitoring and control. The bot is currently in production and is being used to trade real and huge sums of money. Feedback from the client has been positive and the bot is performing well.",
    url: "",
  },
  {
    title: "Django for Beiginners",
    description:
      "I upskilled myself on the building web applications using Python and Django framework by following the guide by William S Vincent. I developed four or five web apps that illustrated how to use Django for tasks like user authentication and authorization, email setup, password setting and recovery, and deploying to Heroku.",
    url: "https://github.com/cmmasaba/Django",
  },
  {
    title: "Newspaper App",
    description:
      "I used Python and Django to create a lightweight web application for posting and reading news articles. The app is able to handle user authentication and authorization, and has a web interface for posting and reading articles.",
    url: "https://github.com/cmmasaba/newspaper_app",
  },
  {
    title: "Prototype: AirBNB clone",
    description:
      "I did this project as part of my studies in the ALX bootcamp. The goal was to build a clone of the AirBNB website.",
    url: "https://github.com/cmmasaba/AirBnB_clone",
  },
  {
    title: "Protoype: AppSheet app to track expenses",
    description:
      "I created an AppSheet app to track expenses. The app is able to track expenses and income and generate reports. The app is still in prototype stage as I work on enabling more features.",
    url: "https://www.appsheet.com/start/ad90d854-0f61-492a-b7f7-37b1320e633d",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
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
