import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'success' | 'warning' | 'critical' | 'accent';
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  size = 'medium',
  variant = 'default',
  showValue = false,
  animated = false,
  striped = false
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const getValueDisplay = () => {
    if (max === 100) {
      return `${Math.round(percentage)}%`;
    }
    return `${value}/${max}`;
  };

  return (
    <div className={styles.container}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && (
            <span className={`${styles.label} body-small-strong`}>
              {label}
            </span>
          )}
          {showValue && (
            <span className={`${styles.value} body-small`}>
              {getValueDisplay()}
            </span>
          )}
        </div>
      )}
      
      <div 
        className={`
          ${styles.track} 
          ${styles[size]} 
          ${striped ? styles.striped : ''}
        `}
      >
        <div
          className={`
            ${styles.fill} 
            ${styles[variant]}
            ${animated ? styles.animated : ''}
          `}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
    </div>
  );
} 