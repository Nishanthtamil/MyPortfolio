import React from 'react';
import { dockApps } from '#constants/index.js';
import IOSAppIcon from './IOSAppIcon.jsx';

const IOSBottomDock = ({ onAppClick }) => {
  const pinnedApps = dockApps.filter(app => app.canOpen).slice(0, 4);

  return (
    <div
      className="absolute left-[4%] w-[92%] ios-glass rounded-[28px] z-40 flex justify-around items-center"
      style={{ bottom: 'max(env(safe-area-inset-bottom, 12px) + 8px, 20px)', padding: '12px 16px' }}
    >
      {pinnedApps.map(app => (
        <IOSAppIcon
          key={app.id}
          id={app.id}
          name=""
          icon={`/images/${app.icon}`}
          onClick={onAppClick}
        />
      ))}
    </div>
  );
};

export default IOSBottomDock;
