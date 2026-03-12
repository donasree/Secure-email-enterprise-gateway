import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Filter, Search } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import StatusBadge from '../components/StatusBadge';
import { emails } from '../data/mockData';

const IncomingEmails = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmails = emails.filter((email) => {
    const matchesFilter = filter === 'all' || 
      (filter === 'low' && email.riskScore <= 20) ||
      (filter === 'medium' && email.riskScore > 20 && email.riskScore <= 60) ||
      (filter === 'high' && email.riskScore > 60);
    
    const matchesSearch = email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const getRiskLevel = (score) => {
    if (score <= 20) return { level: 'Low', color: 'text-cybersecurity-green' };
    if (score <= 60) return { level: 'Medium', color: 'text-cybersecurity-yellow' };
    return { level: 'High', color: 'text-cybersecurity-red' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Incoming Emails</h1>
          <p className="text-gray-400 mt-1">Monitor and manage all incoming email traffic</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by ID, sender, or subject..."
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
              onClick={() => setFilter('low')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'low'
                  ? 'bg-cybersecurity-green/20 text-cybersecurity-green border border-cybersecurity-green/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              Low Risk
            </button>
            <button
              onClick={() => setFilter('medium')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'medium'
                  ? 'bg-cybersecurity-yellow/20 text-cybersecurity-yellow border border-cybersecurity-yellow/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              Medium Risk
            </button>
            <button
              onClick={() => setFilter('high')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'high'
                  ? 'bg-cybersecurity-red/20 text-cybersecurity-red border border-cybersecurity-red/30'
                  : 'bg-cybersecurity-darker text-gray-400 border border-cybersecurity-border hover:text-white'
              }`}
            >
              High Risk
            </button>
          </div>
        </div>
      </Card>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing <span className="text-white font-medium">{filteredEmails.length}</span> of {emails.length} emails
        </p>
      </div>

      {/* Emails Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cybersecurity-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email ID</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sender</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Risk Score</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Threat Type</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmails.map((email) => {
                const risk = getRiskLevel(email.riskScore);
                return (
                  <tr key={email.id} className="border-b border-cybersecurity-border/50 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-sm text-cybersecurity-blue font-mono">{email.id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm text-white">{email.senderName}</p>
                        <p className="text-xs text-gray-500">{email.sender}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-300">{email.subject}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-cybersecurity-darker rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              email.riskScore > 60 ? 'bg-cybersecurity-red' :
                              email.riskScore > 20 ? 'bg-cybersecurity-yellow' :
                              'bg-cybersecurity-green'
                            }`}
                            style={{ width: `${email.riskScore}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${risk.color}`}>
                          {email.riskScore}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge>{email.threatType}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={email.status} />
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => navigate(`/email/${email.id}`)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cybersecurity-blue/10 text-cybersecurity-blue text-sm hover:bg-cybersecurity-blue/20 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default IncomingEmails;
