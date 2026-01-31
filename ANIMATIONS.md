# Hero Section Animations

This document describes all the Framer Motion animations implemented in the Hero Section.

## 🎬 Animation Library

**Framer Motion** is now installed and configured for smooth, professional animations.

```bash
npm install framer-motion
```

## 🎭 Implemented Animations

### 1. **Hero Title Animation**
- **Effect**: Fade in with slide up
- **Timing**: Sequential - first line appears, then second line
- **Details**: 
  - Main title fades in from below with 0.2s delay
  - Second line follows with 0.4s delay
  - "Dreams" text has a subtle glowing pulse effect

### 2. **Client Rating Section** (Left Side)
- **Effect**: Fade in from left
- **Elements**:
  - **Client Avatars**: Staggered spring animation
    - Each avatar pops in with a spring bounce
    - 0.15s delay between each avatar
    - Plus icon rotates 90° on hover
  - **Rating Text**: Fades in with the container
  - **Down Arrow**: Continuous bounce animation (2s loop)

### 3. **Building Image** (Center)
- **Effect**: Scale in from 0.8 to 1.0
- **Interaction**: Scales up to 1.05 on hover
- **Timing**: 0.8s duration with smooth ease-out

### 4. **Description Text Block** (Right Side)
- **Effect**: Fade in from right
- **Elements**:
  - **Description text**: Fades in from below with 0.6s delay
  - **CTA Button**: 
    - Fades in from below with 0.8s delay
    - Scales up and adds shadow on hover
    - Arrow icon rotates and moves diagonally on hover
    - Slight scale down on click

### 5. **Decorative Elements**
- **Star Icon** (top-left):
  - Continuous rotation and subtle scale animation
  - 8s loop with ease-in-out
  - Rotates between 114° and 134°
  - Scales between 1.0 and 1.1

- **Shape Icons** (decorative):
  - Two small shape icons with gentle rotation
  - Independent animation timings (4s and 5s loops)
  - Creates subtle movement across the hero

## 🎯 Animation Variants

The component uses these reusable animation variants:

```typescript
fadeInUp      // Fade in with upward motion
fadeInLeft    // Fade in from left side
fadeInRight   // Fade in from right side
scaleIn       // Scale up from 0.8 to 1.0
staggerContainer  // Parent container for staggered children
avatarVariant // Spring animation for avatars
```

## 🎨 Interactive Animations

### Hover Effects
- **Building Image**: Subtle zoom (1.05x scale)
- **CTA Button**: Scale up + shadow + arrow movement
- **Plus Icon**: Rotate 90° + scale up
- **Avatar Images**: Can be enhanced with hover effects

### Click Effects
- **CTA Button**: Slight scale down (0.98x) for tactile feedback
- **Plus Icon**: Scale down on tap

## ⚡ Performance

All animations use:
- **GPU-accelerated properties** (transform, opacity)
- **Efficient rendering** with Framer Motion's optimizations
- **Smooth 60fps** animations
- **No layout thrashing** - only animating transform/opacity

## 🔧 Customization

### Adjust Animation Speed

Edit duration values in `src/components/HeroSection.tsx`:

```typescript
// Make animations faster
transition={{ duration: 0.5 }}  // Default: 0.8

// Make animations slower
transition={{ duration: 1.2 }}
```

### Adjust Animation Delays

Change the `delay` property:

```typescript
transition={{ delay: 0.5, duration: 0.8 }}
```

### Disable Specific Animations

Remove or comment out motion props:

```typescript
// Remove animation
<div className="...">  // Instead of <motion.div>
```

### Add New Animations

Use these common patterns:

```typescript
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

// Slide up
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// Scale
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring" }}
>

// Hover effect
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
```

## 📱 Responsive Considerations

Animations work across all devices. Consider:

- Reducing animation complexity on mobile for performance
- Using `prefers-reduced-motion` media query for accessibility
- Testing on lower-end devices

## 🎓 Learn More

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Gesture Animations](https://www.framer.com/motion/gestures/)

## 🚀 Next Steps

Consider adding:
- Scroll-triggered animations for sections below hero
- Page transition animations
- Micro-interactions for form elements
- Loading animations
- Success/error state animations
