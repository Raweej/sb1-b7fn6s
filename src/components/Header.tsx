import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center gap-3 border-l pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}