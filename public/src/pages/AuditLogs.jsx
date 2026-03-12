import React, { useState } from 'react';
import { Search, Filter, FileText, Shield, AlertTriangle, User, Settings, Trash2, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import { auditLogs } from '../data/mockData';

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch = log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
      (filter === 'system' && log.user === 'System') ||
      (filter === 'admin' && log.user !== 'System');
    
    return matchesSearch && matchesFilter;
  });

  const getActionIcon = (action) => {
    if (action.includes('Blocked') || action.includes('Detected')) {
      return <Shield className="w-4 h-4 text-cybersecurity-red" />;
    }
    if (action.includes('Quarantined')) {
      return <AlertTriangle className="w-4 h-4 text-cybersecurity-yellow" />;
    }
    if (action.includes('Released')) {
      return <CheckCircle className="w-4 h-4 text-cybersecurity-green" />;
    }
    if (action.includes('Settings')) {
      return <Settings className="w-4 h-4 text-cybersecurity-blue" />;
    }
    if (action.includes('Login')) {
      return <User className="w-4 h-4 text-cybersecurity-green" />;
    }
    return <FileText className="w-4 h-4 text-gray-400" />;
  };

  const getActionColor = (action) => {
    if (action.includes('Blocked')) return 'text-cybersecurity-red';
    if (action.includes('Quarantined')) return 'text-cybersecurity-yellow';
    if (action.includes('Released')) return 'text-cybersecurity-green';
    if (action.includes('Detected')) return 'text-cybersecurity-red';
    return 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Audit Logs</h1>
        <p className="text-gray-400 mt-1">Track all security events and administrative actions</p>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search logs by action, user, or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-cybersecurity-darker border border-cybersecurity-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cybersecurity-green/50 transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500 mr-2" />
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-cybersecurity-green/20 text-cybersecurity-green border border-cybersecurity-green/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('system')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'system'
                  ? 'bg-cybersecurity-blue/20 text-cybersecurity-blue border border-cybersecurity-blue/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              System
            </button>
            <button
              onClick={() => setFilter('admin')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'admin'
                  ? 'bg-cybersecurity-yellow/20 text-cybersecurity-yellow border border-cybersecurity-yellow/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              Admin
            </button>
          </div>
        </div>
      </Card>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing <span className="text-white font-medium">{filteredLogs.length}</span> of {auditLogs.length} log entries
        </p>
      </div>

      {/* Audit Logs Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cybersecurity-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Action</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b border-cybersecurity-border/50 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-400 font-mono">
                      {new Date(log.timestamp).toLocaleString()}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className={`flex items-center gap-2 ${getActionColor(log.action)}`}>
                      {getActionIcon(log.action)}
                      <span className="text-sm font-medium">{log.action}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cybersecurity-darker flex items-center justify-center">
                        <User className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-300">{log.user}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-400">{log.details}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AuditLogs;
