import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSGroupedList from '../components/IOSGroupedList.jsx';
import IOSListItem from '../components/IOSListItem.jsx';
import { techStack } from '#constants/index.js';
import { Check } from 'lucide-react';

const SkillsScreen = () => {
  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar title="Skills" backText="Home" />
      
      <div className="pt-6">
        {techStack.map((categoryGroup, index) => (
          <IOSGroupedList key={index} header={categoryGroup.category}>
            {categoryGroup.items.map((item, i) => (
              <IOSListItem 
                key={i}
                title={item}
                icon={<Check className="w-5 h-5 text-[#34C759]" />}
                isLast={i === categoryGroup.items.length - 1}
              />
            ))}
          </IOSGroupedList>
        ))}
        
        <div className="px-8 pb-10 text-center text-[13px] text-gray-500 space-y-1">
          <p>6 of 6 stacks loaded successfully (100%).</p>
          <p>Render time: 6ms.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsScreen;
