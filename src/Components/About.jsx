/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 * import image from "../images/motion-background.jpg";
 */
import image from "../images/cubes.jpg";

const imageAltText = "different colors cubes background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Telecommunications Engineering student studying at Jomo Kenyatta University of Agriculture and Technology. I am passionate about technology and this drove me start learning programming as a hobby. I developed deep interest in software design and development and I have been learning and practicing ever since.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python web frameworks i.e. Django",
  "Web design and development",
  "Tasks automation using Python",
  "No Code development using AppSheet",
  "Data structures and algorithms",
  "Cloud computing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation and make a positive impact on the world around me. I like staying up to date on the latest trends in technology and I am always looking for opportunities to learn and grow. I have two years experience developing software in production, I have gained a huge amount of experience in this time which I am eager to apply as I continue my career..";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
