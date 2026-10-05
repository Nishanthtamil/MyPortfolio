import React from 'react';
import { ChevronLeft } from 'lucide-react';
import useMobileNavStore from '#store/mobileNav.js';

const IOSNavBar = ({ title, backText = 'Back', rightElement }) => {
  const popScreen = useMobileNavStore(state => state.popScreen);

  return (
    <div
      className="ios-navbar"
      style={{
        paddingTop: 'calc(44px + 8px)', // 44px status bar + 8px gap
        paddingBottom: '12px',
      }}
    >
      <div className="flex-1 flex justify-start">
        <button
          onClick={popScreen}
          className="flex items-center gap-0.5 text-[#007AFF] active:opacity-60 text-[17px] -ml-1 p-1 rounded-lg"
        >
          <ChevronLeft className="w-6 h-6 -mr-0.5" strokeWidth={2.5} />
          <span className="font-medium">{backText}</span>
        </button>
      </div>
      <div className="absolute left-0 right-0 text-center font-semibold text-[17px] pointer-events-none text-black dark:text-white">
        {title}
      </div>
      <div className="flex-1 flex justify-end">
        {rightElement}
      </div>
    </div>
  );
};

export default IOSNavBar;
