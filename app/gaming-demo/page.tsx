'use client';

import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

// Mock Pokemon card data for demonstration
const mockCards = [
  {
    id: '1',
    name: 'Charizard',
    number: '004',
    set: 'Base Set',
    rarity: 'holo',
    condition: 'mint',
    quantity: 1,
    image: '/api/placeholder/250/350',
    type: 'Fire'
  },
  {
    id: '2',
    name: 'Pikachu',
    number: '025',
    set: 'Base Set',
    rarity: 'common',
    condition: 'good',
    quantity: 3,
    image: '/api/placeholder/250/350',
    type: 'Electric'
  },
  {
    id: '3',
    name: 'Blastoise',
    number: '009',
    set: 'Base Set',
    rarity: 'rare',
    condition: 'played',
    quantity: 1,
    image: '/api/placeholder/250/350',
    type: 'Water'
  },
  {
    id: '4',
    name: 'Venusaur',
    number: '003',
    set: 'Base Set',
    rarity: 'uncommon',
    condition: 'damaged',
    quantity: 2,
    image: '/api/placeholder/250/350',
    type: 'Grass'
  }
];

function PokemonCard({ card }: { card: any }) {
  return (
    <div className="card-item">
      <div className={`rarity-indicator ${card.rarity}`}>
        {card.rarity}
      </div>
      <img 
        src={card.image} 
        alt={card.name}
        className="card-image"
      />
      <div className={styles.cardContent}>
        <h3 className="card-name">{card.name}</h3>
        <p className="card-details">#{card.number} • {card.set}</p>
        <div className={styles.cardMeta}>
          <span className={`condition-indicator ${card.condition}`}>
            {card.condition}
          </span>
          <span className="card-stats">Qty: {card.quantity}</span>
        </div>
      </div>
    </div>
  );
}

function GameDashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h2 className="heading-2">Project Arceus Collection</h2>
        <button className="add-card-button">
          <span>+ Add Card</span>
        </button>
      </div>
      
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className="status-in-collection">124 Collected</span>
        </div>
        <div className={styles.statItem}>
          <span className="status-missing">27 Missing</span>
        </div>
        <div className={styles.statItem}>
          <span className="status-trading">3 Trading</span>
        </div>
      </div>

      <div className="card-grid">
        {mockCards.map((card) => (
          <PokemonCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function RarityShowcase() {
  const rarities = ['common', 'uncommon', 'rare', 'holo'];
  
  return (
    <div className={styles.rarityGrid}>
      {rarities.map((rarity) => (
        <div key={rarity} className={styles.rarityExample}>
          <div className={`rarity-indicator ${rarity}`}>
            {rarity}
          </div>
          <span className={`rarity-${rarity}`}>
            {rarity.charAt(0).toUpperCase() + rarity.slice(1)} Card
          </span>
        </div>
      ))}
    </div>
  );
}

function ConditionShowcase() {
  const conditions = ['mint', 'good', 'played', 'damaged'];
  
  return (
    <div className={styles.conditionGrid}>
      {conditions.map((condition) => (
        <div key={condition} className={styles.conditionExample}>
          <span className={`condition-indicator ${condition}`}>
            {condition}
          </span>
          <span className={`condition-${condition}`}>
            {condition.charAt(0).toUpperCase() + condition.slice(1)} Condition
          </span>
        </div>
      ))}
    </div>
  );
}

export default function GamingDemoPage() {
  return (
    <DocsLayout
      title="Gaming Theme Demo"
      description="Enhanced Circuit theme optimized for gaming and collection applications like Project Arceus."
    >
      <DocsSection title="Circuit Theme for Gaming">
        <p className="body-base">
          The Circuit theme has been enhanced with gaming-specific tokens perfect for collection apps. 
          This demo shows how it would look in a Pokemon card collection application.
        </p>
        
        <DocsExample
          title="Pokemon Card Collection Dashboard"
          description="Full gaming dashboard showing cards, stats, and interactions"
          preview={<GameDashboard />}
          code={`<div className="card-grid">
  {cards.map(card => (
    <div key={card.id} className="card-item">
      <div className={\`rarity-indicator \${card.rarity}\`}>
        {card.rarity}
      </div>
      <img src={card.image} className="card-image" />
      <h3 className="card-name">{card.name}</h3>
      <p className="card-details">#{card.number} • {card.set}</p>
      <span className={\`condition-indicator \${card.condition}\`}>
        {card.condition}
      </span>
    </div>
  ))}
</div>`}
        />
      </DocsSection>

      <DocsSection title="Rarity System">
        <p className="body-base">
          Different card rarities get unique visual treatments with appropriate colors and effects.
        </p>
        
        <DocsExample
          title="Card Rarity Indicators"
          description="Visual indicators for different card rarity levels"
          preview={<RarityShowcase />}
          code={`/* Rarity Classes */
.rarity-indicator.common { /* Basic teal styling */ }
.rarity-indicator.uncommon { /* Neon blue with glow */ }
.rarity-indicator.rare { /* Magenta with glow */ }
.rarity-indicator.holo { /* Rainbow gradient with shimmer */ }

/* Usage */
<div className="rarity-indicator holo">Holo</div>
<span className="rarity-holo">Holographic Card</span>`}
        />
      </DocsSection>

      <DocsSection title="Condition System">
        <p className="body-base">
          Card conditions are clearly indicated with color-coded badges and status indicators.
        </p>
        
        <DocsExample
          title="Card Condition Indicators"
          description="Visual system for card condition states"
          preview={<ConditionShowcase />}
          code={`/* Condition Classes */
.condition-indicator.mint { /* Green with dot indicator */ }
.condition-indicator.good { /* Yellow with dot indicator */ }
.condition-indicator.played { /* Orange with dot indicator */ }
.condition-indicator.damaged { /* Red with dot indicator */ }

/* Usage */
<span className="condition-indicator mint">Mint</span>
<span className="condition-mint">Mint Condition Text</span>`}
        />
      </DocsSection>

      <DocsSection title="Gaming-Specific Tokens">
        <p className="body-base">
          The enhanced Circuit theme includes specialized tokens for gaming applications.
        </p>
        
        <DocsExample
          title="Color Tokens"
          description="Gaming-specific color tokens available in Circuit theme"
          preview={
            <div className={styles.tokenShowcase}>
              <div className={styles.tokenGroup}>
                <h4 className="heading-4">Card Interactions</h4>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--surface-card-background)' }}></div>
                  <code>--surface-card-background</code>
                </div>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--surface-card-hover)' }}></div>
                  <code>--surface-card-hover</code>
                </div>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--interactive-card-hover)' }}></div>
                  <code>--interactive-card-hover</code>
                </div>
              </div>
              
              <div className={styles.tokenGroup}>
                <h4 className="heading-4">Rarity Colors</h4>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--text-rarity-uncommon)' }}></div>
                  <code>--text-rarity-uncommon</code>
                </div>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--text-rarity-rare)' }}></div>
                  <code>--text-rarity-rare</code>
                </div>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--text-rarity-holo)' }}></div>
                  <code>--text-rarity-holo</code>
                </div>
              </div>

              <div className={styles.tokenGroup}>
                <h4 className="heading-4">Action Buttons</h4>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--interactive-add-card)' }}></div>
                  <code>--interactive-add-card</code>
                </div>
                <div className={styles.tokenItem}>
                  <div className={styles.colorSwatch} style={{ background: 'var(--interactive-delete-card)' }}></div>
                  <code>--interactive-delete-card</code>
                </div>
              </div>
            </div>
          }
          code={`/* Gaming-specific tokens in Circuit theme */
--surface-card-background: var(--eva-mid-teal);
--surface-card-hover: var(--eva-light-teal);
--text-rarity-uncommon: var(--circuit-neon-blue);
--text-rarity-rare: var(--eva-magenta);
--text-rarity-holo: var(--circuit-rare-gold);
--interactive-add-card: var(--circuit-lime-green);
--interactive-delete-card: #ff6b6b;`}
        />
      </DocsSection>

      <DocsSection title="Integration Guide">
        <p className="body-base">
          Here's how to integrate these gaming enhancements into your Project Arceus application.
        </p>
        
        <DocsExample
          title="Implementation Steps"
          description="How to use the enhanced Circuit theme in your Pokemon card app"
          preview={
            <div className={styles.integrationGuide}>
              <div className={styles.step}>
                <span className="heading-5">1. Set Theme</span>
                <p className="body-small">Apply Circuit theme to your app</p>
              </div>
              <div className={styles.step}>
                <span className="heading-5">2. Use Gaming Classes</span>
                <p className="body-small">Apply card-grid and card-item classes</p>
              </div>
              <div className={styles.step}>
                <span className="heading-5">3. Add Indicators</span>
                <p className="body-small">Use rarity and condition indicators</p>
              </div>
              <div className={styles.step}>
                <span className="heading-5">4. Style Actions</span>
                <p className="body-small">Use gaming-specific button styles</p>
              </div>
            </div>
          }
          code={`// 1. Set Circuit theme in your app
document.documentElement.setAttribute('data-theme', 'circuit');

// 2. Use gaming utility classes
<div className="card-grid">
  <div className="card-item">
    <div className="rarity-indicator holo">Holo</div>
    <img className="card-image" src={card.image} />
    <h3 className="card-name">{card.name}</h3>
    <span className="condition-indicator mint">Mint</span>
  </div>
</div>

// 3. Action buttons
<button className="add-card-button">Add Card</button>
<button className="delete-card-button">Remove</button>`}
        />
      </DocsSection>

      <DocsSection title="Migration from Tailwind">
        <p className="body-base">
          Since Project Arceus currently uses Tailwind CSS, here's how the migration would work.
        </p>
        
        <DocsExample
          title="Before and After"
          description="Comparison of Tailwind vs Enhanced Circuit theme"
          preview={
            <div className={styles.migration}>
              <div className={styles.before}>
                <h4 className="heading-4">Before (Tailwind)</h4>
                <code className={styles.codeBlock}>
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white rounded-lg shadow-md p-4">
    <img className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">Charizard</h3>
    <p className="text-gray-600">#004 • Base Set</p>
    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
      Mint
    </span>
  </div>
</div>`}
                </code>
              </div>
              
              <div className={styles.after}>
                <h4 className="heading-4">After (Circuit Theme)</h4>
                <code className={styles.codeBlock}>
{`<div className="card-grid">
  <div className="card-item">
    <div className="rarity-indicator holo">Holo</div>
    <img className="card-image" src={card.image} />
    <h3 className="card-name">Charizard</h3>
    <p className="card-details">#004 • Base Set</p>
    <span className="condition-indicator mint">Mint</span>
  </div>
</div>`}
                </code>
              </div>
            </div>
          }
          code={`/* Benefits of Circuit theme over Tailwind:
1. Theme-aware: All colors adapt to Circuit theme automatically
2. Semantic: Classes describe purpose, not appearance
3. Gaming-optimized: Built-in rarity/condition systems
4. Consistent: Uses design system tokens
5. Interactive: Enhanced hover/focus states with glows
6. Typography: Monda font system for unique gaming aesthetic
*/`}
        />
      </DocsSection>
    </DocsLayout>
  );
} 