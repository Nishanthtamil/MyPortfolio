import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import { locations } from '#constants/index.js';

const AboutScreen = () => {
  const aboutData = locations.about.children.find(child => child.fileType === 'txt');
  const heroImage = locations.about.children.find(child => child.fileType === 'img')?.imageUrl || aboutData?.image;

  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page bg-white dark:bg-black">
      <IOSNavBar title="About Me" backText="Home" />
      
      <div className="flex flex-col items-center pt-8 px-6">
        {heroImage && (
          <img 
            src={heroImage} 
            alt="Nishanth" 
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-6 border-4 border-gray-100 dark:border-gray-800"
          />
        )}
        
        <h1 className="text-2xl font-bold mb-2 text-center text-black dark:text-white">
          {aboutData?.subtitle || "Meet the Developer"}
        </h1>
        
        <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-gray-700 dark:text-gray-300">
          {aboutData?.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
