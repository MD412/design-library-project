'use client';

import React from 'react';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';
import styles from './page.module.css';

// Mock Pokemon card data for demonstration
const mockCards = [
  {
    id: '1',
    name: 'Charizard',
    number: '4/102',
    set: 'Base Set',
    rarity: 'holo',
    condition: 'mint',
    quantity: 1,
    image: '/images/charizard.jpg',
    type: 'Fire',
    power: 'Energy Burn',
    hp: 120,
    attack: 'Fire Spin'
  },
  {
    id: '2',
    name: 'Venusaur',
    number: '15/102',
    set: 'Base Set',
    rarity: 'holo',
    condition: 'good',
    quantity: 1,
    image: '/images/venusaur.jpg',
    type: 'Grass',
    power: 'Energy Trans',
    hp: 100,
    attack: 'Solarbeam'
  },
  {
    id: '3',
    name: 'Blastoise',
    number: '2/102',
    set: 'Base Set',
    rarity: 'holo',
    condition: 'played',
    quantity: 1,
    image: '/images/blastoise.jpg',
    type: 'Water',
    power: 'Rain Dance',
    hp: 100,
    attack: 'Hydro Pump'
  }
];

function PokemonCard({ card }: { card: any }) {
  return (
    <div className={styles.cardItem}>
      <div className={styles.cardImageWrapper}>
        <img 
          src={card.image} 
          alt={`${card.name} - ${card.set} #${card.number}`}
          className={styles.cardImage}
        />
        <div className={styles.rarityIndicator}>
          Holo
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className="card-name">{card.name}</h3>
          <span className="card-stats">{card.hp} HP</span>
        </div>
        <p className="card-details">
          <span className={styles.cardNumber}>#{card.number}</span>
          <span className={styles.cardSetDivider}>•</span>
          <span className={styles.cardSet}>{card.set}</span>
        </p>
        <div className={styles.cardPower}>
          <span className="body-small-strong">Power: </span>
          <span className="body-small">{card.power}</span>
        </div>
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

      <div className={styles.cardGrid}>
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
          code={`<div className={styles.dashboard}>
  <div className={styles.dashboardHeader}>
    <h2>Project Arceus Collection</h2>
    <button className="add-card-button">+ Add Card</button>
  </div>
  
  <div className={styles.stats}>
    <span className="status-in-collection">124 Collected</span>
    <span className="status-missing">27 Missing</span>
    <span className="status-trading">3 Trading</span>
  </div>

  <div className={styles.cardGrid}>
    {cards.map(card => (
      <PokemonCard key={card.id} card={card} />
    ))}
  </div>
</div>`}
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
<div className={styles.cardGrid}>
  <div className={styles.cardItem}>
    <div className={styles.rarityIndicator}>Holo</div>
    <img className={styles.cardImage} src={card.image} />
    <h3 className="card-name">{card.name}</h3>
    <span className="condition-indicator mint">Mint</span>
  </div>
</div>

// 3. Action buttons
<button className="add-card-button">Add Card</button>`}
        />
      </DocsSection>
    </DocsLayout>
  );
} 