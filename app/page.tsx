'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface Design {
  id: number;
  name: string;
  description: string;
  theme: string;
  colors: string[];
  prompt: string;
}

const predefinedDesigns: Design[] = [
  {
    id: 1,
    name: 'Minimalist Portfolio',
    description: 'Clean, modern portfolio with focus on typography and whitespace',
    theme: 'minimal',
    colors: ['#000000', '#ffffff', '#f5f5f5'],
    prompt: 'A minimalist portfolio website with large typography, generous whitespace, and monochrome color scheme'
  },
  {
    id: 2,
    name: 'Vibrant Startup',
    description: 'Bold, energetic design with gradient backgrounds and modern UI',
    theme: 'vibrant',
    colors: ['#667eea', '#764ba2', '#f093fb'],
    prompt: 'A vibrant startup landing page with gradient backgrounds, bold CTAs, and modern glassmorphism effects'
  },
  {
    id: 3,
    name: 'Dark Mode Pro',
    description: 'Sophisticated dark theme with neon accents and smooth animations',
    theme: 'dark',
    colors: ['#0f0f23', '#00ff88', '#ff006e'],
    prompt: 'A professional dark mode interface with neon accent colors and smooth hover animations'
  },
  {
    id: 4,
    name: 'Nature & Organic',
    description: 'Earth-toned palette with organic shapes and natural imagery',
    theme: 'nature',
    colors: ['#8b7355', '#c8a882', '#4a7c59'],
    prompt: 'An organic, nature-inspired design with earth tones, rounded corners, and botanical elements'
  },
  {
    id: 5,
    name: 'Tech & Futuristic',
    description: 'Cyberpunk aesthetic with glowing elements and sharp edges',
    theme: 'tech',
    colors: ['#00d9ff', '#ff00ff', '#1a1a2e'],
    prompt: 'A futuristic tech interface with cyberpunk aesthetics, glowing borders, and sharp geometric shapes'
  },
  {
    id: 6,
    name: 'Elegant Fashion',
    description: 'Luxurious design with serif fonts and elegant layouts',
    theme: 'fashion',
    colors: ['#d4af37', '#000000', '#f8f8f8'],
    prompt: 'An elegant fashion website with luxury aesthetics, serif typography, and sophisticated color palette'
  }
];

const aiPrompts = [
  'A modern SaaS dashboard with clean data visualizations and professional blue tones',
  'A creative agency portfolio with bold typography and asymmetric layouts',
  'An e-commerce storefront with product focus and conversion-optimized design',
  'A wellness app interface with calming colors and rounded, friendly shapes',
  'A financial platform with trustworthy design, charts, and professional styling',
  'A gaming community site with dynamic animations and vibrant neon effects',
  'A restaurant website with appetizing imagery and warm, inviting colors',
  'A music streaming app with album art focus and dark, immersive interface'
];

export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

  const generateRandomPrompt = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomPrompt = aiPrompts[Math.floor(Math.random() * aiPrompts.length)];
      setCurrentPrompt(randomPrompt);
      setIsGenerating(false);
    }, 1000);
  };

  useEffect(() => {
    generateRandomPrompt();
  }, []);

  const handleDesignClick = (design: Design) => {
    setSelectedDesign(design);
    setCurrentPrompt(design.prompt);
    setViewMode('detail');
  };

  const renderDesignPreview = (design: Design) => {
    switch (design.theme) {
      case 'minimal':
        return (
          <div className={styles.previewMinimal}>
            <div className={styles.minimalHeader}>
              <div className={styles.minimalLogo}></div>
              <div className={styles.minimalNav}></div>
            </div>
            <div className={styles.minimalHero}>
              <div className={styles.minimalTitle}></div>
              <div className={styles.minimalSubtitle}></div>
            </div>
          </div>
        );
      case 'vibrant':
        return (
          <div className={styles.previewVibrant}>
            <div className={styles.vibrantCard}>
              <div className={styles.vibrantIcon}></div>
              <div className={styles.vibrantText}></div>
            </div>
            <div className={styles.vibrantButton}></div>
          </div>
        );
      case 'dark':
        return (
          <div className={styles.previewDark}>
            <div className={styles.darkSidebar}></div>
            <div className={styles.darkContent}>
              <div className={styles.darkCard}></div>
              <div className={styles.darkCard}></div>
            </div>
          </div>
        );
      case 'nature':
        return (
          <div className={styles.previewNature}>
            <div className={styles.natureCircle}></div>
            <div className={styles.natureWave}></div>
            <div className={styles.natureLeaf}></div>
          </div>
        );
      case 'tech':
        return (
          <div className={styles.previewTech}>
            <div className={styles.techGrid}>
              <div className={styles.techBox}></div>
              <div className={styles.techBox}></div>
              <div className={styles.techBox}></div>
            </div>
          </div>
        );
      case 'fashion':
        return (
          <div className={styles.previewFashion}>
            <div className={styles.fashionImage}></div>
            <div className={styles.fashionTitle}></div>
            <div className={styles.fashionLine}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Web Design Showcase</h1>
          <p className={styles.subtitle}>
            Explore beautiful web designs with AI-generated prompts
          </p>
        </header>

        <div className={styles.promptSection}>
          <div className={styles.promptCard}>
            <h3 className={styles.promptTitle}>
              {isGenerating ? 'Generating prompt...' : 'Current Design Prompt'}
            </h3>
            <p className={styles.promptText}>
              {isGenerating ? (
                <span className={styles.loading}>●●●</span>
              ) : (
                currentPrompt
              )}
            </p>
            <button
              className={styles.generateButton}
              onClick={generateRandomPrompt}
              disabled={isGenerating}
            >
              🎲 Generate New Prompt
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className={styles.designGrid}>
            {predefinedDesigns.map((design) => (
              <div
                key={design.id}
                className={styles.designCard}
                onClick={() => handleDesignClick(design)}
              >
                <div className={styles.previewContainer}>
                  {renderDesignPreview(design)}
                </div>
                <div className={styles.designInfo}>
                  <h3 className={styles.designName}>{design.name}</h3>
                  <p className={styles.designDescription}>{design.description}</p>
                  <div className={styles.colorPalette}>
                    {design.colors.map((color, index) => (
                      <div
                        key={index}
                        className={styles.colorSwatch}
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.detailView}>
            <button
              className={styles.backButton}
              onClick={() => setViewMode('grid')}
            >
              ← Back to Grid
            </button>
            {selectedDesign && (
              <div className={styles.detailCard}>
                <div className={styles.detailPreview}>
                  {renderDesignPreview(selectedDesign)}
                </div>
                <div className={styles.detailInfo}>
                  <h2 className={styles.detailName}>{selectedDesign.name}</h2>
                  <p className={styles.detailDescription}>
                    {selectedDesign.description}
                  </p>
                  <div className={styles.detailSection}>
                    <h4>Design Prompt</h4>
                    <p className={styles.detailPrompt}>{selectedDesign.prompt}</p>
                  </div>
                  <div className={styles.detailSection}>
                    <h4>Color Palette</h4>
                    <div className={styles.detailColors}>
                      {selectedDesign.colors.map((color, index) => (
                        <div key={index} className={styles.detailColorItem}>
                          <div
                            className={styles.detailColorSwatch}
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className={styles.colorCode}>{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
