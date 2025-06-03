import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

const sizeClass: Record<ButtonSize, string> = {
  small: styles.small,
  medium: '',
  large: styles.large,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      iconLeft,
      iconRight,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${variantClass[variant]} ${sizeClass[size]} body-strong ${className}`}
        {...rest}
      >
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button; 