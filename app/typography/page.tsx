import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

interface TypeStyle {
  label: string;
  previewClass: string;
  token: string;
  description: string;
}

const typeStyles: TypeStyle[] = [
  { 
    label: 'Title Hero',
    previewClass: 'title-hero',
    token: '--font-title-hero',
    description: 'Used for main landing page headlines and key marketing messages.'
  },
  { 
    label: 'Title Page',
    previewClass: 'title-page',
    token: '--font-title-page',
    description: 'Used for page titles and major section headers.'
  },
  { 
    label: 'Subtitle',
    previewClass: 'subtitle',
    token: '--font-subtitle',
    description: 'Supports page titles with additional context or description.'
  },
  { 
    label: 'Heading',
    previewClass: 'heading',
    token: '--font-heading',
    description: 'Used for section headings and important content groupings.'
  },
  { 
    label: 'Subheading',
    previewClass: 'subheading',
    token: '--font-subheading',
    description: 'Provides hierarchy within sections and content blocks.'
  },
  { 
    label: 'Body Base',
    previewClass: 'body-base',
    token: '--font-body-base',
    description: 'Default text style for paragraphs and general content.'
  },
  { 
    label: 'Body Strong',
    previewClass: 'body-strong',
    token: '--font-body-strong',
    description: 'Emphasizes important content within body text.'
  },
  { 
    label: 'Body Small',
    previewClass: 'body-small',
    token: '--font-body-small',
    description: 'Used for supporting text, captions, and UI elements.'
  },
  { 
    label: 'Body Small Strong',
    previewClass: 'body-small-strong',
    token: '--font-body-small-strong',
    description: 'Emphasizes important content within small text.'
  },
  { 
    label: 'Code',
    previewClass: 'body-code',
    token: '--font-body-code',
    description: 'Used for code snippets, technical content, and monospace text.'
  },
];

export default function TypographyDocumentation() {
  return (
    <DocsLayout
      title="Typography"
      description="The typography scale establishes clear hierarchy and readability across the interface. Each style is available as a global utility class and a CSS variable you can compose with your own classes."
    >
      <DocsSection title="Type Scale">
        {typeStyles.map((type) => (
          <DocsExample
            key={type.label}
            title={type.label}
            description={type.description}
            preview={
              <div className={styles.typePreview}>
                <div className={type.previewClass}>
                  The quick brown fox jumps over the lazy dog
                </div>
                <div className={styles.specs}>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Token:</span>
                    <code className={styles.specValue}>{type.token}</code>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Class:</span>
                    <code className={styles.specValue}>.{type.previewClass}</code>
                  </div>
                </div>
              </div>
            }
            code={`<p className="${type.previewClass}">Text content</p>`}
          />
        ))}
      </DocsSection>
    </DocsLayout>
  );
} 