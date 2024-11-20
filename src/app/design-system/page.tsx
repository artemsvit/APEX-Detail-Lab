'use client';

import React from 'react';
import { useDesignTokens } from './store/useDesignTokens';
import CodeBlock from './components/CodeBlock';
import TokensTable from './components/TokensTable';
import DownloadButton from './components/DownloadButton';

const DesignSystemPage = () => {
  const { tokens } = useDesignTokens();

  const usageExample = `import { useDesignTokens } from './store/useDesignTokens';

// Using design tokens
const { tokens } = useDesignTokens();
const styles = {
  color: tokens.colors.primary.base,
  padding: tokens.spacing[4],
  borderRadius: tokens.borderRadius.md,
};

// Using utility functions
const className = utils.cx(
  'base-class',
  isActive && 'active-class'
);

// Using component styles
const buttonStyles = componentStyles.button.primary;`;

  const sections = [
    { id: 'primary-colors', title: 'Primary Colors', icon: '🎨' },
    { id: 'background-colors', title: 'Background Colors', icon: '🖼' },
    { id: 'text-colors', title: 'Text Colors', icon: '📝' },
    { id: 'typography', title: 'Typography', icon: '🔤' },
    { id: 'spacing', title: 'Spacing', icon: '📏' },
    { id: 'border-radius', title: 'Border Radius', icon: '⚪' },
    { id: 'shadows', title: 'Shadows', icon: '🌗' },
    { id: 'usage', title: 'Usage Examples', icon: '💻' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: tokens.colors.background.dark }}>
      <div className="fixed top-0 left-0 right-0 z-10" style={{ backgroundColor: tokens.colors.background.dark }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <header className="py-6">
              <h1 className="text-5xl font-bold mb-4" style={{ 
                color: tokens.colors.text.primary,
                fontFamily: tokens.typography.fontFamily,
              }}>
                Design System
              </h1>
              <div className="flex justify-between items-center mb-8">
                <p className="text-xl" style={{ color: tokens.colors.text.secondary }}>
                  A comprehensive guide to our design language and component library
                </p>
                <DownloadButton />
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-4 pb-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
                    style={{ 
                      backgroundColor: tokens.colors.background.light,
                      color: tokens.colors.text.primary,
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <span>{section.icon}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </header>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Content with proper top padding to account for fixed header */}
          <div className="pt-48">
            {/* Design Tokens */}
            <section className="space-y-16">
              <div className="mb-8">
                <div className="sticky top-[170px] z-[5] -mx-4 px-4" style={{ 
                  backgroundColor: tokens.colors.background.dark,
                }}>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <div>
                      <h2 className="text-3xl font-semibold mb-2" style={{ 
                        color: tokens.colors.text.primary,
                        fontFamily: tokens.typography.fontFamily,
                      }}>
                        Design Tokens
                      </h2>
                      <p style={{ color: tokens.colors.text.secondary }}>
                        Our comprehensive design token system ensures consistency across the application
                      </p>
                    </div>
                    <DownloadButton />
                  </div>
                </div>

                <div id="primary-colors" className="scroll-mt-64 mt-8">
                  <TokensTable
                    tokens={tokens.colors.primary}
                    title="Primary Colors"
                    description="Primary brand colors used throughout the application"
                    path={['colors', 'primary']}
                  />
                </div>
              </div>

              <div className="space-y-16">
                {/* Background Colors */}
                <div id="background-colors" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.colors.background}
                    title="Background Colors"
                    description="Background colors for different surfaces and overlays"
                    path={['colors', 'background']}
                  />
                </div>

                {/* Text Colors */}
                <div id="text-colors" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.colors.text}
                    title="Text Colors"
                    description="Text colors for different purposes"
                    path={['colors', 'text']}
                  />
                </div>

                {/* Typography */}
                <div id="typography" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.typography}
                    title="Typography"
                    description="Font families, sizes, weights, and line heights"
                    path={['typography']}
                  />
                </div>

                {/* Spacing */}
                <div id="spacing" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.spacing}
                    title="Spacing"
                    description="Consistent spacing values for margin and padding"
                    path={['spacing']}
                  />
                </div>

                {/* Border Radius */}
                <div id="border-radius" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.borderRadius}
                    title="Border Radius"
                    description="Border radius values for different levels of rounding"
                    path={['borderRadius']}
                  />
                </div>

                {/* Shadows */}
                <div id="shadows" className="scroll-mt-64">
                  <TokensTable
                    tokens={tokens.shadows}
                    title="Shadows"
                    description="Box shadow values for different elevation levels"
                    path={['shadows']}
                  />
                </div>
              </div>
            </section>

            {/* Usage Examples */}
            <section id="usage" className="mt-16 scroll-mt-64">
              <h2 className="text-3xl font-semibold mb-8" style={{ 
                color: tokens.colors.text.primary,
                fontFamily: tokens.typography.fontFamily,
              }}>
                Usage Examples
              </h2>
              <div style={{ 
                backgroundColor: tokens.colors.background.light,
                padding: '1.5rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}>
                <CodeBlock code={usageExample} language="typescript" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemPage;
