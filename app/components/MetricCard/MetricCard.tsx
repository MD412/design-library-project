import React from 'react';
import styles from './MetricCard.module.css';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    type: 'positive' | 'negative' | 'neutral';
  };
  icon?: React.ReactNode;
  subtitle?: string;
  variant?: 'default' | 'highlighted';
}

export default function MetricCard({
  title,
  value,
  change,
  icon,
  subtitle,
  variant = 'default'
}: MetricCardProps) {
  const getChangeIcon = (type: 'positive' | 'negative' | 'neutral') => {
    switch (type) {
      case 'positive':
        return '↗';
      case 'negative':
        return '↘';
      case 'neutral':
        return '→';
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {icon && (
        <div className={styles.iconContainer}>
          {icon}
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={`${styles.title} body-small-strong`}>{title}</h3>
          {change && (
            <div className={`${styles.change} ${styles[change.type]}`}>
              <span className={styles.changeIcon}>
                {getChangeIcon(change.type)}
              </span>
              <span className="body-small-strong">{change.value}</span>
            </div>
          )}
        </div>
        
        <div className={styles.valueSection}>
          <span className={`${styles.value} title-page`}>{value}</span>
          {subtitle && (
            <p className={`${styles.subtitle} body-small`}>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
} 