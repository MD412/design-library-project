"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const FOUNDATION_LINKS = [
  { href: '/typography', label: 'Typography' },
  { href: '/colors', label: 'Colors' },
]

const COMPONENT_LINKS: { href: string; label: string }[] = []

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div>
          <div className={styles.sectionTitle}>Foundations</div>
          {FOUNDATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.activeLink : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {COMPONENT_LINKS.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Components</div>
            {COMPONENT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.activeLink : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </aside>
  )
} 