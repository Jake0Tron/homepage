import React from "react";
import { AnniversaryPhotoData } from "../../../data/photoData";
import "./Parallax.css";

const CONTENT_TYPE = {
  img: ({ url, alt }) => (
    <div key={url}>
      {/* <img src={url} alt={alt} /> */}
      <div
        className="parallaxSection"
        style={{ backgroundImage: `url(${url})` }}
        alt={alt}
        loading="lazy"
      ></div>
    </div>
  ),
  text: ({ message }) => (
    <div key={message} className="block">
      {message}
    </div>
  ),
};

const Parallax = ({ content = AnniversaryPhotoData }) => {
  return (
    <div className="parallaxContent">
      {content.map((c) => CONTENT_TYPE[c.type](c))}
    </div>
  );
};
export default Parallax;
