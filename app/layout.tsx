import type { Metadata } from "next";
import { inter, robotoMono, monda } from './fonts';
import './globals.css';
import Navigation from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';

export const metadata: Metadata = {
  title: "Design System",
  description: "A comprehensive design system library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[
      inter.variable,
      robotoMono.variable,
      monda.variable
    ].join(' ')}>
      <body>
        <ThemeProvider>
          <Navigation>{children}</Navigation>
        </ThemeProvider>
      </body>
    </html>
  );
}
