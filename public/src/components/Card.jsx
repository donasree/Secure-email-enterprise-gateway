import React from 'react';

const Card = ({ children, className = '', title, subtitle, action }) => {
  return (
    <div className={`bg-cybersecurity-card border border-cybersecurity-border rounded-xl overflow-hidden card-hover ${className}`}>
      {(title || action) && (
        <div className="px-6 py-4 border-b border-cybersecurity-border flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
