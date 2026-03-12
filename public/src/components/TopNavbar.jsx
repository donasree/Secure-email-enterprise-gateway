import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Shield, LogOut, User, Settings } from 'lucide-react';

const TopNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: 'High Risk Email Detected', time: '2 min ago', type: 'danger' },
    { id: 2, title: 'New Malware Variant Found', time: '15 min ago', type: 'warning' },
    { id: 3, title: 'Daily Security Report Ready', time: '1 hour ago', type: 'info' },
  ];

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-cybersecurity-card/80 backdrop-blur-md border-b border-cybersecurity-border z-40">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Title */}
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-white">Email Security Dashboard</h2>
        </div>

        {/* Right side - Search, Notifications, Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search emails, threats..."
              className="w-64 h-9 pl-10 pr-4 bg-cybersecurity-darker border border-cybersecurity-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cybersecurity-green/50 transition-colors"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowDropdown(false);
              }}
              className="relative p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cybersecurity-red rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-cybersecurity-card border border-cybersecurity-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 border-b border-cybersecurity-border">
                  <h3 className="text-sm font-semibold text-white">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-4 border-b border-cybersecurity-border hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 mt-2 rounded-full ${
                          notif.type === 'danger' ? 'bg-cybersecurity-red' :
                          notif.type === 'warning' ? 'bg-cybersecurity-yellow' :
                          'bg-cybersecurity-blue'
                        }`}></div>
                        <div>
                          <p className="text-sm text-white">{notif.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-cybersecurity-border">
                  <button className="w-full text-center text-sm text-cybersecurity-green hover:text-cybersecurity-blue transition-colors">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowDropdown(!showDropdown);
                setShowNotifications(false);
              }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cybersecurity-green to-cybersecurity-blue flex items-center justify-center">
                <Shield className="w-4 h-4 text-cybersecurity-dark" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-500">Security Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-14 w-48 bg-cybersecurity-card border border-cybersecurity-border rounded-lg shadow-xl overflow-hidden">
                <div className="py-1">
                  <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <hr className="my-1 border-cybersecurity-border" />
                  <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-cybersecurity-red hover:bg-white/5 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
