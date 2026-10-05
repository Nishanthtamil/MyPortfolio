import React from 'react';

const IOSAppIcon = ({ id, name, icon, onClick, disabled, badge, sizeClass }) => {
  // Handle paths for both /images/ and /icons/
  const imgSrc = icon.startsWith('/') || icon.startsWith('.') ? icon : `/images/${icon}`;
  const sz = sizeClass || 'w-[60px] h-[60px]';

  return (
    <button
      type="button"
      className={`ios-app-icon active:scale-90 transition-transform duration-200 ${disabled ? 'opacity-40' : ''}`}
      onClick={() => !disabled && onClick(id)}
    >
      <div className="relative">
        <img
          src={imgSrc}
          alt={name || id}
          className={`${sz} rounded-[13.5px] shadow-md object-cover`}
        />
        {/* Badge */}
        {badge && (
          <div
            className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1
              bg-red-500 rounded-full flex items-center justify-center
              text-white text-[10px] font-bold leading-none shadow-md z-10"
          >
            {badge}
          </div>
        )}
      </div>
      {name && (
        <span className="text-[11px] text-white text-center font-medium block mt-1 leading-tight max-w-[68px] truncate"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          {name}
        </span>
      )}
    </button>
  );
};

export default IOSAppIcon;
