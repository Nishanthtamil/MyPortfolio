import React from 'react';
import IOSNavBar from '../components/IOSNavBar.jsx';
import IOSGroupedList from '../components/IOSGroupedList.jsx';
import IOSListItem from '../components/IOSListItem.jsx';
import { socials } from '#constants/index.js';
import { Mail } from 'lucide-react';

const ContactScreen = () => {
  return (
    <div className="w-full h-full pb-20 overflow-y-auto ios-page bg-[#F2F2F7] dark:bg-black">
      <IOSNavBar title="Contact" backText="Home" />
      
      <div className="flex flex-col items-center pt-8 pb-6 px-4">
        <img 
          src="/images/nishanth.jpg" 
          alt="Nishanth" 
          className="w-24 h-24 rounded-full object-cover shadow-md mb-4 border-2 border-white dark:border-gray-800"
        />
        <h1 className="text-2xl font-bold text-black dark:text-white">Nishanth</h1>
        <p className="text-[15px] text-gray-500 mt-1">AI & Web Developer</p>
      </div>
      
      <div className="mt-2">
        <IOSGroupedList header="Email">
          <IOSListItem 
            title="nishanthtamil72@gmail.com"
            icon={<Mail className="w-5 h-5 text-[#007AFF]" />}
            onClick={() => window.location.href = 'mailto:nishanthtamil72@gmail.com'}
            hasChevron
            isLast
          />
        </IOSGroupedList>

        <IOSGroupedList header="Social Links">
          {socials.map((social, index) => (
            <IOSListItem 
              key={social.id}
              title={social.text}
              icon={
                <div 
                  className="w-7 h-7 rounded-md flex items-center justify-center" 
                  style={{ backgroundColor: social.bg }}
                >
                  <img src={social.icon} alt={social.text} className="w-4 h-4" />
                </div>
              }
              onClick={() => window.open(social.link, '_blank')}
              hasChevron
              isLast={index === socials.length - 1}
            />
          ))}
        </IOSGroupedList>
      </div>
    </div>
  );
};

export default ContactScreen;
