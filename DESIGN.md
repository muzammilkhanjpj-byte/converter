---
name: Aetheric Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#bcd4cd'
  on-tertiary: '#1f3430'
  tertiary-container: '#a1b8b2'
  on-tertiary-container: '#344945'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#d0e8e1'
  tertiary-fixed-dim: '#b4ccc5'
  on-tertiary-fixed: '#091f1b'
  on-tertiary-fixed-variant: '#364b46'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 72px
    fontWeight: '300'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-safe: 5vw
  gutter: 24px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is crafted for a premium, mysterious digital marketplace. It targets creators and innovators looking for high-end AI assets and educational content. The visual language blends **Minimalism** with **Glassmorphism**, creating a sense of depth and exclusivity. 

The emotional response is one of awe and curiosity—inviting users into a "hidden world" of high-quality digital products. The aesthetic is defined by deep, atmospheric landscapes, high-contrast typography, and ethereal lighting effects that mimic the glow of lightning against a dark sky.

## Colors

This design system utilizes a dark-mode-first palette to evoke sophistication and mystery.

- **Primary (Gold Glow):** Used sparingly for primary calls to action and key highlights, reflecting the warm amber tones of the horizon.
- **Secondary (Electric Blue):** Used for interactive states, data visualizations, and accents that mimic the lightning strike.
- **Tertiary (Forest Depth):** A deep, desaturated green used for section backgrounds and surface layering.
- **Neutral:** A range of near-blacks and charcoal grays derived from the mountain shadows to provide structure and contrast.
- **Surface:** Semi-transparent grays with backdrop blurs to maintain the glassmorphic feel.

## Typography

The typography system relies on extreme contrast. For headlines, we use **Epilogue**—while the tokens specify this font, the visual execution should favor a custom calligraphic/gothic treatment for H1 and H2 tags to mirror the provided reference images. These headings should be set with tight tracking and light weights to feel "sharp."

**Manrope** provides a grounded, modern balance for body text, ensuring legibility against dark backgrounds. **JetBrains Mono** is used for technical labels and meta-data, reinforcing the digital/AI nature of the products.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns, 1200px max-width) to create a focused, editorial feel. On mobile, it transitions to a single-column fluid flow with generous vertical breathing room.

- **Generous Whitespace:** Sections are separated by large gaps (160px+) to allow the hero imagery and typography to "breathe" and maintain a premium feel.
- **Rhythm:** Use a baseline of 8px for small component spacing.
- **Safe Areas:** Horizontal margins are set to 5vw to ensure content never feels cramped against the edge of the viewport.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Ambient Shadows**.

- **Layers:** Backgrounds use the landscape image with a dark overlay. The primary content sits on "Level 1" surfaces—semi-transparent dark tiles with a `20px` backdrop blur and a `1px` subtle border (Gold or White at 10% opacity).
- **Shadows:** Instead of traditional black shadows, use "Glow Shadows" for interactive elements. These are ultra-diffused (40px-60px blur) using the Primary Gold or Secondary Blue at very low (5-10%) opacity.
- **Interactions:** Hovering over a card should increase the border opacity and the intensity of the backdrop blur, rather than lifting the element physically.

## Shapes

The shape language is "Soft" yet precise. Elements use a consistent `0.25rem` (4px) base radius. This minimal rounding maintains a professional, sharp edge that aligns with the gothic typography while avoiding the harshness of 0px corners.

- **Buttons:** Use the base `rounded` (4px) for a structured look.
- **Cards:** Use `rounded-lg` (8px) to soften larger surface areas.
- **Decorative Elements:** Use perfectly sharp (0px) lines for separators and grid accents to contrast with the soft blurs of the glassmorphic panels.

## Components

- **Primary Buttons:** High-contrast Gold (#D4AF37) background with black text. No border. On hover, add an electric blue outer glow.
- **Ghost Buttons:** 1px white border at 20% opacity. Text in white. Hover state fills the background with a 10% white tint.
- **Product Cards:** Featured products sit in glassmorphic containers. The image is the hero, with a subtle gradient overlay at the bottom to ensure the Gothic-style title remains readable.
- **Input Fields:** Darker than the background surface, using a subtle `1px` bottom-border only. Focus state triggers a thin Electric Blue glow.
- **Chips/Tags:** Using **JetBrains Mono**, these should be small, outlined capsules with high letter spacing to act as metadata markers for "AI REELS" or "TEMPLATES."
- **Hero Section:** Must utilize the provided landscape image. The heading should be centered, utilizing the gothic calligraphic style, with a subtle "fog" overlay at the bottom to transition into the next content section.