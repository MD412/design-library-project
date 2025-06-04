'use client';
import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './page.module.css';

// Demo components for theme previews
function ThemePreviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.previewCard}>
      <h4 className={styles.previewTitle}>{title}</h4>
      {children}
    </div>
  );
}

function InteractiveThemeDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.themeDemoContainer}>
      <div className={styles.themeSwitcherDemo}>
        <h4 className={styles.demoTitle}>Current Theme: {theme}</h4>
        <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
      </div>
      
      <div className={styles.themePreviewGrid}>
        <ThemePreviewCard title="Typography">
          <div className={styles.typographyDemo}>
            <h3 className="heading">Heading Text</h3>
            <p className="body-base">Primary body text demonstrates readability across themes.</p>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Secondary text provides hierarchy.</p>
            <p className="body-base" style={{ color: 'var(--text-brand)' }}>Brand colored text for emphasis.</p>
          </div>
        </ThemePreviewCard>

        <ThemePreviewCard title="Interactive Elements">
          <div className={styles.interactiveDemo}>
            <button className={styles.primaryButton}>Primary Button</button>
            <button className={styles.secondaryButton}>Secondary Button</button>
            <input 
              className={styles.inputDemo} 
              placeholder="Input field example"
              defaultValue="Sample text"
            />
          </div>
        </ThemePreviewCard>

        <ThemePreviewCard title="Status Colors">
          <div className={styles.statusDemo}>
            <div className={styles.statusItem}>
              <div className={styles.statusIndicator} style={{ backgroundColor: 'var(--text-success)' }}></div>
              <span>Success state</span>
            </div>
            <div className={styles.statusItem}>
              <div className={styles.statusIndicator} style={{ backgroundColor: 'var(--text-warning)' }}></div>
              <span>Warning state</span>
            </div>
            <div className={styles.statusItem}>
              <div className={styles.statusIndicator} style={{ backgroundColor: 'var(--text-error)' }}></div>
              <span>Error state</span>
            </div>
          </div>
        </ThemePreviewCard>

        <ThemePreviewCard title="Surfaces & Borders">
          <div className={styles.surfacesDemo}>
            <div className={styles.surfaceExample} style={{ 
              backgroundColor: 'var(--surface-background-subtle)', 
              border: '1px solid var(--border-default)' 
            }}>
              Default surface
            </div>
            <div className={styles.surfaceExample} style={{ 
              backgroundColor: 'var(--surface-background-hover)', 
              border: '1px solid var(--border-hover)' 
            }}>
              Hover surface
            </div>
            <div className={styles.surfaceExample} style={{ 
              backgroundColor: 'var(--surface-background-emphasis)', 
              color: 'var(--text-inverse)',
              border: '1px solid var(--border-focus)' 
            }}>
              Emphasis surface
            </div>
          </div>
        </ThemePreviewCard>
      </div>
    </div>
  );
}

export default function ThemingDocumentationPage() {
  return (
    <DocsLayout
      title="Theming Architecture"
      description="Understanding the design token strategy and how themes are structured in this design system."
    >
      <DocsSection title="Overview">
        <p className="body-base">
          This design system employs a flexible theming architecture built upon CSS custom properties (variables).
          It allows for multiple themes that can control colors, typography, and other visual aspects of components
          consistently across the application.
        </p>
      </DocsSection>

      <DocsSection title="Live Theme Demo">
        <p className="body-base">
          Use the theme switcher below to see how all components adapt dynamically to different themes.
          Notice how semantic tokens provide consistent behavior while primitive tokens change the visual appearance.
        </p>
        <DocsExample
          title="Interactive Theme Switching"
          description="Switch between themes to see the design system adapt in real-time"
          preview={<InteractiveThemeDemo />}
          code={`import { useTheme } from '@/contexts/ThemeContext';
import ThemeSwitcher from '@/components/ThemeSwitcher';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <ThemeSwitcher 
        currentTheme={theme} 
        onThemeChange={setTheme} 
      />
    </div>
  );
}`}
        />
      </DocsSection>

      <DocsSection title="Design Token Philosophy">
        <p className="body-base">
          Our design tokens follow a carefully structured hierarchy that separates primitive values from their semantic usage.
          This separation allows for maximum flexibility when creating new themes while maintaining consistency across the application.
        </p>
        
        <h3>Token Architecture</h3>
        <ul className={styles.featureList}>
          <li>
            <strong>Primitive Tokens:</strong> Raw, uncontextual values that form our base palette
            <ul>
              <li>Color scales (e.g., <code>--color-blue-500: #3B82F6</code>)</li>
              <li>Never used directly in components</li>
              <li>Defined once, remain constant across themes</li>
            </ul>
          </li>
          <li>
            <strong>Semantic Tokens:</strong> The "Theme Contract" - contextual usage of primitives
            <ul>
              <li>Map primitives to their usage (e.g., <code>--text-primary: var(--color-gray-900)</code>)</li>
              <li>Only tokens that components should use</li>
              <li>Redefined by each theme</li>
            </ul>
          </li>
        </ul>

        <h3>File Structure</h3>
        <pre className={styles.codeBlock}>
{`app/styles/
├── tokens/
│   ├── primitives/
│   │   └── colors.css      # Raw color values
│   └── semantic/
│       └── colors.css      # Usage-based tokens
└── themes/
    ├── dark.css           # Dark theme overrides
    ├── high-contrast.css  # High contrast theme
    └── circuit.css        # Custom theme`}
        </pre>
      </DocsSection>

      <DocsSection title="Creating a New Theme">
        <p className="body-base">
          Adding a new theme is straightforward thanks to our semantic token architecture. Here's the process:
        </p>
        
        <ol className={styles.stepsList}>
          <li>
            <strong>Create Theme File:</strong>
            <p>Add a new CSS file in the <code>app/styles/themes/</code> directory.</p>
          </li>
          <li>
            <strong>Import Semantic Tokens:</strong>
            <p>Import the semantic token definitions to ensure you're overriding all necessary variables.</p>
            <pre className={styles.codeBlock}>
              {`@import '../tokens/semantic/colors.css';`}
            </pre>
          </li>
          <li>
            <strong>Define Theme Overrides:</strong>
            <p>Override semantic tokens using primitive values:</p>
            <pre className={styles.codeBlock}>
              {`[data-theme='my-theme'] {
  --surface-background: var(--color-gray-900);
  --text-primary: var(--color-gray-50);
  /* Override all semantic tokens */
}`}
            </pre>
          </li>
          <li>
            <strong>Register Theme:</strong>
            <p>Add the theme to the theme switcher component.</p>
          </li>
        </ol>

        <p className="body-base important">
          Important: Components should ONLY use semantic tokens. This ensures they automatically work with any new theme
          without requiring changes to the component code.
        </p>
      </DocsSection>

      <DocsSection title="Available Themes">
        <DocsExample
          title="Default Theme"
          description="The base theme with a clean, professional look using blue as the primary color. Optimized for general use with good contrast ratios."
          preview={
            <div className={styles.themeShowcase} data-theme="default">
              <div className={styles.themeCard}>
                <span className={styles.themeLabel}>Default</span>
                <div className={styles.colorPalette}>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--interactive-primary)' }} title="Primary"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--surface-background)' }} title="Background"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--text-primary)' }} title="Text"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--border-default)' }} title="Border"></div>
                </div>
              </div>
            </div>
          }
          code={`/* Default theme semantic tokens */
--text-primary: var(--color-gray-900);
--text-secondary: var(--color-gray-600);
--text-brand: var(--color-blue-600);
--surface-background: var(--color-gray-50);
--interactive-primary: var(--color-blue-600);
--border-default: var(--color-gray-200);`}
        />

        <DocsExample
          title="Dark Theme"
          description="A dark variant optimized for low-light environments and reduced eye strain. Maintains the same semantic structure with inverted color relationships."
          preview={
            <div className={styles.themeShowcase} data-theme="dark">
              <div className={styles.themeCard}>
                <span className={styles.themeLabel}>Dark</span>
                <div className={styles.colorPalette}>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--interactive-primary)' }} title="Primary"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--surface-background)' }} title="Background"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--text-primary)' }} title="Text"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--border-default)' }} title="Border"></div>
                </div>
              </div>
            </div>
          }
          code={`/* Dark theme semantic tokens */
--text-primary: var(--color-white-1000);
--text-secondary: var(--color-gray-400);
--text-brand: var(--color-brand-400);
--surface-background: var(--color-gray-800);
--interactive-primary: var(--color-brand-500);
--border-default: var(--color-gray-600);`}
        />

        <DocsExample
          title="High Contrast Theme"
          description="An accessibility-focused theme with maximum contrast ratios, meeting WCAG AAA standards. Ideal for users with visual impairments or in high-glare environments."
          preview={
            <div className={styles.themeShowcase} data-theme="high-contrast">
              <div className={styles.themeCard}>
                <span className={styles.themeLabel}>High Contrast</span>
                <div className={styles.colorPalette}>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--interactive-primary)' }} title="Primary"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--surface-background)' }} title="Background"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--text-primary)' }} title="Text"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--border-default)' }} title="Border"></div>
                </div>
              </div>
            </div>
          }
          code={`/* High contrast theme semantic tokens */
--text-primary: var(--color-black-1000);
--text-secondary: var(--color-gray-900);
--text-brand: var(--color-brand-900);
--surface-background: var(--color-white-1000);
--interactive-primary: var(--color-brand-900);
--border-default: var(--color-black-1000);`}
        />

        <DocsExample
          title="Circuit Theme"
          description="A custom theme inspired by electronic circuit boards with a distinctive teal and yellow color scheme. Features unique typography using the Monda font family."
          preview={
            <div className={styles.themeShowcase} data-theme="circuit">
              <div className={styles.themeCard}>
                <span className={styles.themeLabel}>Circuit</span>
                <div className={styles.colorPalette}>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--interactive-primary)' }} title="Primary"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--surface-background)' }} title="Background"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--text-primary)' }} title="Text"></div>
                  <div className={styles.colorChip} style={{ backgroundColor: 'var(--border-default)' }} title="Border"></div>
                </div>
              </div>
            </div>
          }
          code={`/* Circuit theme semantic tokens */
--text-primary: var(--eva-light-yellow);
--text-secondary: var(--eva-light-yellow);
--text-brand: var(--eva-bright-yellow);
--surface-background: var(--eva-mid-teal);
--interactive-primary: var(--eva-bright-yellow);
--border-default: var(--eva-light-teal);

/* Circuit theme also overrides typography */
--font-heading: 600 28px/1.2 'Monda', sans-serif;
--font-body-base: 400 16px/1.5 'Monda', sans-serif;`}
        />
      </DocsSection>

      <DocsSection title="Semantic Token Reference">
        <p className="body-base">
          All components should use these semantic tokens to ensure theme compatibility. 
          Never reference primitive tokens directly in component styles.
        </p>
        
        <DocsExample
          title="Text Tokens"
          description="Semantic tokens for all text color needs"
          preview={
            <div className={styles.tokenGrid}>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-primary)' }}>Primary text</span>
                <code>--text-primary</code>
              </div>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-secondary)' }}>Secondary text</span>
                <code>--text-secondary</code>
              </div>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-brand)' }}>Brand text</span>
                <code>--text-brand</code>
              </div>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-error)' }}>Error text</span>
                <code>--text-error</code>
              </div>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-success)' }}>Success text</span>
                <code>--text-success</code>
              </div>
              <div className={styles.tokenExample}>
                <span style={{ color: 'var(--text-warning)' }}>Warning text</span>
                <code>--text-warning</code>
              </div>
            </div>
          }
          code={`/* Text semantic tokens */
.heading {
  color: var(--text-primary);
}
.description {
  color: var(--text-secondary);
}
.link {
  color: var(--text-brand);
}
.error {
  color: var(--text-error);
}`}
        />

        <DocsExample
          title="Interactive Tokens"
          description="Semantic tokens for buttons and interactive elements"
          preview={
            <div className={styles.tokenGrid}>
              <div className={styles.tokenExample}>
                <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--interactive-primary)' }}></div>
                <code>--interactive-primary</code>
              </div>
              <div className={styles.tokenExample}>
                <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--interactive-primary-hover)' }}></div>
                <code>--interactive-primary-hover</code>
              </div>
              <div className={styles.tokenExample}>
                <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--interactive-secondary)' }}></div>
                <code>--interactive-secondary</code>
              </div>
              <div className={styles.tokenExample}>
                <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--interactive-secondary-hover)' }}></div>
                <code>--interactive-secondary-hover</code>
              </div>
            </div>
          }
          code={`/* Interactive element styling */
.button-primary {
  background: var(--interactive-primary);
  color: var(--text-inverse);
}
.button-primary:hover {
  background: var(--interactive-primary-hover);
}
.button-secondary {
  background: var(--interactive-secondary);
  color: var(--text-primary);
}`}
        />
      </DocsSection>

      <DocsSection title="Implementation Guide">
        <DocsExample
          title="Using Themes in Components"
          description="Best practices for implementing theming in your components"
          preview={
            <div className={styles.implementationDemo}>
              <div className={styles.exampleComponent}>
                <h4>Example Component</h4>
                <p>This component uses semantic tokens and adapts to all themes automatically.</p>
                <button className={styles.exampleButton}>Action Button</button>
              </div>
            </div>
          }
          code={`/* Component.module.css */
.container {
  background: var(--surface-background);
  border: 1px solid var(--border-default);
  border-radius: var(--sds-size-radius-200);
  padding: var(--sds-size-space-600);
}

.title {
  color: var(--text-primary);
  font: var(--font-heading);
  margin-bottom: var(--sds-size-space-400);
}

.description {
  color: var(--text-secondary);
  font: var(--font-body-base);
  margin-bottom: var(--sds-size-space-600);
}

.button {
  background: var(--interactive-primary);
  color: var(--text-inverse);
  border: 1px solid var(--border-interactive-primary);
  padding: var(--sds-size-space-300) var(--sds-size-space-600);
  border-radius: var(--sds-size-radius-100);
  font: var(--font-body-base);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background: var(--interactive-primary-hover);
}

.button:focus {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}`}
        />

        <DocsExample
          title="Theme Context Usage"
          description="How to access and control themes programmatically"
          preview={
            <div className={styles.contextDemo}>
              <p>Current theme can be accessed and controlled via React context</p>
            </div>
          }
          code={`import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  const handleThemeChange = () => {
    const themes = ['default', 'dark', 'high-contrast', 'circuit'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={handleThemeChange}>
        Switch to next theme
      </button>
    </div>
  );
}`}
        />
      </DocsSection>

      <DocsSection title="Accessibility Considerations">
        <p className="body-base">
          Each theme is designed with accessibility in mind:
        </p>
        <ul className={styles.featureList}>
          <li><strong>Default Theme:</strong> WCAG AA compliant contrast ratios (4.5:1 minimum)</li>
          <li><strong>Dark Theme:</strong> Reduces eye strain in low-light environments while maintaining readability</li>
          <li><strong>High Contrast:</strong> WCAG AAA compliant (7:1 contrast ratio) for maximum accessibility</li>
          <li><strong>Circuit Theme:</strong> Unique aesthetic while maintaining AA compliance for most text</li>
        </ul>
        
        <DocsExample
          title="Focus Management"
          description="All themes include consistent focus indicators for keyboard navigation"
          preview={
            <div className={styles.focusDemo}>
              <button className={styles.focusButton}>Tab to focus this button</button>
              <input className={styles.focusInput} placeholder="And this input field" />
            </div>
          }
          code={`/* Focus indicators work consistently across themes */
.interactive-element:focus {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

/* Focus ring color adapts to each theme automatically */
/* Default: light blue, Dark: darker blue, etc. */`}
        />
      </DocsSection>

      <DocsSection title="Creating Custom Themes">
        <p className="body-base">
          To create a new theme, define all semantic tokens within a <code>[data-theme='your-theme']</code> selector:
        </p>
        
        <DocsExample
          title="Custom Theme Template"
          description="Structure for creating a new theme"
          preview={
            <div className={styles.customThemeDemo}>
              <p>Follow this pattern to create consistent custom themes</p>
            </div>
          }
          code={`/* Custom theme example */
[data-theme='custom'] {
  /* A. Core Page Semantics */
  --background: #your-bg-color;
  --foreground: #your-text-color;

  /* B. Surface Colors */
  --surface-background: #your-surface-bg;
  --surface-background-hover: #your-surface-hover;
  --surface-background-pressed: #your-surface-pressed;
  /* ... define all surface tokens */

  /* C. Text Colors */
  --text-primary: #your-primary-text;
  --text-secondary: #your-secondary-text;
  --text-brand: #your-brand-color;
  /* ... define all text tokens */

  /* D. Border Colors */
  --border-default: #your-border-color;
  /* ... define all border tokens */

  /* E. Interactive Colors */
  --interactive-primary: #your-primary-button;
  --interactive-primary-hover: #your-primary-hover;
  /* ... define all interactive tokens */

  /* F. Status Colors */
  --status-error: #your-error-color;
  /* ... define all status tokens */

  /* G. Focus & Overlay Colors */
  --focus-ring: #your-focus-color;
  --overlay-background: rgba(0, 0, 0, 0.7);
}`}
        />
      </DocsSection>
    </DocsLayout>
  );
} 