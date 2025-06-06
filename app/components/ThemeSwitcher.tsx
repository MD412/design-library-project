'use client';

import React from 'react';
import styles from './ThemeSwitcher.module.css';

const themes = [
  {
    id: 'light',
    name: 'Light theme',
    topColor: '#6677e6', // Default brand blue
    bottomColor: '#ffffff' // White
  },
  {
    id: 'dark',
    name: 'Dark theme',
    topColor: '#1f2937', // Dark background from dark theme
    bottomColor: '#111827' // Even darker for contrast
  },
  {
    id: 'high-contrast',
    name: 'High contrast theme',
    topColor: '#000000', // Pure black for maximum contrast
    bottomColor: '#ffffff' // Pure white for maximum contrast
  },
  {
    id: 'circuit',
    name: 'Circuit theme',
    topColor: '#1a4a47', // Dark teal
    bottomColor: '#ffb935' // Bright yellow
  }
];

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div className={styles.container}>
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={`${styles.swatch} ${currentTheme === theme.id ? styles.active : ''}`}
          onClick={() => onThemeChange(theme.id)}
          title={theme.name}
          type="button"
          aria-label={`Switch to ${theme.name}`}
          aria-pressed={currentTheme === theme.id}
        >
          <div 
            className={styles.swatchTop}
            style={{ backgroundColor: theme.topColor }}
          />
          <div 
            className={styles.swatchBottom}
            style={{ backgroundColor: theme.bottomColor }}
          />
        </button>
      ))}
    </div>
  );
} 