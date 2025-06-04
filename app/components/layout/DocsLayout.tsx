'use client';

import React from 'react';
import styles from './DocsLayout.module.css';

interface DocsLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

interface DocsExampleProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  children?: React.ReactNode;
}

interface DocsSectionProps {
  title: string;
  children: React.ReactNode;
}

export const DocsExample = ({ title, description, preview, code, children }: DocsExampleProps) => {
  return (
    <div className={styles.example}>
      {preview && (
        <div className={styles.preview}>
          {preview}
        </div>
      )}
      <div className={styles.content}>
        <h3 className="subheading">{title}</h3>
        {description && <p className="body-base">{description}</p>}
        {code && (
          <pre className={styles.code}>
            <code>{code}</code>
          </pre>
        )}
        {children}
      </div>
    </div>
  );
};

export const DocsSection = ({ title, children }: DocsSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className="heading">{title}</h2>
      {children}
    </section>
  );
};

const DocsLayout = ({ title, description, children }: DocsLayoutProps) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className="title-page">{title}</h1>
        <p className="body-base">{description}</p>
      </header>
      {children}
    </article>
  );
};

export default DocsLayout; 