import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSGroupedList from '../components/IOSGroupedList.jsx';
import IOSListItem from '../components/IOSListItem.jsx';
import { locations } from '#constants/index.js';
import useMobileNavStore from '#store/mobileNav.js';

const PortfolioScreen = () => {
  const pushScreen = useMobileNavStore((state) => state.pushScreen);
  const projects = locations.work?.children || [];

  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar title="Projects" backText="Home" />

      <div className="pt-6">
        <IOSGroupedList header="Featured Projects">
          {projects.map((project, index) => {
            const txtFile = project.children?.find(
              (c) => c.fileType === 'txt' || c.description
            );
            const subtitle = txtFile?.description?.[0]
              ? `${txtFile.description[0].slice(0, 50)}...`
              : undefined;

            return (
              <IOSListItem
                key={project.id || index}
                title={project.name}
                subtitle={subtitle}
                icon={
                  <img
                    src={project.icon || '/images/folder.png'}
                    alt={project.name}
                    className="w-7 h-7 object-contain"
                  />
                }
                hasChevron
                isLast={index === projects.length - 1}
                onClick={() => pushScreen('project-detail', project)}
              />
            );
          })}
        </IOSGroupedList>

        <div className="px-8 pb-10 text-center text-[13px] text-gray-500 space-y-1">
          <p>{projects.length} projects loaded</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
