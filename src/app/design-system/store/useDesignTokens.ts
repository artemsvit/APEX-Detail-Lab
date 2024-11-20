'use client';

import { create } from 'zustand';
import { designTokens as initialTokens } from '@/styles/design-system';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface DesignTokensStore {
  tokens: typeof initialTokens;
  updateToken: (path: string[], value: string) => void;
}

export const useDesignTokens = create<DesignTokensStore>((set) => ({
  tokens: initialTokens,
  updateToken: (path: string[], value: string) =>
    set((state) => {
      const newTokens = { ...state.tokens };
      let current: any = newTokens;
      
      // Navigate to the parent object
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      // Update the value
      current[path[path.length - 1]] = value;
      
      return { tokens: newTokens };
    }),
}));
