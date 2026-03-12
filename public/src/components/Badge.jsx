import React from 'react';

const Badge = ({ children, variant = 'default', size = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    success: 'bg-cybersecurity-green/20 text-cybersecurity-green border-cybersecurity-green/30',
    warning: 'bg-cybersecurity-yellow/20 text-cybersecurity-yellow border-cybersecurity-yellow/30',
    danger: 'bg-cybersecurity-red/20 text-cybersecurity-red border-cybersecurity-red/30',
    info: 'bg-cybersecurity-blue/20 text-cybersecurity-blue border-cybersecurity-blue/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    default: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  const statusBadges = {
    Allowed: 'success',
    Quarantined: 'warning',
    Blocked: 'danger',
    Safe: 'success',
    Low: 'success',
    Medium: 'warning',
    High: 'danger',
    Critical: 'danger',
    Severe: 'danger',
    Pass: 'success',
    Fail: 'danger',
  };

  // Auto-determine variant based on content
  const autoVariant = statusBadges[children] || 'default';

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full border
        ${variants[autoVariant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
