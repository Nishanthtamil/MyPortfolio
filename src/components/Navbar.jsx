import dayjs from "dayjs";
import { Settings } from "lucide-react";
import { navLinks, navIcons } from "#constants/index.js";
import useWindowStore from "#store/windows.js";
import useThemeStore from "#store/themeStore.js";
import useDesktopSettings from "#store/desktopSettings.js";
import { useEffect } from "react";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const { theme, toggleTheme, initTheme } = useThemeStore();
    const togglePanel = useDesktopSettings((s) => s.togglePanel);

    useEffect(() => {
        initTheme();
    }, [initTheme]);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold text-black dark:text-white transition-colors">Nishanth's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p className="text-black dark:text-gray-200 transition-colors">{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="flex items-center gap-2">
                    <li className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}
                            aria-label="Toggle Dark Mode"
                        >
                            <div
                                className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
                            />
                        </button>
                    </li>

                    {/* Desktop settings gear */}
                    <li className="flex items-center">
                        <button
                            type="button"
                            onClick={togglePanel}
                            aria-label="Desktop settings"
                            className="text-black dark:text-white icon-hover"
                        >
                            <Settings size={16} />
                        </button>
                    </li>

                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover dark:invert transition-all" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};

export default Navbar;