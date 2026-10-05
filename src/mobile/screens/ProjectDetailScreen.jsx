import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSGroupedList from '../components/IOSGroupedList.jsx';
import IOSListItem from '../components/IOSListItem.jsx';
import useMobileNavStore from '#store/mobileNav.js';

const ProjectDetailScreen = () => {
  const project = useMobileNavStore((state) => state.screenData);

  if (!project) {
    return (
      <div className="w-full h-full pb-20 overflow-y-auto ios-page">
        <IOSNavBar title="Project" backText="Projects" />
        <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
          No project selected
        </div>
      </div>
    );
  }

  const children = project.children || [];
  const txtFile = children.find((c) => c.fileType === 'txt' || c.description);
  const imgFile = children.find((c) => c.fileType === 'img' || c.imageUrl);
  const urlFiles = children.filter((c) => c.fileType === 'url' || c.href);

  const heroImage = imgFile?.imageUrl || project.image || project.imageUrl;
  const descriptions = Array.isArray(txtFile?.description)
    ? txtFile.description
    : txtFile?.description
    ? [txtFile.description]
    : [];

  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page">
      <IOSNavBar title={project.name} backText="Projects" />

      <div className="pt-4 space-y-6">
        {heroImage && (
          <div className="px-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <img
                src={heroImage}
                alt={project.name}
                className="w-full h-48 object-cover object-top"
              />
            </div>
          </div>
        )}

        {descriptions.length > 0 && (
          <IOSGroupedList header="Overview">
            <div className="p-4 space-y-3 text-[15px] leading-relaxed text-gray-800 dark:text-gray-200">
              {descriptions.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </IOSGroupedList>
        )}

        {urlFiles.length > 0 && (
          <IOSGroupedList header="Links">
            {urlFiles.map((linkItem, index) => (
              <IOSListItem
                key={linkItem.id || index}
                title={linkItem.name}
                subtitle={linkItem.href}
                icon={
                  <img
                    src={linkItem.icon || '/images/safari.png'}
                    alt={linkItem.name}
                    className="w-7 h-7 object-contain"
                  />
                }
                rightText="Open"
                hasChevron
                isLast={index === urlFiles.length - 1}
                onClick={() => window.open(linkItem.href, '_blank', 'noopener,noreferrer')}
              />
            ))}
          </IOSGroupedList>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailScreen;
