import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSGroupedList from '../components/IOSGroupedList.jsx';
import useMobileSettingsStore, { wallpapers, accentColors } from '#store/mobileSettings.js';
import useThemeStore from '#store/themeStore.js';
import { Check, Sun, Moon, Type, Grid3x3, Vibrate } from 'lucide-react';

const SettingRow = ({ label, children }) => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(60,60,67,0.18)] dark:border-[rgba(84,84,88,0.5)] last:border-0">
    <span className="text-[17px] text-black dark:text-white">{label}</span>
    {children}
  </div>
);

const IOSToggle = ({ value, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!value)}
    className={`relative inline-flex h-[31px] w-[51px] items-center rounded-full transition-colors duration-200 focus:outline-none ${value ? 'bg-[#34C759]' : 'bg-[#E5E5EA] dark:bg-[#39393D]'}`}
  >
    <span
      className={`inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-md transition-transform duration-200 ${value ? 'translate-x-[22px]' : 'translate-x-[2px]'}`}
    />
  </button>
);

const SettingsScreen = () => {
  const {
    wallpaperId, setWallpaper,
    accentColorId, setAccentColor,
    iconSize, setIconSize,
    showLabels, setShowLabels,
    hapticFeedback, setHapticFeedback,
  } = useMobileSettingsStore();

  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="w-full h-full pb-24 overflow-y-auto ios-page bg-[#F2F2F7] dark:bg-black">
      <IOSNavBar title="Settings" backText="Home" />

      {/* Appearance */}
      <div className="pt-6">
        <IOSGroupedList header="Appearance">
          {/* Dark Mode */}
          <SettingRow label={theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}>
            <IOSToggle value={theme === 'dark'} onChange={() => toggleTheme()} />
          </SettingRow>
          {/* Show app labels */}
          <SettingRow label="Show App Labels">
            <IOSToggle value={showLabels} onChange={setShowLabels} />
          </SettingRow>
        </IOSGroupedList>

        {/* Wallpaper */}
        <IOSGroupedList header="Wallpaper">
          <div className="px-4 py-4 flex flex-wrap gap-3">
            {wallpapers.map(wp => (
              <button
                key={wp.id}
                type="button"
                onClick={() => setWallpaper(wp.id)}
                className={`relative w-[68px] h-[100px] rounded-xl overflow-hidden border-2 transition-all duration-200 ${wallpaperId === wp.id ? 'border-[#007AFF] scale-105' : 'border-transparent'}`}
                style={wp.value ? { background: wp.value } : { background: 'linear-gradient(135deg, #1a1a3e, #3b82f6, #8b5cf6)' }}
              >
                {wallpaperId === wp.id && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                )}
                <span className="absolute bottom-1 left-0 right-0 text-center text-white text-[9px] font-semibold leading-tight px-1"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                  {wp.label}
                </span>
              </button>
            ))}
          </div>
        </IOSGroupedList>

        {/* Accent Color */}
        <IOSGroupedList header="Accent Color">
          <div className="px-4 py-4 flex flex-wrap gap-3">
            {accentColors.map(ac => (
              <button
                key={ac.id}
                type="button"
                onClick={() => setAccentColor(ac.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${accentColorId === ac.id ? 'scale-110' : 'border-transparent'}`}
                style={{
                  backgroundColor: ac.value,
                  borderColor: accentColorId === ac.id ? 'white' : 'transparent',
                  boxShadow: accentColorId === ac.id ? `0 0 0 3px ${ac.value}` : 'none',
                }}
                title={ac.label}
              >
                {accentColorId === ac.id && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </button>
            ))}
          </div>
          <div className="px-4 pb-3 text-[13px] text-gray-500">
            Selected: <span className="font-semibold text-black dark:text-white">{accentColors.find(a => a.id === accentColorId)?.label}</span>
          </div>
        </IOSGroupedList>

        {/* Icon Size */}
        <IOSGroupedList header="Icon Size">
          {[
            { id: 'small', label: 'Small', sub: '52 × 52 pt' },
            { id: 'medium', label: 'Medium', sub: '60 × 60 pt' },
            { id: 'large', label: 'Large', sub: '72 × 72 pt' },
          ].map(opt => (
            <SettingRow key={opt.id} label={opt.label}>
              <div className="flex items-center gap-3">
                <span className="text-[13px] text-gray-500">{opt.sub}</span>
                {iconSize === opt.id && <Check className="w-5 h-5 text-[#007AFF]" />}
              </div>
            </SettingRow>
          ))}
          {/* Tap-to-select hack using separate buttons below each row */}
          <div className="flex justify-around px-4 pb-3 pt-1 gap-2">
            {[
              { id: 'small', px: '52px' },
              { id: 'medium', px: '60px' },
              { id: 'large', px: '72px' },
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setIconSize(opt.id)}
                className={`flex-1 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 ${iconSize === opt.id ? 'bg-[#007AFF] text-white' : 'bg-[#E5E5EA] dark:bg-[#39393D] text-black dark:text-white'}`}
              >
                {opt.id.charAt(0).toUpperCase() + opt.id.slice(1)}
              </button>
            ))}
          </div>
        </IOSGroupedList>

        {/* Accessibility */}
        <IOSGroupedList header="Accessibility">
          <SettingRow label="Haptic Feedback">
            <IOSToggle value={hapticFeedback} onChange={setHapticFeedback} />
          </SettingRow>
        </IOSGroupedList>

        {/* About */}
        <IOSGroupedList header="About">
          <SettingRow label="Portfolio Version">
            <span className="text-[15px] text-gray-500">1.0.0</span>
          </SettingRow>
          <SettingRow label="Developer">
            <span className="text-[15px] text-gray-500">Nishanth A</span>
          </SettingRow>
        </IOSGroupedList>

        <p className="text-center text-[12px] text-gray-400 px-8 pb-6 mt-2 leading-relaxed">
          Settings are saved automatically and persist across sessions.
        </p>
      </div>
    </div>
  );
};

export default SettingsScreen;
