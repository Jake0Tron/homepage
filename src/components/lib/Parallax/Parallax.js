import React from "react";
import "./Parallax.css";

const FOURTH_YEAR = [
  { url: "forest.jpg", message: "poop" },
  { url: "mountain.jpg", message: "poop" },
];

const createParallaxContent = (content) =>
  content.map((c) => (
    <div key={`${c.url}`}>
      <div
        className="parallaxSection"
        style={{ backgroundImage: `url(${c.url})` }}
      ></div>
      <div className="block">{c.message}</div>
    </div>
  ));

const Parallax = ({ content = FOURTH_YEAR }) => {
  return (
    <>
      <div>Start</div>
      {createParallaxContent(content)}
      <div>End</div>
    </>
  );
};
export default Parallax;
