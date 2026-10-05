import React, { useState } from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSFullScreenImage from '../components/IOSFullScreenImage.jsx';
import { gallery } from '#constants/index.js';

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar title="Gallery" backText="Home" />

      <div className="p-4">
        <div className="grid grid-cols-2 gap-3.5">
          {gallery.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item.img)}
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-[#1C1C1E] active:scale-95 transition-transform duration-150 shadow-sm focus:outline-none cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Gallery photo ${item.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center text-[13px] text-gray-500">
          <p>{gallery.length} Photos</p>
        </div>
      </div>

      {selectedImage && (
        <IOSFullScreenImage
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default GalleryScreen;
