# APEX Detail Lab Design System

A comprehensive design system for the APEX Detail Lab website, providing consistent design tokens, component styles, and utility functions.

## 🎨 Design Tokens

### Colors

#### Brand Colors
- Primary Gradient: `#BF9BF9` → `#3F4390`
- Purple: `#7554A3`
- Light Purple: `#BF9BF9`
- Dark Purple: `#3F4390`

#### Background Colors
- Primary: Black (`#000000`)
- Card Background: `rgba(0, 0, 0, 0.3)`
- Overlay: `rgba(0, 0, 0, 0.7)`

#### Text Colors
- Primary: White (`#FFFFFF`)
- Secondary: `rgba(255, 255, 255, 0.6)`
- Muted: `rgba(255, 255, 255, 0.4)`

### Typography

#### Font Sizes
- xs: 12px (0.75rem)
- sm: 14px (0.875rem)
- base: 16px (1rem)
- lg: 18px (1.125rem)
- xl: 20px (1.25rem)
- 2xl: 24px (1.5rem)
- 3xl: 30px (1.875rem)
- 4xl: 36px (2.25rem)
- 5xl: 48px (3rem)

#### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## 🧩 Components

### Buttons

#### Primary Button
```tsx
import { componentStyles, utils } from '@/styles/design-system';

const PrimaryButton = () => (
  <button className={utils.cx(
    componentStyles.button.base,
    componentStyles.button.primary
  )}>
    Click me
  </button>
);
```

#### Secondary Button
```tsx
const SecondaryButton = () => (
  <button className={utils.cx(
    componentStyles.button.base,
    componentStyles.button.secondary
  )}>
    Click me
  </button>
);
```

### Cards
```tsx
const Card = ({ children }) => (
  <div className={componentStyles.card}>
    {children}
  </div>
);
```

### Icons
```tsx
const IconContainer = ({ children }) => (
  <div className={componentStyles.iconContainer}>
    {children}
  </div>
);
```

## 🛠 Utility Functions

### Combining Classes
```tsx
import { utils } from '@/styles/design-system';

const className = utils.cx(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

### Gradient Background
```tsx
const gradientBg = utils.getGradientBackground('#BF9BF9', '#3F4390', '260.83deg');
```

### RGBA Colors
```tsx
const rgbaColor = utils.getRgbaColor('#BF9BF9', 0.6);
```

## 📐 Spacing Scale
Our spacing scale follows an 8-point grid system:
- 4px (0.25rem)
- 8px (0.5rem)
- 12px (0.75rem)
- 16px (1rem)
- 20px (1.25rem)
- 24px (1.5rem)
- 32px (2rem)
- 40px (2.5rem)
- 48px (3rem)
- 64px (4rem)
- 80px (5rem)

## 🔄 Transitions
- Default: 150ms
- Fast: 100ms
- Slow: 300ms

All transitions use a cubic-bezier timing function: `cubic-bezier(0.4, 0, 0.2, 1)`

## Usage Guidelines

1. **Import Design Tokens**
```tsx
import { designTokens, componentStyles, utils } from '@/styles/design-system';
```

2. **Use in Components**
```tsx
const MyComponent = () => {
  return (
    <div
      style={{
        color: designTokens.colors.text.primary,
        fontSize: designTokens.typography.fontSize.lg,
        padding: designTokens.spacing[4]
      }}
      className={utils.cx(
        componentStyles.text.body,
        'custom-class'
      )}
    >
      Content
    </div>
  );
};
```

3. **Maintain Consistency**
- Always use design tokens instead of hard-coded values
- Follow the spacing scale for margins and padding
- Use the provided utility functions for common operations
- Stick to the defined color palette and typography scale
