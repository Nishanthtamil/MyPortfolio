import React, { useRef } from 'react';
import useThemeStore from '#store/themeStore.js';
import useMobileNavStore from '#store/mobileNav.js';
import { Plane, Wifi, Bluetooth, Zap, Moon, Sun, MonitorSmartphone, Lock, Settings } from 'lucide-react';

const ControlCenter = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { isControlCenterOpen, toggleControlCenter, pushScreen } = useMobileNavStore();

  const startY = useRef(0);

  const handleStart = (y) => { startY.current = y; };
  const handleEnd = (y) => {
    if (startY.current - y > 50) {
      toggleControlCenter(false);
    }
  };

  const goToSettings = (e) => {
    e.stopPropagation();
    toggleControlCenter(false);
    pushScreen('settings');
  };

  if (!isControlCenterOpen) return null;

  return (
    <div
      className="absolute inset-0 z-[200] ios-control-center bg-black/50 text-white flex flex-col p-5 animate-in slide-in-from-top duration-300 select-none cursor-pointer"
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientY)}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseUp={(e) => handleEnd(e.clientY)}
    >
      {/* Spacer for status bar */}
      <div style={{ height: '44px' }} />

      <div className="grid grid-cols-2 gap-3 mt-2">
        {/* Connectivity Box */}
        <div className="bg-white/20 rounded-[28px] p-4 grid grid-cols-2 gap-3 backdrop-blur-md">
          {[
            { Icon: Plane, bg: 'bg-orange-500', fill: true },
            { Icon: Wifi, bg: 'bg-blue-500' },
            { Icon: Bluetooth, bg: 'bg-blue-500' },
            { Icon: Zap, bg: 'bg-green-500', fill: true },
          ].map(({ Icon, bg, fill }, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center pointer-events-none`}>
                {fill
                  ? <Icon fill="white" strokeWidth={0} className="w-5 h-5" />
                  : <Icon className="w-5 h-5" />
                }
              </div>
            </div>
          ))}
        </div>

        {/* Now Playing */}
        <div className="bg-white/20 rounded-[28px] p-4 backdrop-blur-md flex items-center justify-center text-white/40 text-sm pointer-events-none font-medium">
          ♫ Not Playing
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-3">
        {/* Rotation Lock */}
        <div className="bg-white/20 rounded-full aspect-square flex items-center justify-center backdrop-blur-md pointer-events-none">
          <Lock className="w-5 h-5 text-white" />
        </div>

        {/* Screen Mirroring */}
        <div className="col-span-2 bg-white/20 rounded-full flex items-center justify-center gap-2 backdrop-blur-md pointer-events-none px-4">
          <MonitorSmartphone className="w-4 h-4" />
          <span className="text-[13px] font-medium">Mirroring</span>
        </div>

        {/* Dark Mode Toggle */}
        <div
          className={`rounded-full aspect-square flex items-center justify-center backdrop-blur-md cursor-pointer transition-all hover:scale-105 active:scale-95 ${theme === 'dark' ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => { e.stopPropagation(); toggleTheme(); }}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => { e.stopPropagation(); toggleTheme(); }}
        >
          {theme === 'dark' ? <Moon className="w-5 h-5 fill-current" /> : <Sun className="w-5 h-5" />}
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-3 mt-3 h-28 pointer-events-none">
        <div className="bg-white/20 rounded-[28px] backdrop-blur-md relative flex flex-col justify-end p-4">
          <Sun className="w-5 h-5 absolute bottom-4 text-white/80" />
        </div>
        <div className="bg-white/20 rounded-[28px] backdrop-blur-md relative flex flex-col justify-end p-4">
          <svg className="w-5 h-5 absolute bottom-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </div>
      </div>

      {/* Settings shortcut */}
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md text-white text-[13px] font-medium active:scale-95 transition-transform"
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={goToSettings}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={goToSettings}
        >
          <Settings className="w-4 h-4" />
          <span>Customise</span>
        </button>
      </div>

      <div className="mt-auto flex justify-center pb-6 text-white/40 text-[13px] animate-pulse pointer-events-none">
        Swipe up to close
      </div>
    </div>
  );
};

export default ControlCenter;

