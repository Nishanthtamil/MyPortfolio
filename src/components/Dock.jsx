import { useRef } from "react";
import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/windows.js";
import useDesktopSettings from "#store/desktopSettings.js";

const Dock = () => {
  const { openWindow, closeWindow, toggleMinimize, windows } = useWindowStore();
  const { dockMagnification } = useDesktopSettings();
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX) => {
      if (!dockMagnification) return;
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, [dockMagnification]);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const win = windows[app.id];

    if (win.isOpen && win.isMinimized) {
      // Restore minimized window
      toggleMinimize(app.id);
    } else if (win.isOpen && !win.isMinimized) {
      // Close the window
      closeWindow(app.id);
    } else {
      // Open the window
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => {
          const win = windows[id];
          const isOpen = win?.isOpen;
          const isMinimized = win?.isMinimized;

          return (
            <div key={id} className="relative flex flex-col items-center gap-0.5">
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, canOpen })}
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  loading="lazy"
                  className={canOpen ? '' : 'opacity-60'}
                />
              </button>
              {/* macOS-style indicator dot */}
              <span
                className={`w-1 h-1 rounded-full transition-opacity duration-300 ${isOpen
                  ? isMinimized
                    ? 'opacity-50 bg-white shadow-[0_0_4px_1px_rgba(255,255,255,0.8)]'
                    : 'opacity-100 bg-white shadow-[0_0_4px_1px_rgba(255,255,255,0.8)]'
                  : 'opacity-0 bg-transparent'
                  }`}
              />
            </div>
          );
        })}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;