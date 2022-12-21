import React from "react";
import "./Parallax.css";

const CONTENT_TYPE = {
  img: ({ url, alt }) => (
    <div
      className="parallaxSection"
      style={{ backgroundImage: `url(${url})` }}
      alt={alt}
    ></div>
  ),
  text: ({ message }) => <div className="block">{message}</div>,
};

const FOURTH_YEAR = [
  { type: "img", url: "forest.jpg", alt: "Forest, so magical" },
  { type: "text", message: "Forest, so magical" },

  { type: "img", url: "mountain.jpg", alt: "Mountain, how majestic" },
  { type: "text", message: "Mountain, how majestic" },

  { type: "img", url: "wasaga3.jpg", alt: "Mountain, how majestic" },
  { type: "text", message: "Mountain, how majestic" },

  { type: "img", url: "us1.jpg", alt: "Mountain, how majestic" },
  { type: "text", message: "Mountain, how majestic" },
];

const Parallax = ({ content = FOURTH_YEAR }) => {
  return (
    <div className="parallaxContent">
      {content.map((c) => (
        <div key={`${c.url}`}>{CONTENT_TYPE[c.type](c)}</div>
      ))}
    </div>
  );
};
export default Parallax;
