import React from 'react';
import styles from './SimpleBarChart.module.css';

interface ChartDataPoint {
  label: string;
  value: number;
  color?: 'default' | 'success' | 'warning' | 'critical' | 'accent' | 'neutral';
}

interface SimpleBarChartProps {
  data: ChartDataPoint[];
  title?: string;
  height?: number;
  showValues?: boolean;
  horizontal?: boolean;
  animated?: boolean;
  variant?: 'default' | 'minimal' | 'rounded';
}

export default function SimpleBarChart({
  data,
  title,
  height = 200,
  showValues = false,
  horizontal = false,
  animated = true,
  variant = 'default'
}: SimpleBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getBarHeight = (value: number) => {
    return `${(value / maxValue) * 85}%`; // Use 85% of container height
  };

  const getBarWidth = (value: number) => {
    return (value / maxValue) * 100;
  };

  const formatValue = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  return (
    <div className={styles.container}>
      {title && (
        <h3 className={`${styles.title} heading`}>{title}</h3>
      )}
      
      <div 
        className={`
          ${styles.chart} 
          ${horizontal ? styles.horizontal : styles.vertical}
          ${styles[variant]}
        `}
        style={{ height: horizontal ? 'auto' : `${height}px` }}
      >
        {data.map((item, index) => (
          <div 
            key={index} 
            className={styles.barContainer}
          >
            <div 
              className={`
                ${styles.bar} 
                ${styles[item.color || 'default']}
                ${animated ? styles.animated : ''}
              `}
              style={{
                ...(horizontal 
                  ? { width: `${getBarWidth(item.value)}%` }
                  : { '--bar-height': getBarHeight(item.value) } as React.CSSProperties
                )
              }}
              title={`${item.label}: ${item.value}`}
            >
              {showValues && (
                <span className={`${styles.value} body-small-strong`}>
                  {formatValue(item.value)}
                </span>
              )}
            </div>
            
            <div className={styles.labelContainer}>
              <span className={`${styles.label} body-small`}>
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 