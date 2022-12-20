import React from "react";
import "./Gallery.css";

const GALLERY_DATA = [
  {
    url: "forest.jpg",
    message: "Forest, so magical",
    alt: "forest",
  },
  {
    url: "mountain.jpg",
    message: "Mountain, how majestic",
    alt: "mountain",
  },
  {
    url: "us1.jpg",
    message: "Forest, so magical",
    alt: "forest",
  },
  {
    url: "wasaga3.jpg",
    message: "Mountain, how majestic",
    alt: "mountain",
  },
];

const Gallery = ({ galleryData = GALLERY_DATA }) => {
  return (
    <div className="gallery">
      {galleryData.map((gallery) => (
        <div key={gallery.url}>
          <img
            className="galleryImage snapScroll"
            src={gallery.url}
            alt={gallery.alt}
          ></img>
          <div className="galleryText snapScroll">{gallery.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
