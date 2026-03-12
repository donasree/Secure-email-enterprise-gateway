// Mock data for Enterprise Email Security Gateway

export const emails = [
  {
    id: 'EML-001',
    sender: 'security@bankofamerica.com',
    senderName: 'Bank of America Security',
    subject: 'Urgent: Verify Your Account',
    timestamp: '2024-01-15T09:23:45Z',
    riskScore: 92,
    threatType: 'Phishing',
    status: 'Blocked',
    content: `Dear Valued Customer,

We have detected unusual activity on your account. Please verify your identity immediately to avoid account suspension.

Click here to verify: http://secure-bank-verify.com/login

Failure to verify within 24 hours will result in permanent account suspension.

Best regards,
Bank of America Security Team`,
    extractedUrls: [
      { url: 'http://secure-bank-verify.com/login', risk: 'High', isMalicious: true },
      { url: 'http://secure-bank-verify.com/images/logo.png', risk: 'Medium', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Fail',
      dkim: 'Fail',
      dmarc: 'Fail',
      urlRisk: 'High',
      senderReputation: 'Poor'
    }
  },
  {
    id: 'EML-002',
    sender: 'hr@company.com',
    senderName: 'HR Department',
    subject: 'Q4 Performance Review Schedule',
    timestamp: '2024-01-15T08:15:00Z',
    riskScore: 5,
    threatType: 'Safe',
    status: 'Allowed',
    content: `Dear Team,

Please find attached the Q4 performance review schedule. Reviews will be conducted from January 20-31, 2024.

Please ensure you prepare your self-assessment documents before your scheduled meeting.

Best regards,
HR Department`,
    extractedUrls: [],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Good'
    }
  },
  {
    id: 'EML-003',
    sender: 'support@amazon.com',
    senderName: 'Amazon Support',
    subject: 'Your Order #123-4567890 Has Been Shipped',
    timestamp: '2024-01-14T16:45:30Z',
    riskScore: 8,
    threatType: 'Safe',
    status: 'Allowed',
    content: `Hello,

Your order has been shipped and is on its way!

Order #: 123-4567890
Estimated Delivery: January 16-18, 2024

Track your package: https://www.amazon.com/tracking/123456

Thank you for shopping with us,
Amazon Customer Service`,
    extractedUrls: [
      { url: 'https://www.amazon.com/tracking/123456', risk: 'Low', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Excellent'
    }
  },
  {
    id: 'EML-004',
    sender: 'ceo@company.com',
    senderName: 'John Smith (CEO)',
    subject: 'Urgent Wire Transfer Required',
    timestamp: '2024-01-14T14:30:00Z',
    riskScore: 95,
    threatType: 'Business Email Compromise',
    status: 'Blocked',
    content: `Hi,

I need you to process an urgent wire transfer of $75,000 to a vendor immediately. This is time-sensitive and needs to be done today.

Please process it and send me the confirmation.

Thanks,
John Smith
CEO`,
    extractedUrls: [],
    securityChecks: {
      spf: 'Fail',
      dkim: 'Fail',
      dmarc: 'Fail',
      urlRisk: 'Low',
      senderReputation: 'Unknown'
    }
  },
  {
    id: 'EML-005',
    sender: 'newsletter@techweekly.com',
    senderName: 'Tech Weekly',
    subject: 'Top 10 Cybersecurity Trends for 2024',
    timestamp: '2024-01-14T12:00:00Z',
    riskScore: 12,
    threatType: 'Newsletter',
    status: 'Allowed',
    content: `Welcome to Tech Weekly!

This week: Top 10 Cybersecurity Trends for 2024

1. AI-Powered Threat Detection
2. Zero Trust Architecture
3. Quantum Cryptography
...

Read more on our website.

Unsubscribe | Manage preferences`,
    extractedUrls: [
      { url: 'https://techweekly.com/article/2024-trends', risk: 'Low', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Good'
    }
  },
  {
    id: 'EML-006',
    sender: 'admin@paypal-security.com',
    senderName: 'PayPal Security',
    subject: 'Your Account Has Been Limited',
    timestamp: '2024-01-14T10:20:15Z',
    riskScore: 88,
    threatType: 'Phishing',
    status: 'Quarantined',
    content: `Dear PayPal User,

Your account has been limited due to suspicious activity. To restore full access, please verify your identity.

Click here to verify: http://paypal-secure-verify.com/identity

If you don't verify within 48 hours, your account will be permanently limited.

PayPal Security Team`,
    extractedUrls: [
      { url: 'http://paypal-secure-verify.com/identity', risk: 'High', isMalicious: true }
    ],
    securityChecks: {
      spf: 'Fail',
      dkim: 'Fail',
      dmarc: 'Fail',
      urlRisk: 'High',
      senderReputation: 'Poor'
    }
  },
  {
    id: 'EML-007',
    sender: 'partners@microsoft.com',
    senderName: 'Microsoft Partners',
    subject: 'Invitation to Partner Event 2024',
    timestamp: '2024-01-13T15:30:00Z',
    riskScore: 15,
    threatType: 'Safe',
    status: 'Allowed',
    content: `Dear Partner,

You are invited to the Microsoft Partner Summit 2024!

Date: February 15-17, 2024
Location: Las Vegas, NV

Register now to secure your spot.

Microsoft Partner Team`,
    extractedUrls: [
      { url: 'https://partner.microsoft.com/events/summit-2024', risk: 'Low', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Excellent'
    }
  },
  {
    id: 'EML-008',
    sender: 'it@company.com',
    senderName: 'IT Department',
    subject: 'Password Reset Required',
    timestamp: '2024-01-13T11:45:00Z',
    riskScore: 35,
    threatType: 'Internal',
    status: 'Allowed',
    content: `Team,

As part of our security protocol, please reset your password by January 31, 2024.

Visit the IT portal to reset: https://it.company.com/password-reset

If you have any questions, contact IT support.

IT Department`,
    extractedUrls: [
      { url: 'https://it.company.com/password-reset', risk: 'Low', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Good'
    }
  },
  {
    id: 'EML-009',
    sender: 'offers@shopsmart.com',
    senderName: 'ShopSmart Deals',
    subject: 'Flash Sale - 80% Off Everything!',
    timestamp: '2024-01-13T09:00:00Z',
    riskScore: 45,
    threatType: 'Spam',
    status: 'Quarantined',
    content: `🔥 FLASH SALE! 🔥

80% OFF Everything!

Shop now before it's too late!

Click here: http://shopsmart-deals.com/sale

Limited time only!
ShopSmart Deals`,
    extractedUrls: [
      { url: 'http://shopsmart-deals.com/sale', risk: 'Medium', isMalicious: false }
    ],
    securityChecks: {
      spf: 'Fail',
      dkim: 'Fail',
      dmarc: 'Fail',
      urlRisk: 'Medium',
      senderReputation: 'Poor'
    }
  },
  {
    id: 'EML-010',
    sender: 'alerts@github.com',
    senderName: 'GitHub',
    subject: 'New sign-in from Windows PC',
    timestamp: '2024-01-12T18:30:00Z',
    riskScore: 10,
    threatType: 'Safe',
    status: 'Allowed',
    content: `Hey,

We noticed a new sign-in to your GitHub account from:

Device: Windows PC
Browser: Chrome
Location: San Francisco, CA
IP: 192.168.1.xxx

If this wasn't you, please secure your account immediately.

GitHub Security`,
    extractedUrls: [],
    securityChecks: {
      spf: 'Pass',
      dkim: 'Pass',
      dmarc: 'Pass',
      urlRisk: 'Low',
      senderReputation: 'Excellent'
    }
  }
];

export const quarantinedEmails = emails.filter(email => email.status === 'Quarantined');
export const blockedEmails = emails.filter(email => email.status === 'Blocked');

export const dashboardStats = {
  totalEmails: 156789,
  threatsDetected: 2341,
  quarantinedEmails: 187,
  blockedEmails: 456
};

export const threatActivity = [
  { id: 1, time: '10:00', type: 'Phishing', count: 12 },
  { id: 2, time: '10:15', type: 'Malware', count: 3 },
  { id: 3, time: '10:30', type: 'Spam', count: 45 },
  { id: 4, time: '10:45', type: 'Phishing', count: 8 },
  { id: 5, time: '11:00', type: 'BEC', count: 2 },
  { id: 6, time: '11:15', type: 'Malware', count: 5 },
  { id: 7, time: '11:30', type: 'Phishing', count: 15 },
  { id: 8, time: '11:45', type: 'Spam', count: 38 },
];

export const riskScoreDistribution = [
  { range: '0-20', count: 12500, label: 'Low Risk' },
  { range: '21-40', count: 3200, label: 'Medium Risk' },
  { range: '41-60', count: 1800, label: 'High Risk' },
  { range: '61-80', count: 950, label: 'Critical' },
  { range: '81-100', count: 450, label: 'Severe' },
];

export const threatTypeDistribution = [
  { name: 'Phishing', value: 45, color: '#ff4757' },
  { name: 'Spam', value: 28, color: '#ffd93d' },
  { name: 'Malware', value: 15, color: '#ff6b81' },
  { name: 'BEC', value: 8, color: '#ff7f50' },
  { name: 'Other', value: 4, color: '#747d8c' },
];

export const threatsOverTime = [
  { date: 'Jan 1', phishing: 45, malware: 12, spam: 89 },
  { date: 'Jan 2', phishing: 52, malware: 8, spam: 102 },
  { date: 'Jan 3', phishing: 38, malware: 15, spam: 76 },
  { date: 'Jan 4', phishing: 61, malware: 22, spam: 95 },
  { date: 'Jan 5', phishing: 55, malware: 18, spam: 88 },
  { date: 'Jan 6', phishing: 48, malware: 14, spam: 92 },
  { date: 'Jan 7', phishing: 42, malware: 10, spam: 85 },
  { date: 'Jan 8', phishing: 58, malware: 19, spam: 98 },
  { date: 'Jan 9', phishing: 63, malware: 25, spam: 110 },
  { date: 'Jan 10', phishing: 51, malware: 16, spam: 87 },
  { date: 'Jan 11', phishing: 47, malware: 13, spam: 91 },
  { date: 'Jan 12', phishing: 54, malware: 17, spam: 94 },
  { date: 'Jan 13', phishing: 49, malware: 14, spam: 89 },
  { date: 'Jan 14', phishing: 56, malware: 20, spam: 96 },
];

export const topAttackDomains = [
  { domain: 'secure-bank-verify.com', attacks: 234 },
  { domain: 'paypal-secure-verify.com', attacks: 189 },
  { domain: 'amazon-account-verify.net', attacks: 156 },
  { domain: 'microsoft-support-tech.io', attacks: 134 },
  { domain: 'apple-id-verify.co', attacks: 112 },
];

export const auditLogs = [
  { id: 1, timestamp: '2024-01-15T09:30:00Z', action: 'Email Blocked', user: 'System', details: 'Phishing email from secure-bank-verify.com blocked' },
  { id: 2, timestamp: '2024-01-15T09:25:00Z', action: 'Email Quarantined', user: 'System', details: 'Suspicious email quarantined for review' },
  { id: 3, timestamp: '2024-01-15T09:20:00Z', action: 'Threat Detected', user: 'System', details: 'Malware attachment detected in email' },
  { id: 4, timestamp: '2024-01-15T09:15:00Z', action: 'Email Released', user: 'admin@company.com', details: 'Quarantined email released to inbox' },
  { id: 5, timestamp: '2024-01-15T09:10:00Z', action: 'Settings Updated', user: 'admin@company.com', details: 'SPF check threshold adjusted' },
  { id: 6, timestamp: '2024-01-15T09:05:00Z', action: 'Email Blocked', user: 'System', details: 'BEC attempt detected and blocked' },
  { id: 7, timestamp: '2024-01-15T09:00:00Z', action: 'Scan Complete', user: 'System', details: 'Hourly threat scan completed' },
  { id: 8, timestamp: '2024-01-15T08:55:00Z', action: 'User Login', user: 'security@company.com', details: 'Successful login from new device' },
];
