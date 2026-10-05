import { X, Check } from "lucide-react";
import useDesktopSettings, {
    WALLPAPER_OPTIONS,
    ACCENT_COLORS,
} from "#store/desktopSettings.js";

const Toggle = ({ value, onChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus:outline-none ${value ? "bg-green-500" : "bg-gray-500/60"
            }`}
    >
        <span
            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${value ? "translate-x-5" : "translate-x-0"
                }`}
        />
    </button>
);

const Section = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{title}</h3>
        {children}
    </div>
);

const DesktopSettingsPanel = () => {
    const {
        isPanelOpen, closePanel,
        wallpaper, setWallpaper,
        accentColor, setAccentColor,
        windowOpacity, setWindowOpacity,
        animationsEnabled, toggleAnimations,
        dockMagnification, toggleDockMagnification,
    } = useDesktopSettings();

    return (
        <>
            {/* Click-outside backdrop */}
            {isPanelOpen && (
                <div className="fixed inset-0 z-[9998]" onClick={closePanel} />
            )}

            <aside
                className={`fixed right-3 top-10 bottom-20 z-[9999] w-72 overflow-y-auto rounded-2xl border border-white/10 bg-black/60 p-5 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isPanelOpen ? "translate-x-0" : "translate-x-[110%]"
                    }`}
                aria-hidden={!isPanelOpen}
            >
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Desktop</h2>
                    <button type="button" onClick={closePanel} aria-label="Close settings">
                        <X size={18} />
                    </button>
                </div>

                <Section title="Wallpaper">
                    <div className="grid grid-cols-3 gap-2">
                        {WALLPAPER_OPTIONS.map((wp) => (
                            <button
                                key={wp.id}
                                type="button"
                                onClick={() => setWallpaper(wp.id)}
                                className={`relative h-14 overflow-hidden rounded-lg border-2 ${wallpaper === wp.id ? "border-white" : "border-transparent"}`}
                                style={{ background: wp.gradient || "linear-gradient(135deg,#050816,#3b82f6,#8b5cf6)" }}
                            >
                                <span className="absolute bottom-0.5 inset-x-0 text-center text-[9px] font-semibold drop-shadow">
                                    {wp.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </Section>

                <Section title="Accent Color">
                    <div className="flex gap-3">
                        {Object.entries(ACCENT_COLORS).map(([id, color]) => (
                            <button
                                key={id}
                                type="button"
                                title={id}
                                onClick={() => setAccentColor(id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full"
                                style={{
                                    backgroundColor: color,
                                    boxShadow: accentColor === id ? `0 0 0 2px #000, 0 0 0 4px ${color}` : "none",
                                }}
                            >
                                {accentColor === id && <Check size={14} strokeWidth={3} />}
                            </button>
                        ))}
                    </div>
                </Section>

                <Section title="Window Opacity">
                    <input
                        type="range"
                        min="0.7"
                        max="1"
                        step="0.01"
                        value={windowOpacity}
                        onChange={(e) => setWindowOpacity(e.target.value)}
                        className="w-full"
                        style={{ accentColor: "var(--accent)" }}
                    />
                    <p className="mt-1 text-right text-xs text-gray-400">{Math.round(windowOpacity * 100)}%</p>
                </Section>

                <Section title="Behavior">
                    <div className="flex items-center justify-between py-1.5">
                        <span className="text-sm">Animations</span>
                        <Toggle value={animationsEnabled} onChange={toggleAnimations} />
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                        <span className="text-sm">Dock magnification</span>
                        <Toggle value={dockMagnification} onChange={toggleDockMagnification} />
                    </div>
                </Section>
            </aside>
        </>
    );
};

export default DesktopSettingsPanel;