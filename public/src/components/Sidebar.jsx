import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Mail,
  ShieldAlert,
  Ban,
  BarChart3,
  FileText,
  Settings,
  Shield
} from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/emails', icon: Mail, label: 'Incoming Emails' },
  { path: '/quarantined', icon: ShieldAlert, label: 'Quarantined Emails' },
  { path: '/blocked', icon: Ban, label: 'Blocked Emails' },
  { path: '/analytics', icon: BarChart3, label: 'Threat Analytics' },
  { path: '/audit-logs', icon: FileText, label: 'Audit Logs' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-cybersecurity-card border-r border-cybersecurity-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-cybersecurity-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cybersecurity-green to-cybersecurity-blue flex items-center justify-center">
            <Shield className="w-6 h-6 text-cybersecurity-dark" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">Secure Gateway</h1>
            <p className="text-xs text-gray-500">Email Security</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cybersecurity-green/10 text-cybersecurity-green border-l-2 border-cybersecurity-green'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-cybersecurity-border">
        <div className="bg-cybersecurity-darker rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cybersecurity-green animate-pulse"></div>
            <span className="text-sm text-cybersecurity-green font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
