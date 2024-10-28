import React from 'react';
import { User, Building, Bell, Shield, Globe, Palette } from 'lucide-react';

const settingsSections = [
  {
    id: 'profile',
    icon: User,
    title: 'Profile Settings',
    description: 'Manage your account information and preferences'
  },
  {
    id: 'company',
    icon: Building,
    title: 'Company Information',
    description: 'Update your company details and business information'
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Notifications',
    description: 'Configure your notification preferences'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    description: 'Manage security settings and permissions'
  },
  {
    id: 'localization',
    icon: Globe,
    title: 'Localization',
    description: 'Set your language and regional preferences'
  },
  {
    id: 'appearance',
    icon: Palette,
    title: 'Appearance',
    description: 'Customize the look and feel of your dashboard'
  }
];

export default function Settings() {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your system preferences and configurations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <div key={section.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Configure →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}