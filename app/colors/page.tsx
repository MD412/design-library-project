import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

interface ColorToken {
  name: string;
  varName: string;
}

interface ColorPalette {
  title: string;
  description: string;
  tokens: ColorToken[];
}

// Semantic color groups
const semanticColors: ColorPalette[] = [
  {
    title: 'Theme Colors',
    description: 'Core theme colors that define the visual foundation of the interface.',
    tokens: [
      { name: 'Background', varName: '--background' },
      { name: 'Foreground', varName: '--foreground' },
    ]
  },
  {
    title: 'Surface Colors',
    description: 'Colors used for different surface states and backgrounds.',
    tokens: [
      { name: 'Surface Background', varName: '--surface-background' },
      { name: 'Surface Background Hover', varName: '--surface-background-hover' },
      { name: 'Surface Background Pressed', varName: '--surface-background-pressed' },
      { name: 'Surface Background Subtle', varName: '--surface-background-subtle' },
      { name: 'Surface Background Muted', varName: '--surface-background-muted' },
      { name: 'Surface Background Emphasis', varName: '--surface-background-emphasis' },
      { name: 'Surface Background Disabled', varName: '--surface-background-disabled' },
    ]
  },
  {
    title: 'Text Colors',
    description: 'Colors used for different types of text and content.',
    tokens: [
      { name: 'Text Primary', varName: '--text-primary' },
      { name: 'Text Secondary', varName: '--text-secondary' },
      { name: 'Text Tertiary', varName: '--text-tertiary' },
      { name: 'Text Disabled', varName: '--text-disabled' },
      { name: 'Text Inverse', varName: '--text-inverse' },
      { name: 'Text Brand', varName: '--text-brand' },
      { name: 'Text Error', varName: '--text-error' },
      { name: 'Text Success', varName: '--text-success' },
      { name: 'Text Warning', varName: '--text-warning' },
    ]
  },
  {
    title: 'Border Colors',
    description: 'Colors used for borders and dividers.',
    tokens: [
      { name: 'Border Default', varName: '--border-default' },
      { name: 'Border Hover', varName: '--border-hover' },
      { name: 'Border Focus', varName: '--border-focus' },
      { name: 'Border Error', varName: '--border-error' },
      { name: 'Border Success', varName: '--border-success' },
      { name: 'Border Disabled', varName: '--border-disabled' },
    ]
  },
  {
    title: 'Interactive Colors',
    description: 'Colors used for interactive elements like buttons.',
    tokens: [
      { name: 'Interactive Primary', varName: '--interactive-primary' },
      { name: 'Interactive Primary Hover', varName: '--interactive-primary-hover' },
      { name: 'Interactive Primary Pressed', varName: '--interactive-primary-pressed' },
      { name: 'Interactive Primary Disabled', varName: '--interactive-primary-disabled' },
      { name: 'Interactive Secondary', varName: '--interactive-secondary' },
      { name: 'Interactive Secondary Hover', varName: '--interactive-secondary-hover' },
      { name: 'Interactive Secondary Pressed', varName: '--interactive-secondary-pressed' },
      { name: 'Interactive Secondary Disabled', varName: '--interactive-secondary-disabled' },
    ]
  },
  {
    title: 'Status Colors',
    description: 'Colors used to communicate status and feedback.',
    tokens: [
      { name: 'Status Error', varName: '--status-error' },
      { name: 'Status Error Subtle', varName: '--status-error-subtle' },
      { name: 'Status Success', varName: '--status-success' },
      { name: 'Status Success Subtle', varName: '--status-success-subtle' },
      { name: 'Status Warning', varName: '--status-warning' },
      { name: 'Status Warning Subtle', varName: '--status-warning-subtle' },
      { name: 'Status Info', varName: '--status-info' },
      { name: 'Status Info Subtle', varName: '--status-info-subtle' },
    ]
  },
  {
    title: 'Focus & Overlay',
    description: 'Colors used for focus states and overlays.',
    tokens: [
      { name: 'Focus Ring', varName: '--focus-ring' },
      { name: 'Overlay Background', varName: '--overlay-background' },
      { name: 'Overlay Hover', varName: '--overlay-hover' },
    ]
  }
];

// Primitive color scales
const levels = ['100','200','300','400','500','600','700','800','900','1000'];

function buildPalette(prefix: string, title: string, description: string): ColorPalette {
  const tokens: ColorToken[] = levels.map((lvl) => ({
    name: `${title} ${lvl}`,
    varName: `--${prefix}-${lvl}`,
  }));
  return { title, description, tokens };
}

const primitivePalettes: ColorPalette[] = [
  buildPalette('color-brand', 'Brand Colors', 'Primary brand colors used for main UI elements and key interactions.'),
  buildPalette('color-slate', 'Slate', 'Cool gray tones for subtle backgrounds and secondary elements.'),
  buildPalette('color-red', 'Red', 'Used for error states, destructive actions, and critical information.'),
  buildPalette('color-yellow', 'Yellow', 'Used for warnings, pending states, and attention-grabbing elements.'),
  buildPalette('color-green', 'Green', 'Used for success states, positive actions, and confirmations.'),
  buildPalette('color-pink', 'Pink', 'Used for highlighting, special features, and accent elements.'),
  buildPalette('color-gray', 'Neutral Gray', 'Used for text, borders, and neutral UI elements.'),
  buildPalette('color-white', 'White (Alpha)', 'Semi-transparent white colors for overlays and subtle effects.'),
  buildPalette('color-black', 'Black (Alpha)', 'Semi-transparent black colors for shadows and depth.'),
];

export default function ColorsDocumentation() {
  return (
    <DocsLayout
      title="Colors"
      description="Our color system provides a comprehensive palette for building consistent and accessible interfaces. Each color is available as a CSS custom property that you can reference in your styles."
    >
      <DocsSection title="Current Theme Colors">
        <p className="body-base">
          These are the semantic colors currently active in the selected theme. They provide consistent color usage across the interface regardless of the theme.
        </p>
        {semanticColors.map((palette) => (
          <DocsExample
            key={palette.title}
            title={palette.title}
            description={palette.description}
            preview={
              <div className={styles.colorGrid}>
                {palette.tokens.map((token) => (
                  <div key={token.varName} className={styles.colorCard}>
                    <div
                      className={styles.colorSwatch}
                      style={{ backgroundColor: `var(${token.varName})` }}
                    />
                    <div className={styles.colorInfo}>
                      <div className={styles.colorName}>{token.name}</div>
                      <code className={styles.colorValue}>{token.varName}</code>
                    </div>
                  </div>
                ))}
              </div>
            }
            code={`/* CSS */
.element {
  color: var(${palette.tokens[0].varName});
}`}
          />
        ))}
      </DocsSection>

      <DocsSection title="Primitive Color Scales">
        <p className="body-base">
          These are the base color scales that power our semantic color system. They provide the foundation for building consistent color themes.
        </p>
        {primitivePalettes.map((palette) => (
          <DocsExample
            key={palette.title}
            title={palette.title}
            description={palette.description}
            preview={
              <div className={styles.colorGrid}>
                {palette.tokens.map((token) => (
                  <div key={token.varName} className={styles.colorCard}>
                    <div
                      className={styles.colorSwatch}
                      style={{ backgroundColor: `var(${token.varName})` }}
                    />
                    <div className={styles.colorInfo}>
                      <div className={styles.colorName}>{token.name}</div>
                      <code className={styles.colorValue}>{token.varName}</code>
                    </div>
                  </div>
                ))}
              </div>
            }
            code={`/* CSS */
.element {
  color: var(${palette.tokens[4].varName}); /* 500 - Base color */
  background: var(${palette.tokens[0].varName}); /* 100 - Lightest */
  border-color: var(${palette.tokens[2].varName}); /* 300 - Light border */
}`}
          />
        ))}
      </DocsSection>
    </DocsLayout>
  );
} 