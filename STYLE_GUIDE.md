# Portfolio Style Guide

This document outlines the styling approach for the polished portfolio design using shadcn/ui components.

## Color Palette

### Primary Colors
- **Ivory** (`#D8D9D0`): Background/base color
- **Black** (`#111410`): Primary text and high-contrast elements
- **Desert Sun** (`#D18C30`): Primary CTA buttons, highlights, badges
- **Tiffany Blue** (`#2897B0`): Secondary CTA, links, hover states, accents

### CSS Variables
These are configured in `app/globals.css`:
```css
--primary: 209 140 48;        /* Desert Sun */
--secondary: 40 151 176;      /* Tiffany Blue */
--background: 216 217 208;     /* Ivory */
--foreground: 17 20 16;        /* Black */
```

## Component Styling Examples

### Card Component

**Polished Card (Default):**
```tsx
<Card className="border-0 shadow-polished">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

**Product Card with Gradient:**
```tsx
<Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent transition-all hover:border-secondary/40 hover:shadow-md">
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

**Feature Card (Small):**
```tsx
<Card className="border-2 border-secondary/20 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

### Button Component

**Primary Button (Desert Sun):**
```tsx
<Button size="lg">
  Contact for Partnerships
</Button>
```
- Uses `rounded-full` (pill shape)
- Desert Sun background (`bg-primary`)
- Enhanced shadow with hover effects
- Active scale animation

**Secondary/Outline Buttons:**
```tsx
<Button variant="outline" size="sm">
  Platform Name
</Button>
```
- Also uses `rounded-full`
- Border with hover color change
- Subtle shadow on hover

**Navigation Buttons:**
```tsx
<Button
  asChild
  variant={pathname === link.href ? "default" : "ghost"}
  size="sm"
  className={pathname === link.href && "bg-secondary hover:bg-secondary/90 shadow-md"}
>
  <Link href={link.href}>Home</Link>
</Button>
```

### Profile Card Example

```tsx
<Card className="border-0 shadow-polished">
  <CardContent className="pt-8 pb-8">
    {/* Profile Photo with Ring */}
    <div className="h-48 w-48 overflow-hidden rounded-full ring-4 ring-secondary/20 ring-offset-4 ring-offset-background">
      <Image src="/profile.jpg" alt="Profile" width={192} height={192} />
    </div>
    
    {/* Badge */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg ring-2 ring-primary/20">
      120K+ Students
    </div>
    
    {/* Contact Button */}
    <Button className="mb-4 w-full" size="lg">
      📧 Contact for Partnerships
    </Button>
  </CardContent>
</Card>
```

## Utility Classes

### Shadows
- `.shadow-polished`: Enhanced shadow for cards (default card style)
- `.shadow-soft`: Subtle shadow (defined in globals.css)
- `.shadow-lg`: Standard large shadow
- `.shadow-xl`: Extra large shadow for hover states

### Borders
- `border-0`: Remove borders for cleaner look
- `border-2`: Thicker borders for emphasis
- `border-secondary/20`: Subtle colored borders
- `border-primary/20`: Primary color borders

### Rounded Corners
- `rounded-2xl`: Standard for all cards (8px radius)
- `rounded-full`: For buttons and badges (pill shape)

### Spacing
- Cards: `px-6 py-6` for CardContent
- Sections: `space-y-8` for main content areas
- Lists: `space-y-2.5` or `space-y-3` for better readability

## Hover Effects

**Card Hover:**
```tsx
className="transition-all hover:shadow-xl hover:scale-[1.02]"
```

**Button Hover:**
Built into Button component with:
- Shadow enhancement: `hover:shadow-lg`
- Active state: `active:scale-[0.98]`
- Color transitions for all variants

## Typography

**Headings:**
- Section titles: `text-3xl font-bold`
- Card titles: `text-2xl font-bold`
- Subheadings: `text-lg font-bold`

**Body Text:**
- Default: `text-muted-foreground`
- Leading: `leading-relaxed` for paragraphs
- Size: `text-sm` for secondary content

## Gradient Backgrounds

**Product Cards:**
```tsx
className="bg-gradient-to-br from-secondary/5 to-transparent"
```

**Accent Cards:**
```tsx
className="bg-gradient-to-br from-primary/5 to-transparent"
```

## Best Practices

1. **Consistency**: Always use `border-0 shadow-polished` for main cards
2. **Interactivity**: Add hover effects (`hover:shadow-xl hover:scale-[1.02]`) to interactive cards
3. **Color Usage**: 
   - Use `primary` (Desert Sun) for main CTAs
   - Use `secondary` (Tiffany Blue) for links and secondary actions
4. **Spacing**: Maintain consistent padding (`p-6` for card content)
5. **Typography**: Use `font-bold` for headings, `text-muted-foreground` for body text
6. **Buttons**: Always use appropriate size (`sm`, `default`, `lg`) based on context

