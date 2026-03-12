import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import StatusBadge from '../components/StatusBadge';
import { emails } from '../data/mockData';

const EmailDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const email = emails.find((e) => e.id === id);

  if (!email) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white">Email Not Found</h2>
          <p className="text-gray-400 mt-2">The requested email could not be found.</p>
        </div>
      </div>
    );
  }

  const getRiskColor = (score) => {
    if (score <= 20) return 'text-cybersecurity-green';
    if (score <= 60) return 'text-cybersecurity-yellow';
    return 'text-cybersecurity-red';
  };

  const getRiskBg = (score) => {
    if (score <= 20) return 'bg-cybersecurity-green';
    if (score <= 60) return 'bg-cybersecurity-yellow';
    return 'bg-cybersecurity-red';
  };

  const SecurityCheck = ({ label, status }) => {
    const isPass = status === 'Pass';
    return (
      <div className="flex items-center justify-between p-3 bg-cybersecurity-darker rounded-lg">
        <span className="text-sm text-gray-300">{label}</span>
        <div className={`flex items-center gap-2 ${isPass ? 'text-cybersecurity-green' : 'text-cybersecurity-red'}`}>
          {isPass ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
          <span className="text-sm font-medium">{status}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cybersecurity-card border border-cybersecurity-border text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">Email Details</h1>
          <p className="text-gray-400 mt-1">Full analysis of email {email.id}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Email Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Email Header */}
          <Card>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white">{email.subject}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-sm text-white">{email.senderName}</p>
                    <p className="text-xs text-gray-400">{email.sender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Received</p>
                    <p className="text-sm text-gray-300">
                      {new Date(email.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <StatusBadge status={email.status} />
            </div>

            {/* Email Content */}
            <div className="bg-cybersecurity-darker rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-sm text-gray-300 font-sans">
                {email.content}
              </pre>
            </div>
          </Card>

          {/* Extracted URLs */}
          {email.extractedUrls.length > 0 && (
            <Card title="Extracted URLs" subtitle={`${email.extractedUrls.length} URLs found`}>
              <div className="space-y-3">
                {email.extractedUrls.map((url, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-cybersecurity-darker rounded-lg">
                    <div className="flex items-center gap-3">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-300 font-mono break-all">{url.url}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={url.risk === 'High' ? 'danger' : url.risk === 'Medium' ? 'warning' : 'success'}>
                        {url.risk} Risk
                      </Badge>
                      {url.isMalicious && (
                        <Badge variant="danger">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Malicious
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Right Column - Analysis */}
        <div className="space-y-6">
          {/* AI Risk Score */}
          <Card>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">AI Risk Score</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#1a2332"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={email.riskScore > 60 ? '#ff4757' : email.riskScore > 20 ? '#ffd93d' : '#00ff88'}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(email.riskScore / 100) * 352} 352`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-3xl font-bold ${getRiskColor(email.riskScore)}`}>
                    {email.riskScore}%
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className={`text-sm font-medium ${getRiskColor(email.riskScore)}`}>
                {email.riskScore > 60 ? 'High Risk' : email.riskScore > 20 ? 'Medium Risk' : 'Low Risk'}
              </p>
            </div>
          </Card>

          {/* Security Checks */}
          <Card title="Security Checks" subtitle="Email authentication results">
            <div className="space-y-2">
              <SecurityCheck label="SPF Check" status={email.securityChecks.spf} />
              <SecurityCheck label="DKIM Check" status={email.securityChecks.dkim} />
              <SecurityCheck label="DMARC Check" status={email.securityChecks.dmarc} />
              <SecurityCheck label="URL Risk Analysis" status={email.securityChecks.urlRisk} />
              <SecurityCheck label="Sender Reputation" status={email.securityChecks.senderReputation} />
            </div>
          </Card>

          {/* Final Decision */}
          <Card>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Final Decision</h3>
            <div className={`p-4 rounded-lg border ${
              email.status === 'Allowed' ? 'bg-cybersecurity-green/10 border-cybersecurity-green/30' :
              email.status === 'Quarantined' ? 'bg-cybersecurity-yellow/10 border-cybersecurity-yellow/30' :
              'bg-cybersecurity-red/10 border-cybersecurity-red/30'
            }`}>
              <div className="flex items-center gap-3">
                {email.status === 'Allowed' ? (
                  <CheckCircle className="w-6 h-6 text-cybersecurity-green" />
                ) : email.status === 'Quarantined' ? (
                  <AlertTriangle className="w-6 h-6 text-cybersecurity-yellow" />
                ) : (
                  <XCircle className="w-6 h-6 text-cybersecurity-red" />
                )}
                <span className={`text-lg font-semibold ${
                  email.status === 'Allowed' ? 'text-cybersecurity-green' :
                  email.status === 'Quarantined' ? 'text-cybersecurity-yellow' :
                  'text-cybersecurity-red'
                }`}>
                  {email.status}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                This email has been {email.status.toLowerCase()} based on AI analysis and security checks.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
