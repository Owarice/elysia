'use client';

import React, { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.log(error));
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#E5B0CE] items-center justify-center p-24">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="w-full rounded-lg scale-100 h-60 w-60 object-cover cursor-pointer"
                onClick={() => openLightbox(imageUrl)}
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleOutsideClick}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected Image"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
