import React from 'react';
import '#mobile/styles/mobile.css';
import useMobileNavStore from '#store/mobileNav.js';
import useThemeStore from '#store/themeStore.js';
import useMobileSettingsStore, { wallpapers } from '#store/mobileSettings.js';
import IOSStatusBar from './components/IOSStatusBar.jsx';
import IOSHomeIndicator from './components/IOSHomeIndicator.jsx';
import ControlCenter from './components/ControlCenter.jsx';
import LockScreen from './screens/LockScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import SkillsScreen from './screens/SkillsScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import PortfolioScreen from './screens/PortfolioScreen.jsx';
import ProjectDetailScreen from './screens/ProjectDetailScreen.jsx';
import ArticlesScreen from './screens/ArticlesScreen.jsx';
import GalleryScreen from './screens/GalleryScreen.jsx';
import ResumeScreen from './screens/ResumeScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';
import ThreeBackground from '#components/ThreeBackground.jsx';

const MobileApp = () => {
  const currentScreen = useMobileNavStore(state => state.currentScreen());
  const theme = useThemeStore(state => state.theme);
  const wallpaperId = useMobileSettingsStore(state => state.wallpaperId);

  const isHomeOrLock = currentScreen === 'lock' || currentScreen === 'home';
  const isDarkBg = isHomeOrLock ? true : (theme === 'dark');

  // Resolve wallpaper
  const selectedWallpaper = wallpapers.find(w => w.id === wallpaperId) || wallpapers[0];
  const showThreeBackground = isHomeOrLock && selectedWallpaper.id === 'default';
  const wallpaperStyle = isHomeOrLock && selectedWallpaper.value
    ? { background: selectedWallpaper.value }
    : {};

  const renderScreen = () => {
    switch (currentScreen) {
      case 'lock':         return <LockScreen />;
      case 'home':         return <HomeScreen />;
      case 'skills':       return <SkillsScreen />;
      case 'about':        return <AboutScreen />;
      case 'contact':      return <ContactScreen />;
      case 'portfolio':    return <PortfolioScreen />;
      case 'project-detail': return <ProjectDetailScreen />;
      case 'articles':     return <ArticlesScreen />;
      case 'gallery':      return <GalleryScreen />;
      case 'resume':       return <ResumeScreen />;
      case 'settings':     return <SettingsScreen />;
      default: return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Screen &quot;{currentScreen}&quot; coming soon…</p>
        </div>
      );
    }
  };

  return (
    <div
      className="ios-page overflow-hidden relative text-black dark:text-white"
      style={wallpaperStyle}
    >
      {/* Animated background for default wallpaper on home/lock */}
      {showThreeBackground && <ThreeBackground />}

      {/* Status Bar — pinned to very top, always 44px tall */}
      <div className="absolute top-0 left-0 right-0 z-[90]">
        <IOSStatusBar isDarkBg={isDarkBg} />
      </div>

      {/* Screen content */}
      <main className="w-full h-full relative z-10">
        {renderScreen()}
      </main>

      {/* Home indicator bar at the very bottom */}
      <IOSHomeIndicator isDarkBg={isDarkBg} />

      {/* Control Center overlay */}
      <ControlCenter />
    </div>
  );
};

export default MobileApp;
