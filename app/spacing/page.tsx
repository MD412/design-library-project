/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

interface SpaceToken {
  label: string;
  varName: string;
  description: string;
}

const spaceTokens: SpaceToken[] = [
  { label: '0px', varName: '--sds-size-space-0', description: 'No spacing, used for removing default margins or padding.' },
  { label: '2px', varName: '--sds-size-space-050', description: 'Micro spacing for tight UI elements.' },
  { label: '4px', varName: '--sds-size-space-100', description: 'Extra small spacing for compact layouts.' },
  { label: '8px', varName: '--sds-size-space-200', description: 'Small spacing for related elements.' },
  { label: '12px', varName: '--sds-size-space-300', description: 'Base spacing for general content.' },
  { label: '16px', varName: '--sds-size-space-400', description: 'Medium spacing for content sections.' },
  { label: '24px', varName: '--sds-size-space-600', description: 'Large spacing for major sections.' },
  { label: '32px', varName: '--sds-size-space-800', description: 'Extra large spacing for page sections.' },
  { label: '48px', varName: '--sds-size-space-1200', description: 'Double extra large spacing for major layout blocks.' },
  { label: '64px', varName: '--sds-size-space-1600', description: 'Triple extra large spacing for hero sections.' },
  { label: '96px', varName: '--sds-size-space-2400', description: 'Huge spacing for major page divisions.' },
  { label: '160px', varName: '--sds-size-space-4000', description: 'Maximum spacing for dramatic layout effects.' },
];

export default function SpacingDocumentation() {
  return (
    <DocsLayout
      title="Spacing"
      description="The spacing scale provides consistent rhythm throughout layouts. Each step is available as a CSS variable and utility class."
    >
      <DocsSection title="Spacing Scale">
        {spaceTokens.map((token) => (
          <DocsExample
            key={token.varName}
            title={token.label}
            description={token.description}
            preview={
              <div className={styles.spacingPreview}>
                <div
                  className={styles.visual}
                  style={{ width: `var(${token.varName})` }}
                />
                <div className={styles.specs}>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Token:</span>
                    <code className={styles.specValue}>{token.varName}</code>
                  </div>
                </div>
              </div>
            }
            code={`/* CSS */
.element {
  margin: var(${token.varName});
  /* or */
  padding: var(${token.varName});
}`}
          />
        ))}
      </DocsSection>

      <DocsSection title="Usage Examples">
        <DocsExample
          title="CSS Variables"
          description="Use spacing tokens directly in your CSS to maintain consistent spacing throughout your application."
          preview={
            <div className={styles.usagePreview}>
              <div className={styles.exampleBox}>
                Example content with consistent spacing
              </div>
            </div>
          }
          code={`.element {
  margin-bottom: var(--sds-size-space-400);
  padding: var(--sds-size-space-600);
}`}
        />

        <DocsExample
          title="Utility Classes"
          description="Apply spacing using utility classes for quick layout adjustments without writing custom CSS."
          preview={
            <div className={styles.usagePreview}>
              <div className="mb-400 p-600">
                Content with margin-bottom: 16px and padding: 24px
              </div>
            </div>
          }
          code={`<div class="mb-400 p-600">
  Content with margin-bottom: 16px and padding: 24px
</div>`}
        />
      </DocsSection>
    </DocsLayout>
  );
} 