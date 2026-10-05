import React, { useEffect } from 'react';
import { dockApps } from '#constants/index.js';
import { locations } from '#constants/index.js';
import IOSAppIcon from '../components/IOSAppIcon.jsx';
import IOSBottomDock from '../components/IOSBottomDock.jsx';
import useMobileNavStore from '#store/mobileNav.js';
import useThemeStore from '#store/themeStore.js';
import useMobileSettingsStore from '#store/mobileSettings.js';

// Total project count from constants
const totalProjects = locations.work?.children?.length ?? 0;

const HomeScreen = () => {
  const pushScreen = useMobileNavStore(state => state.pushScreen);
  const { initTheme } = useThemeStore();
  const showLabels = useMobileSettingsStore(state => state.showLabels);
  const iconSize = useMobileSettingsStore(state => state.iconSize);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  const handleAppClick = (appId) => {
    const screenMap = {
      finder: 'portfolio',
      safari: 'articles',
      photos: 'gallery',
      contact: 'contact',
      terminal: 'skills',
      resume: 'resume',
      about: 'about',
      settings: 'settings',
    };
    if (screenMap[appId]) {
      pushScreen(screenMap[appId]);
    }
  };

  const appLabelMap = {
    finder: 'Portfolio',
    safari: 'Articles',
    photos: 'Gallery',
    contact: 'Contact',
    terminal: 'Skills',
    trash: 'Archive',
    resume: 'Resume',
    about: 'About Me',
    settings: 'Settings',
  };

  // Badge counts — show real total for finder
  const badgeMap = {
    finder: String(totalProjects),
  };

  const allApps = [
    ...dockApps,
    { id: 'resume', name: 'Resume', icon: 'pdf.png', canOpen: true },
    { id: 'about', name: 'About Me', icon: 'info.svg', canOpen: true },
    { id: 'settings', name: 'Settings', icon: 'mode.svg', canOpen: true },
  ];

  const iconSizeClass = {
    small: 'w-[52px] h-[52px]',
    medium: 'w-[60px] h-[60px]',
    large: 'w-[72px] h-[72px]',
  }[iconSize] || 'w-[60px] h-[60px]';

  return (
    <div className="w-full h-full pt-[52px] px-4 relative">
      {/* App grid — starts below status bar */}
      <div className="grid grid-cols-4 gap-y-7 gap-x-2 mt-4 pb-40">
        {allApps.map(app => (
          <IOSAppIcon
            key={app.id}
            id={app.id}
            name={showLabels ? (appLabelMap[app.id] || app.name) : ''}
            icon={app.icon.startsWith('/') ? app.icon : app.icon.endsWith('.svg') ? `/icons/${app.icon}` : `/images/${app.icon}`}
            disabled={!app.canOpen}
            onClick={handleAppClick}
            badge={badgeMap[app.id]}
            sizeClass={iconSizeClass}
          />
        ))}
      </div>

      {/* Page indicator dots */}
      <div className="absolute bottom-[130px] w-full left-0 flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white opacity-100 shadow-sm" />
      </div>

      <IOSBottomDock onAppClick={handleAppClick} />
    </div>
  );
};

export default HomeScreen;
