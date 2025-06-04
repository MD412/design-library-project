import Sidebar from './Sidebar'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export default function MainLayout({ children, title, description }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </header>
        {children}
      </main>
    </div>
  )
} 