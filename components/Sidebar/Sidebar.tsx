// components/Sidebar.tsx
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('isOpen -> ', isOpen)
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-0 left-0 h-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
         transition-transform duration-300 ease-in-out w-64 p-4`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white mb-4"
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li className="py-2">Dashboard</li>
          <li className="py-2">Profile</li>
          <li className="py-2">Settings</li>
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-10 bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </div>
  );
}
