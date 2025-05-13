import React from "react";
import "./Gallery.css";

const photos = [
  { id: 1, src: "photo1.jpg", alt: "Photo 1" },
  { id: 2, src: "photo2.jpg", alt: "Photo 2" },
  { id: 3, src: "photo3.jpg", alt: "Photo 3" },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="gallery-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
