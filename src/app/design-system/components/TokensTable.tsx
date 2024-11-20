'use client';

import React from 'react';
import { designTokens } from '@/styles/design-system';
import ColorPicker from './ColorPicker';
import { useDesignTokens } from '../store/useDesignTokens';

interface TokensTableProps {
  tokens: Record<string, any>;
  title: string;
  description: string;
  path?: string[];
}

const TokensTable: React.FC<TokensTableProps> = ({ tokens, title, description, path = [] }) => {
  const { updateToken } = useDesignTokens();

  const renderPreview = (key: string, value: string) => {
    const currentPath = [...path, key];
    
    // Color preview
    if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('linear-gradient')) {
      return (
        <div className="flex items-center justify-end gap-2">
          <ColorPicker 
            color={value} 
            onChange={(newColor) => updateToken(currentPath, newColor)} 
          />
        </div>
      );
    }

    // Size preview (for spacing, sizing tokens)
    if (typeof value === 'string' && (value.endsWith('px') || value.endsWith('rem'))) {
      return (
        <div className="flex items-center justify-end gap-1">
          <div className="flex flex-col gap-1 items-end">
            <div className="h-0.5 rounded-full bg-white/30" style={{ width: '16px' }} />
            <div className="h-0.5 rounded-full bg-white/20" style={{ width: '8px' }} />
            <div className="h-0.5 rounded-full bg-white/10" style={{ width: '4px' }} />
          </div>
          <span className="text-sm text-white/60 ml-2">{value}</span>
        </div>
      );
    }

    // Typography preview
    if (key.includes('font') || key.includes('text') || key.includes('line')) {
      return (
        <div className="flex items-center justify-end gap-1">
          <div className="flex flex-col gap-1 items-end">
            <div className="h-1 rounded-full bg-white/30" style={{ width: '16px' }} />
            <div className="h-1 rounded-full bg-white/10" style={{ width: '12px' }} />
          </div>
          <span className="text-sm text-white/60 ml-2">{value}</span>
        </div>
      );
    }

    return <span className="text-sm text-white/60">{value}</span>;
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold mb-2" style={{ 
          color: designTokens.colors.text.primary,
          fontFamily: designTokens.typography.fontFamily,
        }}>
          {title}
        </h3>
        <p style={{ color: designTokens.colors.text.secondary }}>{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(tokens).map(([key, value]) => {
          if (typeof value === 'object') {
            return (
              <div key={key} className="col-span-2">
                <TokensTable
                  tokens={value}
                  title={key}
                  description={`${key} tokens`}
                  path={[...path, key]}
                />
              </div>
            );
          }

          return (
            <div
              key={key}
              className="col-span-2 flex justify-between items-center p-4 rounded-lg"
              style={{ backgroundColor: designTokens.colors.background.light }}
            >
              <div>
                <div className="font-medium mb-1" style={{ color: designTokens.colors.text.primary }}>
                  {key}
                </div>
                <div className="text-sm" style={{ color: designTokens.colors.text.secondary }}>
                  {value}
                </div>
              </div>
              <div className="flex-shrink-0">
                {renderPreview(key, value)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TokensTable;
