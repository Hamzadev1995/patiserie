'use client';

import React, { useState } from 'react';

import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';
import image10 from '../assets/images/image10.jpeg';

const galleryItems = [
    { id: 1, src: image1, alt: "Gâteau aux framboises", className: "row-span-2" },
    { id: 2, src: image2, alt: "Macarons verts", className: "col-span-2" },
    { id: 3, src: image3, alt: "Gâteau au chocolat" },
    { id: 4, src: image4, alt: "Gâteau aux fruits", className: "row-span-2" },
    { id: 5, src: image5, alt: "Tarte au citron", className: "col-span-2" },
    { id: 6, src: image6, alt: "Éclair au chocolat" },
    { id: 7, src: image7, alt: "Mille-feuille", className: "row-span-2" },
    { id: 8, src: image8, alt: "Tarte aux pommes", className: "col-span-2" },
    { id: 9, src: image9, alt: "Choux à la crème" },
    { id: 10, src: image10, alt: "Macarons roses" },
  ];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#B8860B]">
        GALLERIE
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative group cursor-pointer overflow-hidden rounded-lg ${item.className}`}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative max-w-3xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
              X
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
