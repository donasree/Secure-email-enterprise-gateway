import React from 'react';
import { Mail, ShieldAlert, ShieldCheck, Ban, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import Badge from '../components/Badge';
import { dashboardStats, threatActivity, riskScoreDistribution, threatTypeDistribution, emails } from '../data/mockData';

const StatCard = ({ title, value, change, changeType, icon: Icon, color }) => (
  <Card className="relative overflow-hidden">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
        <div className={`flex items-center gap-1 mt-2 text-sm ${changeType === 'up' ? 'text-cybersecurity-green' : 'text-cybersecurity-red'}`}>
          {changeType === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{change}</span>
          <span className="text-gray-500">vs last week</span>
        </div>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cybersecurity-green/50 to-transparent"></div>
  </Card>
);

const Dashboard = () => {
  const recentThreats = emails.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Emails Processed"
          value={dashboardStats.totalEmails}
          change="+12.5%"
          changeType="up"
          icon={Mail}
          color="bg-gradient-to-br from-cybersecurity-blue to-blue-600"
        />
        <StatCard
          title="Threats Detected"
          value={dashboardStats.threatsDetected}
          change="+8.3%"
          changeType="up"
          icon={ShieldAlert}
          color="bg-gradient-to-br from-cybersecurity-red to-red-600"
        />
        <StatCard
          title="Quarantined Emails"
          value={dashboardStats.quarantinedEmails}
          change="-5.2%"
          changeType="down"
          icon={ShieldCheck}
          color="bg-gradient-to-br from-cybersecurity-yellow to-yellow-600"
        />
        <StatCard
          title="Blocked Emails"
          value={dashboardStats.blockedEmails}
          change="+15.7%"
          changeType="up"
          icon={Ban}
          color="bg-gradient-to-br from-cybersecurity-green to-green-600"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Score Distribution */}
        <Card title="Risk Score Distribution" subtitle="Email risk assessment breakdown">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskScoreDistribution} layout="vertical">
                <XAxis type="number" stroke="#6b7280" fontSize={12} />
                <YAxis dataKey="label" type="category" stroke="#6b7280" fontSize={12} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0d1424',
                    border: '1px solid #1a2332',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="count" fill="#00ff88" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Threat Type Distribution */}
        <Card title="Threat Type Distribution" subtitle="Breakdown by threat category">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={threatTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {threatTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0d1424',
                    border: '1px solid #1a2332',
                    borderRadius: '8px',
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value) => <span className="text-gray-300 text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Threat Activity Table */}
      <Card title="Recent Threat Activity" subtitle="Latest detected threats requiring attention">
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
              </tr>
            </thead>
            <tbody>
              {recentThreats.map((email) => (
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
                            email.riskScore >= 70 ? 'bg-cybersecurity-red' :
                            email.riskScore >= 40 ? 'bg-cybersecurity-yellow' :
                            'bg-cybersecurity-green'
                          }`}
                          style={{ width: `${email.riskScore}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        email.riskScore >= 70 ? 'text-cybersecurity-red' :
                        email.riskScore >= 40 ? 'text-cybersecurity-yellow' :
                        'text-cybersecurity-green'
                      }`}>{email.riskScore}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={email.threatType === 'Phishing' ? 'danger' : email.threatType === 'Spam' ? 'warning' : 'default'}>
                      {email.threatType}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={email.status} />
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

export default Dashboard;
