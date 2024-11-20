'use client';

import React from 'react';
import { designTokens } from '@/styles/design-system';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(designTokens, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'design-tokens.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: designTokens.colors.primary.base,
        color: designTokens.colors.text.primary,
        boxShadow: designTokens.shadows.sm,
      }}
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      <span>Download Tokens</span>
    </button>
  );
};

export default DownloadButton;
