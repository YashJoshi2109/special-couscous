# HotelShift Pro - Design Tokens Reference

## 🎨 Color System

### Neutral Base (Warm Gray/Slate)
```
50:  #f9fafb
100: #f3f4f6
200: #e5e7eb
300: #d1d5db
400: #9ca3af
500: #6b7280
600: #4b5563
700: #374151
800: #1f2937
900: #111827
```

### Primary Accent (Brand Blue)
```
50:  #eff6ff
100: #dbeafe
200: #bfdbfe
300: #93c5fd
400: #60a5fa
500: #3b82f6  ← Primary brand color
600: #2563eb
700: #1d4ed8
800: #1e40af
900: #1e3a8a
```

### Semantic States

**Success (Green)**
```
50:  #f0fdf4
400: #4ade80
500: #22c55e ← Primary success
600: #16a34a
```

**Warning (Amber)**
```
50:  #fffbeb
400: #facc15
500: #eab308 ← Primary warning
600: #ca8a04
```

**Danger (Red)**
```
50:  #fef2f2
400: #f87171
500: #ef4444 ← Primary danger
600: #dc2626
```

**Info (Cyan)**
```
50:  #f0f9ff
400: #38bdf8
500: #06b6d4 ← Primary info
600: #0891b2
```

## 🎯 Typography

### Font Family
- Primary: Inter / SF Pro / Manrope (pick one, use everywhere)
- Monospace: Menlo / Monaco / Courier New (for numbers, times)

### Type Scales

**Display / H1**
- Size: 32px
- Line Height: 40px
- Weight: Semibold (600)
- Use for: Page titles, major headings

**H2**
- Size: 20px
- Line Height: 28px
- Weight: Semibold (600)
- Use for: Section titles

**Heading (MD)**
- Size: 18px
- Line Height: 26px
- Weight: Semibold (600)
- Use for: Card titles, subheadings

**Body (LG)**
- Size: 16px
- Line Height: 24px
- Weight: Regular (400)
- Use for: Primary content text

**Body (MD)**
- Size: 14px
- Line Height: 22px
- Weight: Regular (400)
- Use for: Secondary content, labels

**Caption (MD)**
- Size: 13px
- Line Height: 20px
- Weight: Medium (500)
- Use for: Meta information, labels

**Caption (SM)**
- Size: 12px
- Line Height: 18px
- Weight: Medium (500)
- Use for: Smallest text, badges

## 📐 Spacing & Layout

### Base Unit: 8px

```
xs: 0.5rem  (8px)
sm: 1rem    (16px)
md: 1.5rem  (24px)
lg: 2rem    (32px)
xl: 3rem    (48px)
```

### Border Radius
```
xs: 8px    (micro elements)
sm: 12px   (inputs, small cards)
base: 16px (standard cards)
lg: 20px   (elevated cards)
xl: 24px   (large surfaces)
```

### Tap Targets
- Minimum: 44×44px (WCAG)
- Spacing: 16px minimum between targets (mobile)

## 💨 Glass Effect

### Container Specification

```css
/* Light glass */
.glass {
  background: rgba(255, 255, 255, 0.10-0.18);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.07),
    0 10px 13px rgba(0, 0, 0, 0.1);
}

/* Dark glass */
.glass-dark {
  background: rgba(20, 20, 20, 0.25-0.35);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: [same as above]
}

/* Medium blur (secondary) */
.glass-md {
  backdrop-filter: blur(16px);
}

/* Small blur (micro) */
.glass-sm {
  backdrop-filter: blur(8px);
}
```

### Elevation Shadows
```
Default: 0 4px 6px rgba(0,0,0,0.07), 0 10px 13px rgba(0,0,0,0.1)
Large:   0 10px 15px rgba(0,0,0,0.1), 0 20px 25px rgba(0,0,0,0.15)
XL:      0 20px 25px rgba(0,0,0,0.15), 0 25px 50px rgba(0,0,0,0.2)
```

## ⚡ Motion

### Timing

```
Fast:     120ms (micro interactions)
Standard: 150ms (default)
Slow:     220ms (panel transitions)
```

### Easing Functions

```
ease-out: cubic-bezier(0.4, 0, 0.2, 1)  ← Preferred
ease-in-out: cubic-bezier(0.4, 0, 0.6, 1)
linear: cubic-bezier(0, 0, 1, 1)
```

### Allowed Animations

- ✅ Card hover lift (4-8px, desktop)
- ✅ Subtle press-in on tap (scale 0.98)
- ✅ Panel transitions (fade + 6-10px move)
- ✅ Timer pulse (every 60s, opacity shift)
- ✅ Spinner (loading indicator)

### Forbidden Animations

- ❌ Excessive parallax
- ❌ Bouncy cartoonish motion
- ❌ Constant shimmer/flicker
- ❌ Over-scale transforms (>1.1x)

## 🔘 Component Tokens

### Button

**Primary Button**
```
Background: primary-600
Text Color: white
Padding: 12px 16px (44px min height)
Radius: 8px
Hover: bg-primary-700
Active: bg-primary-800 + scale-95
Shadow: md (on hover)
```

**Secondary Button**
```
Background: neutral-200
Text Color: neutral-900
Padding: 12px 16px
Radius: 8px
Hover: bg-neutral-300
Active: bg-neutral-400
```

**Tertiary Button**
```
Background: transparent
Text Color: primary-600
Padding: 12px 16px
Hover: bg-primary-100
Active: bg-primary-200
```

### Input Fields

```
Border: 1px solid neutral-200
Padding: 10px 16px
Radius: 8px
Focus: ring-2 ring-primary-500 ring-offset-2
Font Size: 16px (prevent iOS zoom)
```

### Status Chips

```
Padding: 8px 12px
Radius: 12px (fully rounded)
Font: caption-sm, medium weight
Variants:
  - Success: bg-success-100, text-success-700
  - Warning: bg-warning-100, text-warning-700
  - Danger: bg-danger-100, text-danger-700
  - Info: bg-info-100, text-info-700
  - Live: gradient bg with pulse animation
```

### KPI Tile

```
Background: glass elevated
Padding: 24px 16px
Radius: lg (20px)
Content:
  - Label: caption-md, text-neutral-600
  - Value: display-md or heading-lg, bold, primary color
  - Change: caption-sm, semantic color
```

### Glass Card

```
Padding: 16px (sm), 24px (md), 32px (lg)
Radius: xl (24px)
Border: 1px solid rgba(255, 255, 255, 0.16)
Backdrop: blur(24px)
Shadow: glass shadow (default) or glass-lg (elevated)
```

## 📋 Component Library Usage

### GlassUI Components
```tsx
import { GlassCard, StatusChip, KPITile, EmptyState } from '@/components/ui/GlassUI';

// Glass Card
<GlassCard variant="default" | "dark" | "elevated">
  {content}
</GlassCard>

// Status Chip
<StatusChip status="live" | "completed" | "edited" | "pending" | "declined">
  Custom Label
</StatusChip>

// KPI Tile
<KPITile
  label="Hours Today"
  value="8.5h"
  change="+1.5h"
  trend="up" | "down" | "neutral"
/>

// Empty State
<EmptyState
  icon="🎫"
  title="No data"
  description="Try again later"
  action={<Button>Retry</Button>}
/>
```

### Button Component
```tsx
import { Button } from '@/components/ui/Button';

<Button
  variant="primary" | "secondary" | "tertiary" | "danger"
  size="sm" | "md" | "lg"
  isLoading={boolean}
  disabled={boolean}
/>
```

### Modals
```tsx
import { BottomSheet, Drawer } from '@/components/ui/Button';

<BottomSheet isOpen={bool} onClose={fn} title="Title">
  {content}
</BottomSheet>

<Drawer isOpen={bool} onClose={fn} title="Title" side="left" | "right">
  {content}
</Drawer>
```

## 🎬 Animation Examples

### Hover Lift (Desktop)
```css
transition: transform 150ms ease-out, box-shadow 150ms ease-out;
&:hover {
  transform: translateY(-4px);
  box-shadow: /* larger shadow */
}
```

### Press Effect (Mobile)
```css
&:active {
  transform: scale(0.98);
}
```

### Panel Transition
```css
animation: panel-in 300ms ease-out forwards;

@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pulse Animation
```css
animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

## ✅ Accessibility Guidelines

### Color Contrast
- Body text on background: 4.5:1 (AA)
- Headings: 3:1 minimum (AA)
- UI components: 3:1 minimum (AA)

### Typography
- Line spacing: 1.4-1.6 for readability
- Letter spacing: normal (don't compress)
- Max line length: 60-70 characters for body text

### Motion
- Provide `prefers-reduced-motion` media query support
- Default to no animation, enable only if user prefers

### Touch
- Minimum 44×44px tap targets
- 16px spacing between targets
- Clear focus states (visible outline)

## 🔗 Implementation Files

- **Config**: `tailwind.config.ts` (all tokens)
- **Styles**: `src/app/globals.css` (CSS utilities)
- **Components**: `src/components/ui/` (reusable)
- **Theme**: Can extend with Tailwind plugin

---

**Use these tokens consistently across all interfaces for a cohesive, premium product.**
