import React from 'react';
import { ChevronRight } from 'lucide-react';

const IOSListItem = ({ icon, title, subtitle, rightText, hasChevron, onClick, isLast }) => {
  const Wrapper = onClick ? 'button' : 'div';
  return (
    <Wrapper 
      className={`w-full flex items-center bg-transparent active:bg-gray-100 dark:active:bg-gray-800 transition-colors ${onClick ? 'cursor-pointer text-left' : ''}`}
      onClick={onClick}
    >
      {icon && <div className="pl-4 py-2.5 flex-none">{icon}</div>}
      
      <div className={`flex-1 flex items-center justify-between py-2.5 pr-4 ${!isLast ? 'ios-separator' : 'pl-4'}`}>
        <div className="flex flex-col">
          <span className="text-[17px]">{title}</span>
          {subtitle && <span className="text-[15px] text-gray-500">{subtitle}</span>}
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-400">
          {rightText && <span className="text-[17px]">{rightText}</span>}
          {hasChevron && <ChevronRight className="w-5 h-5" />}
        </div>
      </div>
    </Wrapper>
  );
};

export default IOSListItem;
