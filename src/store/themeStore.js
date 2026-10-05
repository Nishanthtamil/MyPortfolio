import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'dark', // Let's default to dark if the user prefers dark interfaces
  initTheme: () => {
    // If the HTML already has dark class from desktop, sync it. Otherwise, set it.
    if (document.documentElement.classList.contains('dark')) {
      set({ theme: 'dark' });
    } else {
      document.documentElement.classList.add('dark');
      set({ theme: 'dark' });
    }
  },
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),
}));

export default useThemeStore;
