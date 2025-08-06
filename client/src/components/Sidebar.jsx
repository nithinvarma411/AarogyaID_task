import React, { useState } from 'react';
import { Home, Boxes, Cpu, FilePlus, FileSearch, Scale, Shield } from 'lucide-react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: Home },
    { icon: Boxes },
    { icon: Cpu },
    { icon: FilePlus },
    { icon: FileSearch },
    { icon: Scale },
    { icon: Shield },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      <div className="w-8 h-8 bg-red-500 rounded mb-8"></div>
      {menuItems.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg mb-2 flex items-center justify-center ${
              isActive ? 'bg-red-50 text-red-500' : 'text-gray-400 hover:bg-gray-50'
            }`}
            onClick={() => handleClick(index)}
            aria-pressed={isActive}
          >
            <item.icon size={20} />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
