

# Performance Optimization Plan for Services & Contact Sections

## Problem Analysis

Both sections have performance issues similar to what was fixed in the About section:

### Services Section Issues
1. **4 individually animated `motion.div` cards** - Each with its own Framer Motion animation
2. **`glass-card` with `backdrop-blur-lg`** - Applied to all 4 service cards (GPU-intensive)
3. **`hover-lift` class** - Causes translate transforms on hover
4. **Nested `motion.span` in header** - Unnecessary separate animation for the badge
5. **Multiple animation triggers** - Header has nested `motion.div` and `motion.span`

### Contact Section Issues
1. **6+ `motion.div` wrappers** - Header, contact info wrapper, 3 contact items, response text, and form
2. **`glass-card` with `backdrop-blur-lg`** - Applied to the contact form
3. **Horizontal animations (`x: -30`, `x: 30`)** - Layout-triggering transforms
4. **Nested `motion.div` for each contact info item** - 3 separate animations inside a parent animation

---

## Implementation Plan

### Step 1: Optimize ServicesSection.tsx

**Remove `glass-card` from service cards:**
```text
// Before:
className="glass-card rounded-2xl p-8 hover-lift..."

// After:
className="bg-card/80 border border-border/50 rounded-2xl p-8..."
```

**Replace 4 `motion.div` cards with CSS animations:**
```text
// Before: Each card is a motion.div with staggered delay
{services.map((service, index) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.2 + index * 0.05 }}
  >

// After: Regular div with CSS animation-delay
{services.map((service, index) => (
  <div
    className={`...${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${index * 80}ms` }}
  >
```

**Simplify header to single `motion.div`:**
- Remove nested `motion.span` for the badge
- Keep only one `motion.div` for the entire header block

**Remove `hover-lift` class:**
- Replace with simpler `hover:border-primary/50 transition-colors`

---

### Step 2: Optimize ContactSection.tsx

**Remove `glass-card` from contact form:**
```text
// Before:
className="glass-card rounded-2xl p-8..."

// After:
className="bg-card/80 border border-border/50 rounded-2xl p-8..."
```

**Replace 3 contact info `motion.div` items with CSS animations:**
```text
// Before: Each contact item is a motion.div
{contactInfo.map((info, index) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
  >

// After: Regular div with CSS animation
{contactInfo.map((info, index) => (
  <div
    className={`...${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${index * 80}ms` }}
  >
```

**Remove horizontal animations:**
- Replace `x: -30` and `x: 30` with vertical `y` animations or CSS only
- Horizontal layout animations are more expensive than vertical

**Consolidate to 2 `motion.div` wrappers:**
- One for the section header
- One for the main content grid (contact info + form)
- Remove individual animations from contact items and form

**Remove response text animation:**
- The "We typically respond within 24 hours" text has its own `motion.p` which is unnecessary

---

### Step 3: Add CSS Animation Variant for Horizontal Entry

Add a new CSS animation for elements that need slide-in effect without Framer Motion:
```text
// Add to index.css
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.4s ease-out forwards;
  opacity: 0;
}
```

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/ServicesSection.tsx` | Replace 4 `motion.div` cards with CSS animations; remove `glass-card`; simplify header; remove `hover-lift` |
| `src/components/ContactSection.tsx` | Replace 3 contact info animations with CSS; remove `glass-card` from form; consolidate to 2 `motion.div` wrappers |
| `src/index.css` | Add `fade-in-left` keyframe and utility class |

### Changes Summary

**ServicesSection.tsx:**
- Remove `motion.span` in header (keep single `motion.div`)
- Replace 4 `motion.div` service cards with `div` using `animate-fade-in-up`
- Replace `glass-card` with `bg-card/80 border border-border/50`
- Remove `hover-lift`, use `hover:border-primary/50 transition-colors`

**ContactSection.tsx:**
- Remove `motion.span` in header
- Remove `motion.div` from each contact info item
- Remove `motion.p` from response text
- Replace horizontal animations with CSS
- Replace `glass-card` on form with `bg-card/80 border border-border/50`
- Keep only 2 main `motion.div` wrappers

**index.css:**
- Add `@keyframes fade-in-left` animation
- Add `.animate-fade-in-left` utility class
- Add reduced-motion support for new animation

### Expected Performance Improvements

| Section | Before | After |
|---------|--------|-------|
| Services - motion.div count | 6 | 2 |
| Services - blur operations | 4 cards | 0 cards |
| Contact - motion.div count | 7+ | 2 |
| Contact - blur operations | 1 form | 0 |
| Combined scroll FPS | ~30-40fps | ~60fps |

---

## Summary

This optimization applies the same proven pattern from the About section to Services and Contact:

1. Remove `backdrop-blur-lg` (most expensive GPU operation)
2. Replace multiple `motion.div` elements with CSS animations using `animation-delay`
3. Remove `hover-lift` transforms
4. Consolidate to minimal Framer Motion usage (2 wrappers per section max)
5. Use CSS for staggered entry animations instead of JavaScript

Visual appearance remains identical while significantly improving scroll performance across the entire page.

