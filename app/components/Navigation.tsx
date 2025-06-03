'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  const navigationItems = [
    { title: 'Analytics Dashboard', href: '/analytics' },
    { title: 'Buttons', href: '/buttons' },
    { title: 'Colors', href: '/colors' },
    { title: 'Icons', href: '/icons' },
    { title: 'Spacing', href: '/spacing' },
    { title: 'Theming', href: '/theming' },
    { title: 'Typography', href: '/typography' },
  ];

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <h2 className="heading">Design System</h2>
          </Link>
        </div>
        <ThemeSwitcher 
          currentTheme={theme}
          onThemeChange={setTheme}
        />
        <ul className={styles.navList}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
} 