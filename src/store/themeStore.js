import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: 'dark', // default on first visit only

      // Applies the CURRENT theme. Never overwrites it.
      initTheme: () => applyTheme(get().theme),

      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },

      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        set({ theme: next });
      },
    }),
    {
      name: 'theme-storage', // localStorage key
      // Re-apply the saved theme as soon as it's loaded from storage
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      },
    }
  )
);

export default useThemeStore;