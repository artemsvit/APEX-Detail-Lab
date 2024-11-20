'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { designTokens } from '@/styles/design-system';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popover = useRef<HTMLDivElement>(null);

  const closePopover = (e: MouseEvent) => {
    if (popover.current && !popover.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closePopover);
    return () => document.removeEventListener('mousedown', closePopover);
  }, []);

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-lg border border-white/10 shadow-sm cursor-pointer transition-transform hover:scale-105"
        style={{ background: color }}
        onClick={() => setIsOpen(!isOpen)}
      />
      
      {isOpen && (
        <div
          ref={popover}
          className="absolute right-0 top-12 z-50 p-4 rounded-lg shadow-lg"
          style={{ backgroundColor: designTokens.colors.background.light }}
        >
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
