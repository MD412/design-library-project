'use client';

import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

function TypographyShowcase({ className, label }: { className: string; label: string }) {
  return (
    <div className={styles.showcase}>
      <p className={className}>
        The quick brown fox jumps over the lazy dog
      </p>
      <code className={styles.code}>{label}</code>
    </div>
  );
}

function TokenValue({ token, value }: { token: string; value: string }) {
  return (
    <div className={styles.tokenValue}>
      <code className={styles.token}>{token}</code>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <DocsLayout
      title="Typography System"
      description="A comprehensive type system built on semantic tokens and consistent scales."
    >
      <DocsSection title="Overview">
        <p className="body-large">
          Our typography system is built on a foundation of primitive tokens that define our basic type properties,
          which are then composed into semantic tokens for specific use cases. This ensures consistency while
          maintaining flexibility across different contexts.
        </p>
      </DocsSection>

      <DocsSection title="Display Typography">
        <p className="body-medium">
          Display typography is used for hero sections, large headlines, and other prominent text elements.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="display-large" label="display-large" />
          <TypographyShowcase className="display-medium" label="display-medium" />
          <TypographyShowcase className="display-small" label="display-small" />
        </div>
      </DocsSection>

      <DocsSection title="Headings">
        <p className="body-medium">
          A clear hierarchy of headings helps users understand the structure of your content.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="heading-1" label="heading-1" />
          <TypographyShowcase className="heading-2" label="heading-2" />
          <TypographyShowcase className="heading-3" label="heading-3" />
          <TypographyShowcase className="heading-4" label="heading-4" />
          <TypographyShowcase className="heading-5" label="heading-5" />
          <TypographyShowcase className="heading-6" label="heading-6" />
        </div>
      </DocsSection>

      <DocsSection title="Body Text">
        <p className="body-medium">
          Body text styles are optimized for readability in different contexts.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="body-large" label="body-large" />
          <TypographyShowcase className="body-medium" label="body-medium" />
          <TypographyShowcase className="body-small" label="body-small" />
        </div>
      </DocsSection>

      <DocsSection title="UI Text">
        <p className="body-medium">
          UI text is designed for interface elements like buttons, labels, and navigation.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="ui-large" label="ui-large" />
          <TypographyShowcase className="ui-medium" label="ui-medium" />
          <TypographyShowcase className="ui-small" label="ui-small" />
        </div>
      </DocsSection>

      <DocsSection title="Code">
        <p className="body-medium">
          Monospace typography for code examples and technical content.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="code-large" label="code-large" />
          <TypographyShowcase className="code-medium" label="code-medium" />
          <TypographyShowcase className="code-small" label="code-small" />
        </div>
      </DocsSection>

      <DocsSection title="Special Cases">
        <p className="body-medium">
          Special typography styles for specific use cases.
        </p>
        <div className={styles.examples}>
          <TypographyShowcase className="caption" label="caption" />
          <TypographyShowcase className="overline" label="overline" />
          <TypographyShowcase className="label" label="label" />
        </div>
      </DocsSection>

      <DocsSection title="Implementation">
        <DocsExample
          title="Using Typography Classes"
          description="Apply typography styles using our utility classes"
          preview={
            <div className={styles.implementation}>
              <h1 className="heading-1">Main Heading</h1>
              <p className="body-large">
                This is a large body text paragraph that might introduce a section
                or contain important information that needs emphasis.
              </p>
              <h2 className="heading-3">Subheading</h2>
              <p className="body-medium">
                Regular body text for the main content. This style is optimized
                for readability and works well for longer paragraphs.
              </p>
              <p className="caption">A caption that provides additional context</p>
            </div>
          }
          code={`<article>
  <h1 className="heading-1">Main Heading</h1>
  <p className="body-large">
    This is a large body text paragraph...
  </p>
  <h2 className="heading-3">Subheading</h2>
  <p className="body-medium">
    Regular body text for the main content...
  </p>
  <p className="caption">
    A caption that provides additional context
  </p>
</article>`}
        />

        <DocsExample
          title="Using CSS Variables"
          description="Access typography tokens directly in your CSS"
          preview={
            <div className={styles.customExample}>
              Custom styled text using typography tokens
            </div>
          }
          code={`.custom-text {
  font: var(--typography-body-large);
  letter-spacing: var(--letter-spacing-body);
  color: var(--text-primary);
}`}
        />
      </DocsSection>

      <DocsSection title="Font Size Scale">
        <p className="body-medium">
          Our font size scale follows an 8px baseline grid for consistent vertical rhythm.
        </p>
        <div className={styles.tokenGrid}>
          <TokenValue token="--font-size-50" value="0.75rem (12px)" />
          <TokenValue token="--font-size-75" value="0.875rem (14px)" />
          <TokenValue token="--font-size-100" value="1rem (16px)" />
          <TokenValue token="--font-size-200" value="1.125rem (18px)" />
          <TokenValue token="--font-size-300" value="1.25rem (20px)" />
          <TokenValue token="--font-size-400" value="1.5rem (24px)" />
          <TokenValue token="--font-size-500" value="1.75rem (28px)" />
          <TokenValue token="--font-size-600" value="2rem (32px)" />
          <TokenValue token="--font-size-700" value="2.5rem (40px)" />
          <TokenValue token="--font-size-800" value="3rem (48px)" />
          <TokenValue token="--font-size-900" value="3.5rem (56px)" />
          <TokenValue token="--font-size-1000" value="4rem (64px)" />
        </div>
      </DocsSection>
    </DocsLayout>
  );
} 