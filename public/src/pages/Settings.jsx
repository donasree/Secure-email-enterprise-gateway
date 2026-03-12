import React, { useState } from 'react';
import { Save, Shield, Mail, Bell, Database, Key, Globe, RefreshCw } from 'lucide-react';
import Card from '../components/Card';

const Settings = () => {
  const [settings, setSettings] = useState({
    // Email Security Settings
    spfEnabled: true,
    dkimEnabled: true,
    dmarcEnabled: true,
    urlScanningEnabled: true,
    attachmentScanningEnabled: true,
    
    // Threat Detection
    aiDetectionEnabled: true,
    threatIntelligenceEnabled: true,
    
    // Notifications
    emailNotifications: true,
    slackNotifications: false,
    dailyDigest: true,
    
    // Quarantine Settings
    autoQuarantineHighRisk: true,
    autoBlockCritical: true,
    quarantineRetentionDays: 30,
    
    // Scanning
    scanDepth: 'deep',
    sandboxEnabled: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-cybersecurity-green' : 'bg-gray-600'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Configure email security policies and preferences</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cybersecurity-green/20 text-cybersecurity-green rounded-lg hover:bg-cybersecurity-green/30 transition-colors">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email Security Settings */}
        <Card title="Email Security" subtitle="Configure email authentication and scanning">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cybersecurity-green" />
                <div>
                  <p className="text-sm font-medium text-white">SPF Verification</p>
                  <p className="text-xs text-gray-500">Validate sender's SPF record</p>
                </div>
              </div>
              <Toggle enabled={settings.spfEnabled} onChange={() => handleToggle('spfEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-cybersecurity-blue" />
                <div>
                  <p className="text-sm font-medium text-white">DKIM Verification</p>
                  <p className="text-xs text-gray-500">Validate email DKIM signature</p>
                </div>
              </div>
              <Toggle enabled={settings.dkimEnabled} onChange={() => handleToggle('dkimEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cybersecurity-yellow" />
                <div>
                  <p className="text-sm font-medium text-white">DMARC Policy</p>
                  <p className="text-xs text-gray-500">Enforce DMARC policy</p>
                </div>
              </div>
              <Toggle enabled={settings.dmarcEnabled} onChange={() => handleToggle('dmarcEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cybersecurity-red" />
                <div>
                  <p className="text-sm font-medium text-white">URL Scanning</p>
                  <p className="text-xs text-gray-500">Scan URLs in emails for threats</p>
                </div>
              </div>
              <Toggle enabled={settings.urlScanningEnabled} onChange={() => handleToggle('urlScanningEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm font-medium text-white">Attachment Scanning</p>
                  <p className="text-xs text-gray-500">Scan email attachments for malware</p>
                </div>
              </div>
              <Toggle enabled={settings.attachmentScanningEnabled} onChange={() => handleToggle('attachmentScanningEnabled')} />
            </div>
          </div>
        </Card>

        {/* Threat Detection Settings */}
        <Card title="Threat Detection" subtitle="Configure AI and threat intelligence">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cybersecurity-green" />
                <div>
                  <p className="text-sm font-medium text-white">AI Threat Detection</p>
                  <p className="text-xs text-gray-500">Use ML models for threat detection</p>
                </div>
              </div>
              <Toggle enabled={settings.aiDetectionEnabled} onChange={() => handleToggle('aiDetectionEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-cybersecurity-blue" />
                <div>
                  <p className="text-sm font-medium text-white">Threat Intelligence</p>
                  <p className="text-xs text-gray-500">Use global threat intelligence feeds</p>
                </div>
              </div>
              <Toggle enabled={settings.threatIntelligenceEnabled} onChange={() => handleToggle('threatIntelligenceEnabled')} />
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-cybersecurity-yellow" />
                <div>
                  <p className="text-sm font-medium text-white">Sandbox Analysis</p>
                  <p className="text-xs text-gray-500">Run suspicious files in sandbox</p>
                </div>
              </div>
              <Toggle enabled={settings.sandboxEnabled} onChange={() => handleToggle('sandboxEnabled')} />
            </div>
          </div>
        </Card>

        {/* Quarantine Settings */}
        <Card title="Quarantine Settings" subtitle="Configure quarantine behavior">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cybersecurity-yellow" />
                <div>
                  <p className="text-sm font-medium text-white">Auto-Quarantine High Risk</p>
                  <p className="text-xs text-gray-500">Automatically quarantine high risk emails</p>
                </div>
              </div>
              <Toggle enabled={settings.autoQuarantineHighRisk} onChange={() => handleToggle('autoQuarantineHighRisk')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cybersecurity-red" />
                <div>
                  <p className="text-sm font-medium text-white">Auto-Block Critical</p>
                  <p className="text-xs text-gray-500">Automatically block critical threats</p>
                </div>
              </div>
              <Toggle enabled={settings.autoBlockCritical} onChange={() => handleToggle('autoBlockCritical')} />
            </div>
            
            <div className="py-3">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-white">Quarantine Retention</p>
                  <p className="text-xs text-gray-500">Days to keep emails in quarantine</p>
                </div>
              </div>
              <select
                value={settings.quarantineRetentionDays}
                onChange={(e) => handleChange('quarantineRetentionDays', parseInt(e.target.value))}
                className="w-full bg-cybersecurity-darker border border-cybersecurity-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cybersecurity-green/50"
              >
                <option value={7}>7 days</option>
                <option value={14}>14 days</option>
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card title="Notifications" subtitle="Configure alert preferences">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cybersecurity-green" />
                <div>
                  <p className="text-sm font-medium text-white">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive threat alerts via email</p>
                </div>
              </div>
              <Toggle enabled={settings.emailNotifications} onChange={() => handleToggle('emailNotifications')} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-cybersecurity-border/50">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm font-medium text-white">Daily Digest</p>
                  <p className="text-xs text-gray-500">Receive daily security summary</p>
                </div>
              </div>
              <Toggle enabled={settings.dailyDigest} onChange={() => handleToggle('dailyDigest')} />
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-cybersecurity-blue" />
                <div>
                  <p className="text-sm font-medium text-white">Slack Notifications</p>
                  <p className="text-xs text-gray-500">Send alerts to Slack channel</p>
                </div>
              </div>
              <Toggle enabled={settings.slackNotifications} onChange={() => handleToggle('slackNotifications')} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
