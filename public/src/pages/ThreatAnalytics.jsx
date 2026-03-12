import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import { threatsOverTime, topAttackDomains, threatTypeDistribution } from '../data/mockData';

const ThreatAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Threat Analytics</h1>
        <p className="text-gray-400 mt-1">Comprehensive threat intelligence and attack pattern analysis</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Total Threats (14d)</p>
            <p className="text-3xl font-bold text-cybersecurity-red">2,341</p>
            <p className="text-xs text-cybersecurity-green mt-1">+8.3% vs previous period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Phishing Attacks</p>
            <p className="text-3xl font-bold text-cybersecurity-yellow">1,054</p>
            <p className="text-xs text-cybersecurity-red mt-1">+12.5% vs previous period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Malware Detections</p>
            <p className="text-3xl font-bold text-orange-400">352</p>
            <p className="text-xs text-cybersecurity-green mt-1">-3.2% vs previous period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">BEC Attempts</p>
            <p className="text-3xl font-bold text-purple-400">187</p>
            <p className="text-xs text-cybersecurity-red mt-1">+5.7% vs previous period</p>
          </div>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threats Over Time */}
        <Card title="Threats Over Time" subtitle="Daily threat detection trends (14 days)">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={threatsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0d1424',
                    border: '1px solid #1a2332',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="phishing" name="Phishing" stroke="#ff4757" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="malware" name="Malware" stroke="#ff6b81" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="spam" name="Spam" stroke="#ffd93d" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Top Attack Domains */}
        <Card title="Top Attack Domains" subtitle="Most frequently used malicious domains">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topAttackDomains} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis type="number" stroke="#6b7280" fontSize={12} />
                <YAxis dataKey="domain" type="category" stroke="#6b7280" fontSize={11} width={150} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0d1424',
                    border: '1px solid #1a2332',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="attacks" name="Attack Count" fill="#ff4757" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Threat Distribution */}
      <Card title="Threat Distribution" subtitle="Breakdown by threat category">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={threatTypeDistribution}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
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
                verticalAlign="middle"
                align="right"
                layout="vertical"
                formatter={(value) => <span className="text-gray-300 text-sm">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ThreatAnalytics;
