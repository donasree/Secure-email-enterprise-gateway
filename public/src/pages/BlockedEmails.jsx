import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Ban, AlertCircle } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import StatusBadge from '../components/StatusBadge';
import { blockedEmails } from '../data/mockData';

const BlockedEmails = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Blocked Emails</h1>
          <p className="text-gray-400 mt-1">View emails that have been automatically blocked</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-cybersecurity-red/10 border border-cybersecurity-red/30 rounded-lg">
          <Ban className="w-5 h-5 text-cybersecurity-red" />
          <span className="text-cybersecurity-red font-medium">{blockedEmails.length} Emails Blocked</span>
        </div>
      </div>

      {/* Blocked Emails Table */}
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
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Blocked Date</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blockedEmails.map((email) => (
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
                      <div className="w-16 h-2 bg-cybersecurity-darker rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            email.riskScore > 60 ? 'bg-cybersecurity-red' :
                            email.riskScore > 20 ? 'bg-cybersecurity-yellow' :
                            'bg-cybersecurity-green'
                          }`}
                          style={{ width: `${email.riskScore}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        email.riskScore > 60 ? 'text-cybersecurity-red' :
                        email.riskScore > 20 ? 'text-cybersecurity-yellow' :
                        'text-cybersecurity-green'
                      }`}>{email.riskScore}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="danger">{email.threatType}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-400">
                      {new Date(email.timestamp).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => navigate(`/email/${email.id}`)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cybersecurity-blue/10 text-cybersecurity-blue text-sm hover:bg-cybersecurity-blue/20 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
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

export default BlockedEmails;
