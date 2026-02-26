# HOLO Design Guidelines

## Design Approach
**Reference-Based + Custom Deep-Tech Aesthetic**: Drawing from Apple's spatial computing presentation style, Tesla's technical specification pages, and SpaceX's mission-critical design language. Theme: "Photonic Intelligence" - emphasizing light-based computing, European sovereignty, and next-generation architecture without revealing proprietary details.

## Core Visual Identity

### Typography
- **Primary Font**: Sora (via Google Fonts CDN)
- **Secondary Font**: Inter (via Google Fonts CDN)
- **Hierarchy**: 
  - Hero H1: Sora Bold, 4xl to 6xl (responsive)
  - Section Headers: Sora SemiBold, 3xl to 4xl
  - Technical Labels: Inter Medium, sm uppercase with letter-spacing
  - Body: Inter Regular, base to lg
  - Data/Specs: Inter Mono for technical numbers

### Color Palette (Dark Mode Professional)
- **Backgrounds**: Deep obsidian (#0A0E1A), Midnight Blue (#0F1729), Slate (#1A1F35)
- **Accents**: Photonic Cyan (#00F0FF), Plasma Violet (#B47EFF)
- **Glassmorphism**: rgba(255,255,255,0.05) with backdrop-blur

### Spacing System
Tailwind units: **4, 8, 12, 16, 24, 32** for consistent rhythm. Generous section padding: py-24 to py-32 desktop, py-16 mobile.

## Page Structure (5 Core Sections)

### 1. Hero Section
- **Layout**: Full viewport (min-h-screen), centered content with floating voxel visualization
- **Content**: 
  - Navigation: Minimal top bar with logo, "The Chip" | "Safety" | "Sovereignty" | "Sustainability" | CTA "Investor Relations"
  - Headline: "Beyond the Screen" (Sora Bold, tracking-tight)
  - Sub-headline: Focus on photonic computing without revealing technical specifics
  - Primary CTA: Glowing cyan button with glassmorphic background
- **Visual**: High-resolution 3D volumetric hologram visualization. Light points floating in dark space.

### 2. The Chip Section (CRITICAL - Main Focus)
- **Layout**: Two-column split with chip visualization and three pillars
- **Content** (Guarded - NO proprietary details):
  - "Photonic Core" - Abstract description of light-based processing
  - "Lightfield Orchestration" - Volumetric precision without revealing algorithms
  - "Secure Compute Envelope" - Security through physics of light
- **FORBIDDEN**: No specific process names, performance metrics, manufacturing methods, or partner names
- **Components**: Technical-looking cards with abstract descriptions that sound impressive but reveal nothing actionable

### 3. Safety Section (Engineered for Trust)
- **Layout**: Centered content block with three feature cards
- **Content**:
  - Human-Safe Operation (certified safety class)
  - Spatial Awareness (active protection)
  - Controlled Energy (managed state)
- **Visual Treatment**: Clean, professional aesthetic with plasma-violet accents
- **FORBIDDEN**: No specific certifications, no specific safety numbers, no algorithm names

### 4. Sovereignty Section (European Leadership)
- **Layout**: Two cards + banner for strategic positioning
- **Content**:
  - Strategic Independence - 100% European supply chain (generic)
  - Next-Generation Architecture - Novel approach (no specifics)
  - European Strategic Vision alignment
- **FORBIDDEN**: No partner names (IMEC, Tyndall), no funding amounts, no roadmap dates, no country-specific manufacturing locations

### 5. Sustainability Section
- **Layout**: Asymmetric split - large text block left, stat cards right
- **Content**:
  - Zero Display Waste - Material-less output
  - Minimal Energy - Photonic efficiency (no specific numbers)
  - Sustainable Design - Longevity focus
- **Visual**: Clean green accent highlights

### 6. Contact Section
- **Layout**: Professional inquiry form (single column, max-w-2xl)
- **Form Fields**: Name, Email, Company, Sector dropdown (Defense/Medical/Enterprise), Message
- **Additional Elements**: Response time indicator, NDA availability badge

## Component Library

### Navigation
Minimal top bar: logo left, text links center, investor CTA right. Glassmorphic background on scroll.

### Buttons
- Primary: Photonic cyan glow with glassmorphic background, blur backdrop
- Secondary: Outlined plasma violet
- On-image buttons: Always with backdrop-blur-md

### Cards
Glassmorphic treatment: border border-white/10, bg-white/5, backdrop-blur-lg, rounded-xl, p-8

### Icons
**Heroicons** (CDN) for UI elements, technical diagram icons custom placeholders

## Images Required

1. **Hero**: Volumetric hologram visualization - voxel-based 3D heart/brain floating in dark space, sharp cyan/violet light points
2. **Technology Section**: HOLO-Chip 1 product shot or technical schematic
3. **Sustainability**: Before/after visual comparing e-waste from screens vs. holographic system
4. **Partner Logos**: IMEC and Tyndall official logos

## Special Effects
- **Glassmorphism**: Consistently applied to cards, navigation, buttons
- **Glow Effects**: Subtle cyan/violet halos on interactive elements (use sparingly)
- **Animations**: Minimal - gentle fade-ins on scroll only, avoid distracting motion

## Accessibility & Trust Elements
- High contrast text (white on dark backgrounds)
- Clear hierarchy for technical specifications
- Safety certifications prominently displayed
- Professional B2B tone throughout (authoritative, not marketing-heavy)