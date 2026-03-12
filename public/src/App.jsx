import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import Dashboard from './pages/Dashboard';
import IncomingEmails from './pages/IncomingEmails';
import EmailDetail from './pages/EmailDetail';
import QuarantinedEmails from './pages/QuarantinedEmails';
import BlockedEmails from './pages/BlockedEmails';
import ThreatAnalytics from './pages/ThreatAnalytics';
import AuditLogs from './pages/AuditLogs';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-cybersecurity-darker">
        {/* Sidebar */}
        <Sidebar />

        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <main className="ml-64 pt-16 p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/emails" element={<IncomingEmails />} />
              <Route path="/email/:id" element={<EmailDetail />} />
              <Route path="/quarantined" element={<QuarantinedEmails />} />
              <Route path="/blocked" element={<BlockedEmails />} />
              <Route path="/analytics" element={<ThreatAnalytics />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
