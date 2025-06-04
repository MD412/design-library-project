import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import { FiAlertCircle, FiCheck, FiX, FiInfo, FiStar } from 'react-icons/fi';
import styles from './page.module.css';

export default function IconsDocumentation() {
  const basicUsageIcons = (
    <div className={styles.iconGrid}>
      <div className={styles.iconItem}>
        <FiAlertCircle size={24} />
        <span>Alert</span>
      </div>
      <div className={styles.iconItem}>
        <FiCheck size={24} />
        <span>Check</span>
      </div>
      <div className={styles.iconItem}>
        <FiX size={24} />
        <span>Close</span>
      </div>
      <div className={styles.iconItem}>
        <FiInfo size={24} />
        <span>Info</span>
      </div>
      <div className={styles.iconItem}>
        <FiStar size={24} />
        <span>Star</span>
      </div>
    </div>
  );

  const sizeDemoIcons = (
    <div className={styles.sizeDemo}>
      <FiInfo size={16} />
      <FiInfo size={24} />
      <FiInfo size={32} />
      <FiInfo size={48} />
    </div>
  );

  const colorDemoIcons = (
    <div className={styles.colorDemo}>
      <FiInfo size={24} className={styles.primary} />
      <FiInfo size={24} className={styles.secondary} />
      <FiInfo size={24} className={styles.success} />
      <FiInfo size={24} className={styles.warning} />
      <FiInfo size={24} className={styles.error} />
    </div>
  );

  const usageExampleCode = `import { FiInfo } from 'react-icons/fi';

// Basic usage
<FiInfo />

// With size
<FiInfo size={24} />

// With color
<FiInfo color="#007bff" />

// With className
<FiInfo className="custom-icon" />`;

  return (
    <DocsLayout
      title="Icons"
      description="Our icon library is powered by react-icons and provides a wide range of symbols for consistent visual communication across the interface."
    >
      <DocsSection title="Icon Library">
        <DocsExample
          title="About Our Icons"
          description="Our design system uses react-icons library for consistent iconography across the application."
          preview={null}
          code=""
        />
        <DocsExample
          title="Basic Usage"
          description="Commonly used icons for quick actions and feedback."
          preview={basicUsageIcons}
          code=""
        />
        <DocsExample
          title="Sizes"
          description="Icons can be rendered at various standard sizes."
          preview={sizeDemoIcons}
          code=""
        />
        <DocsExample
          title="Colors"
          description="Icons can inherit text color or be explicitly colored using CSS variables or utility classes."
          preview={colorDemoIcons}
          code=""
        />
        <DocsExample
          title="Usage Example"
          description="How to import and use icons in your components."
          preview={null}
          code={usageExampleCode}
        />
      </DocsSection>
    </DocsLayout>
  );
} 