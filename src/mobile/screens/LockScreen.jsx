import React, { useRef, useState, useEffect } from 'react';
import useMobileNavStore from '#store/mobileNav.js';
import { locations } from '#constants/index.js';
import dayjs from 'dayjs';
import { Lock } from 'lucide-react';

const totalProjects = locations.work?.children?.length ?? 0;
const totalSkillStacks = 7; // matches techStack length in constants

const LockScreen = () => {
  const unlock = useMobileNavStore(state => state.unlock);
  const [time, setTime] = useState(dayjs().format('h:mm'));
  const [date, setDate] = useState(dayjs().format('dddd, MMMM D'));
  const startY = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('h:mm'));
      setDate(dayjs().format('dddd, MMMM D'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => { startY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e) => {
    if (startY.current - e.changedTouches[0].clientY > 50) unlock();
  };
  const handleMouseDown = (e) => { startY.current = e.clientY; };
  const handleMouseUp = (e) => {
    if (startY.current - e.clientY > 50) unlock();
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center select-none cursor-pointer"
      style={{ paddingTop: '60px', paddingBottom: '40px' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Time */}
      <div className="flex flex-col items-center mt-8">
        <p className="text-white text-[17px] font-medium opacity-90 mb-1">{date}</p>
        <h1 className="text-white font-bold tracking-tight" style={{ fontSize: 'clamp(72px, 22vw, 96px)', lineHeight: 1 }}>
          {time}
        </h1>
      </div>

      {/* Portfolio Widget */}
      <div className="w-[88%] mt-10 ios-glass p-5 text-white rounded-3xl pointer-events-none">
        <div className="flex items-center gap-2 mb-3">
          <img src="/images/folder.png" alt="Portfolio" className="w-6 h-6" />
          <p className="font-semibold text-[15px]">Portfolio Overview</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white/10 rounded-2xl py-3 px-1">
            <p className="text-2xl font-bold">{totalProjects}</p>
            <p className="text-[11px] opacity-75 mt-0.5">Projects</p>
          </div>
          <div className="bg-white/10 rounded-2xl py-3 px-1">
            <p className="text-2xl font-bold">{totalSkillStacks}</p>
            <p className="text-[11px] opacity-75 mt-0.5">Stacks</p>
          </div>
          <div className="bg-white/10 rounded-2xl py-3 px-1">
            <p className="text-2xl font-bold">1</p>
            <p className="text-[11px] opacity-75 mt-0.5">Resume</p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Notification pills */}
      <div className="flex flex-col items-center gap-2 w-full px-6 mb-6">
        <div className="w-full bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 pointer-events-none">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
            <img src="/images/safari.png" alt="" className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white text-[13px] font-semibold">Articles</p>
            <p className="text-white/70 text-[12px]">Latest: Trust Analysis in Criminal Investigations</p>
          </div>
        </div>
      </div>

      {/* Unlock hint */}
      <div className="flex flex-col items-center gap-1 pointer-events-none">
        <Lock className="w-5 h-5 text-white opacity-60" />
        <p className="text-white text-[14px] font-medium opacity-75 tracking-wide animate-pulse">
          Swipe up to unlock
        </p>
      </div>
    </div>
  );
};

export default LockScreen;
