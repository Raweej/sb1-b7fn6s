import React from 'react';
import { BarChart3, PieChart, LineChart, Download } from 'lucide-react';

const reports = [
  { id: 1, name: 'Financial Summary', type: 'Finance', period: 'Monthly', lastGenerated: '2024-03-15' },
  { id: 2, name: 'Inventory Status', type: 'Inventory', period: 'Weekly', lastGenerated: '2024-03-14' },
  { id: 3, name: 'Employee Attendance', type: 'HR', period: 'Daily', lastGenerated: '2024-03-15' },
  { id: 4, name: 'Procurement Analysis', type: 'Procurement', period: 'Quarterly', lastGenerated: '2024-03-01' },
];

export default function Reports() {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">Generate and view business reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Financial Reports</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">HR Reports</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <LineChart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Operations Reports</p>
              <p className="text-2xl font-bold">32</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{report.name}</h3>
                    <p className="text-sm text-gray-500">{report.type} • {report.period}</p>
                    <p className="text-xs text-gray-400 mt-1">Last generated: {report.lastGenerated}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}