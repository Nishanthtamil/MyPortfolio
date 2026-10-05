import React from 'react';

const IOSHomeIndicator = ({ isDarkBg = false }) => {
  const bgClass = isDarkBg ? 'bg-white' : 'bg-black dark:bg-white';
  
  return (
    <div className="fixed bottom-0 w-full ios-safe-bottom pt-2 pb-1 z-[100] flex justify-center pointer-events-none">
      <div className={`w-1/3 h-1.5 rounded-full ${bgClass}`}></div>
    </div>
  );
};

export default IOSHomeIndicator;
