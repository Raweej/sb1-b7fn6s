import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  Settings,
  BarChart3,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'HR & Employees', path: '/employees' },
  { icon: Package, label: 'Inventory', path: '/inventory' },
  { icon: DollarSign, label: 'Finance', path: '/finance' },
  { icon: ShoppingCart, label: 'Procurement', path: '/procurement' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Enterprise ERP</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 transition-colors ${
                  isActive ? 'bg-gray-800 text-white' : ''
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}