import React from 'react';

const IOSGroupedList = ({ header, footer, children }) => {
  return (
    <div className="mb-8">
      {header && <p className="px-8 pb-2 text-[13px] text-gray-500 uppercase tracking-wide">{header}</p>}
      <div className="ios-grouped-card">
        {children}
      </div>
      {footer && <p className="px-8 pt-2 text-[13px] text-gray-500">{footer}</p>}
    </div>
  );
};

export default IOSGroupedList;
