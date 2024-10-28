import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Inventory from './pages/Inventory';
import Finance from './pages/Finance';
import Procurement from './pages/Procurement';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/procurement" element={<Procurement />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;