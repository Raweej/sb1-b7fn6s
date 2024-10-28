import React from 'react';
import { 
  Users, 
  Package, 
  DollarSign, 
  ShoppingCart,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const stats = [
  { 
    icon: Users,
    label: 'Total Employees',
    value: '248',
    change: '+12%',
    positive: true
  },
  {
    icon: Package,
    label: 'Inventory Items',
    value: '1,432',
    change: '-3%',
    positive: false
  },
  {
    icon: DollarSign,
    label: 'Revenue',
    value: '$842,314',
    change: '+23%',
    positive: true
  },
  {
    icon: ShoppingCart,
    label: 'Purchase Orders',
    value: '89',
    change: '+7%',
    positive: true
  }
];

const recentActivities = [
  {
    id: 1,
    title: 'New employee onboarded',
    description: 'Sarah Johnson joined as Senior Developer',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'Inventory alert',
    description: 'Product SKU-123 is running low on stock',
    time: '4 hours ago'
  },
  {
    id: 3,
    title: 'Purchase order approved',
    description: 'PO-2024-001 approved by Finance',
    time: '5 hours ago'
  }
];

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
              <span className={`text-sm font-medium flex items-center gap-1 ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="h-4 w-4" />
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Activities</h2>
            <a href="#" className="text-blue-500 text-sm hover:underline">View all</a>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: 'Add Employee' },
              { icon: Package, label: 'New Inventory' },
              { icon: ShoppingCart, label: 'Create PO' },
              { icon: DollarSign, label: 'Add Expense' }
            ].map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <action.icon className="h-6 w-6 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}