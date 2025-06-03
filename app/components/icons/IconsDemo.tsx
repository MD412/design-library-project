'use client';

import React from 'react';
import { FiAlertCircle, FiCheck, FiX, FiInfo, FiStar } from 'react-icons/fi';
import styles from './IconsDemo.module.css';

export const IconsDemo: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Icons</h2>
      <p>Our design system uses react-icons library for consistent iconography across the application.</p>
      
      <section className={styles.section}>
        <h3>Basic Usage</h3>
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
      </section>

      <section className={styles.section}>
        <h3>Sizes</h3>
        <div className={styles.sizeDemo}>
          <FiInfo size={16} />
          <FiInfo size={24} />
          <FiInfo size={32} />
          <FiInfo size={48} />
        </div>
      </section>

      <section className={styles.section}>
        <h3>Colors</h3>
        <div className={styles.colorDemo}>
          <FiInfo size={24} className={styles.primary} />
          <FiInfo size={24} className={styles.secondary} />
          <FiInfo size={24} className={styles.success} />
          <FiInfo size={24} className={styles.warning} />
          <FiInfo size={24} className={styles.error} />
        </div>
      </section>

      <section className={styles.section}>
        <h3>Usage Example</h3>
        <pre className={styles.codeExample}>
          {`import { FiInfo } from 'react-icons/fi';

// Basic usage
<FiInfo />

// With size
<FiInfo size={24} />

// With color
<FiInfo color="#007bff" />

// With className
<FiInfo className="custom-icon" />`}
        </pre>
      </section>
    </div>
  );
};

export default IconsDemo; 