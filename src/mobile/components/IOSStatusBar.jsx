import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import useMobileNavStore from '#store/mobileNav.js';

const IOSStatusBar = ({ isDarkBg = false }) => {
  const [time, setTime] = useState(dayjs().format('h:mm'));
  const [ampm, setAmpm] = useState(dayjs().format('A'));
  const toggleControlCenter = useMobileNavStore(state => state.toggleControlCenter);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('h:mm'));
      setAmpm(dayjs().format('A'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const colorClass = isDarkBg ? 'text-white' : 'text-black dark:text-white';
  const filterClass = isDarkBg
    ? 'brightness-0 invert'
    : 'dark:brightness-0 dark:invert';

  return (
    <div
      className={`
        ios-status-bar
        px-5 flex items-center justify-between
        text-[15px] font-semibold w-full z-[100]
        pointer-events-none
        ${colorClass}
      `}
      style={{ height: '44px', paddingTop: '6px', paddingBottom: '6px' }}
    >
      {/* Left — Time */}
      <div className="flex items-baseline gap-[2px] min-w-[60px]">
        <span className="text-[15px] font-semibold leading-none">{time}</span>
        <span className="text-[10px] font-medium opacity-80 leading-none">{ampm}</span>
      </div>

      {/* Center — Dynamic Island spacer */}
      <div className="w-[100px] h-[32px] bg-black rounded-full mx-auto hidden sm:block" />

      {/* Right — Status Icons (clickable area for Control Center) */}
      <div
        className="flex items-center gap-2 pointer-events-auto cursor-pointer min-w-[60px] justify-end"
        onClick={() => toggleControlCenter(true)}
        title="Open Control Center"
      >
        {/* Signal bars */}
        <div className="flex items-end gap-[2px] h-3">
          {[40, 60, 80, 100].map((h, i) => (
            <div
              key={i}
              className={`w-[3px] rounded-[1px] ${colorClass === 'text-white' ? 'bg-white' : 'bg-black dark:bg-white'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        {/* WiFi icon */}
        <img
          src="/icons/wifi.svg"
          alt="WiFi"
          className={`w-4 h-4 ${filterClass}`}
          style={{ filter: isDarkBg ? 'brightness(0) invert(1)' : undefined }}
        />
        {/* Battery */}
        <div className="flex items-center gap-[1px]">
          <div className={`w-[22px] h-[11px] rounded-[3px] border ${isDarkBg ? 'border-white' : 'border-black dark:border-white'} relative flex items-center px-[1.5px]`}>
            <div className={`w-full h-[7px] rounded-[2px] ${isDarkBg ? 'bg-white' : 'bg-black dark:bg-white'}`} />
          </div>
          <div className={`w-[2px] h-[5px] rounded-r-[2px] ${isDarkBg ? 'bg-white' : 'bg-black dark:bg-white'} opacity-60`} />
        </div>
      </div>
    </div>
  );
};

export default IOSStatusBar;
