import React from 'react';
import Button from './Button';
import styles from './ButtonExample.module.css';

export default function ButtonExample() {
  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <h3 className="subheading">Primary</h3>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
      </div>

      <div className={styles.column}>
        <h3 className="subheading">Secondary</h3>
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" size="small">Small</Button>
        <Button variant="secondary" size="large">Large</Button>
      </div>

      <div className={styles.column}>
        <h3 className="subheading">Ghost</h3>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" size="small">Small</Button>
        <Button variant="ghost" size="large">Large</Button>
      </div>
    </div>
  );
} 