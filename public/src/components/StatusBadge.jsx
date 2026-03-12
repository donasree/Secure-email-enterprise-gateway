import React from 'react';

const StatusBadge = ({ status }) => {
  const statusConfig = {
    Allowed: {
      bg: 'bg-cybersecurity-green/20',
      text: 'text-cybersecurity-green',
      border: 'border-cybersecurity-green/30',
      dot: 'bg-cybersecurity-green',
    },
    Quarantined: {
      bg: 'bg-cybersecurity-yellow/20',
      text: 'text-cybersecurity-yellow',
      border: 'border-cybersecurity-yellow/30',
      dot: 'bg-cybersecurity-yellow',
    },
    Blocked: {
      bg: 'bg-cybersecurity-red/20',
      text: 'text-cybersecurity-red',
      border: 'border-cybersecurity-red/30',
      dot: 'bg-cybersecurity-red',
    },
    Safe: {
      bg: 'bg-cybersecurity-green/20',
      text: 'text-cybersecurity-green',
      border: 'border-cybersecurity-green/30',
      dot: 'bg-cybersecurity-green',
    },
  };

  const config = statusConfig[status] || statusConfig.Allowed;

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border
        ${config.bg} ${config.text} ${config.border}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      {status}
    </span>
  );
};

export default StatusBadge;
