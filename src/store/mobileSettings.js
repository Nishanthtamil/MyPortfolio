import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const wallpapers = [
  { id: 'default', label: 'Aurora', value: null }, // uses ThreeBackground
  { id: 'midnight', label: 'Midnight', value: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' },
  { id: 'sunset', label: 'Sunset', value: 'linear-gradient(135deg, #f093fb, #f5576c, #fda085)' },
  { id: 'ocean', label: 'Ocean', value: 'linear-gradient(135deg, #667eea, #764ba2, #00d2ff)' },
  { id: 'forest', label: 'Forest', value: 'linear-gradient(135deg, #134e5e, #71b280, #1a1a2e)' },
  { id: 'fire', label: 'Fire', value: 'linear-gradient(135deg, #f12711, #f5af19, #f7971e)' },
  { id: 'galaxy', label: 'Galaxy', value: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)' },
];

const accentColors = [
  { id: 'blue', label: 'Blue', value: '#007AFF' },
  { id: 'purple', label: 'Purple', value: '#AF52DE' },
  { id: 'pink', label: 'Pink', value: '#FF2D55' },
  { id: 'orange', label: 'Orange', value: '#FF9500' },
  { id: 'green', label: 'Green', value: '#34C759' },
  { id: 'teal', label: 'Teal', value: '#5AC8FA' },
  { id: 'red', label: 'Red', value: '#FF3B30' },
];

const useMobileSettingsStore = create(
  persist(
    (set) => ({
      wallpaperId: 'default',
      accentColorId: 'blue',
      iconSize: 'medium',    // 'small' | 'medium' | 'large'
      showLabels: true,
      hapticFeedback: true,

      setWallpaper: (id) => set({ wallpaperId: id }),
      setAccentColor: (id) => set({ accentColorId: id }),
      setIconSize: (size) => set({ iconSize: size }),
      setShowLabels: (v) => set({ showLabels: v }),
      setHapticFeedback: (v) => set({ hapticFeedback: v }),

      getWallpaper: function () {
        return wallpapers.find(w => w.id === this.wallpaperId) || wallpapers[0];
      },
      getAccentColor: function () {
        return accentColors.find(c => c.id === this.accentColorId) || accentColors[0];
      },
    }),
    { name: 'ios-settings' }
  )
);

export { wallpapers, accentColors };
export default useMobileSettingsStore;
