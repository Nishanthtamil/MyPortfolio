import { create } from "zustand";
import { persist } from "zustand/middleware";

export const WALLPAPERS = ["aurora", "midnight", "sunset", "ocean", "forest", "galaxy"];

export const ACCENT_COLORS = {
    blue: "#3b82f6",
    purple: "#a855f7",
    pink: "#ec4899",
    orange: "#f97316",
    green: "#22c55e",
    red: "#ef4444",
};

const useDesktopSettings = create(
    persist(
        (set) => ({
            // persisted settings
            wallpaper: "aurora", // "aurora" = the default ThreeBackground
            accentColor: "blue",
            windowOpacity: 1, // 0.7 - 1.0
            animationsEnabled: true,
            dockMagnification: true,

            // panel visibility (not persisted, see partialize below)
            isPanelOpen: false,

            setWallpaper: (wallpaper) => set({ wallpaper }),
            setAccentColor: (accentColor) => set({ accentColor }),
            setWindowOpacity: (v) =>
                set({ windowOpacity: Math.min(1, Math.max(0.7, Number(v))) }),
            toggleAnimations: () =>
                set((s) => ({ animationsEnabled: !s.animationsEnabled })),
            toggleDockMagnification: () =>
                set((s) => ({ dockMagnification: !s.dockMagnification })),

            openPanel: () => set({ isPanelOpen: true }),
            closePanel: () => set({ isPanelOpen: false }),
            togglePanel: () => set((s) => ({ isPanelOpen: !s.isPanelOpen })),
        }),
        {
            name: "desktop-settings", // localStorage key
            partialize: (s) => ({
                wallpaper: s.wallpaper,
                accentColor: s.accentColor,
                windowOpacity: s.windowOpacity,
                animationsEnabled: s.animationsEnabled,
                dockMagnification: s.dockMagnification,
            }),
        }
    )
);

export default useDesktopSettings;