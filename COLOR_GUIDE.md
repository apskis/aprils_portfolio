# Color Palette Configuration Guide

This guide explains how the custom color palette is configured and how to use it with Tailwind CSS v4 and shadcn/ui components.

## Color Palette

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Ivory** | `#D8D9D0` | `216 217 208` | Background/Base color |
| **Black** | `#111410` | `17 20 16` | Primary text, high contrast |
| **Desert Sun** | `#D18C30` | `209 140 48` | Primary buttons, badges, highlights |
| **Tiffany Blue** | `#2897B0` | `40 151 176` | Secondary buttons, links, accents, hover states |

## How It Works

### 1. Tailwind v4 Theme Registration (`app/globals.css`)

We use the `@theme` directive to register colors for Tailwind:

```css
@theme {
  --color-primary: #D18C30;      /* Desert Sun - registered as Tailwind color */
  --color-secondary: #2897B0;    /* Tiffany Blue - registered as Tailwind color */
  --color-background: #D8D9D0;  /* Ivory - registered as Tailwind color */
  --color-foreground: #111410;  /* Black - registered as Tailwind color */
}
```

This allows you to use:
- `bg-primary` (Desert Sun)
- `bg-secondary` (Tiffany Blue)
- `bg-background` (Ivory)
- `text-foreground` (Black)

### 2. Shadcn UI CSS Variables (`@layer base`)

For shadcn components, we use CSS variables in RGB format:

```css
@layer base {
  :root {
    --primary: 209 140 48;        /* RGB values for rgb(var(--primary)) */
    --secondary: 40 151 176;
    --background: 216 217 208;
    --foreground: 17 20 16;
  }
}
```

Shadcn components use these via Tailwind's semantic color classes:
- `bg-primary` → `rgb(var(--primary))` → `rgb(209, 140, 48)`
- `bg-secondary` → `rgb(var(--secondary))` → `rgb(40, 151, 176)`

## Usage Examples

### Using Tailwind Classes Directly

```tsx
// Background colors
<div className="bg-background">      {/* Ivory #D8D9D0 */}
<div className="bg-primary">         {/* Desert Sun #D18C30 */}
<div className="bg-secondary">      {/* Tiffany Blue #2897B0 */}

// Text colors
<p className="text-foreground">      {/* Black #111410 */}
<p className="text-primary">         {/* Desert Sun #D18C30 */}
<p className="text-secondary">       {/* Tiffany Blue #2897B0 */}

// Border colors
<div className="border-primary">     {/* Desert Sun border */}
<div className="border-secondary">   {/* Tiffany Blue border */}
```

### Using with Shadcn Components

#### Button Component

```tsx
import { Button } from "@/components/ui/button";

// Primary button (Desert Sun)
<Button>Click Me</Button>
// Uses: bg-primary text-primary-foreground

// Secondary button (Tiffany Blue)
<Button variant="secondary">Click Me</Button>
// Uses: bg-secondary text-secondary-foreground

// Outline button
<Button variant="outline">Click Me</Button>
// Uses: border-border bg-background hover:bg-accent
```

#### Card Component

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>  {/* text-foreground (Black) */}
  </CardHeader>
  <CardContent>
    {/* Content with text-foreground */}
  </CardContent>
</Card>
// Card uses: bg-card (White), text-card-foreground (Black)
```

#### Badge Component

```tsx
import { Badge } from "@/components/ui/badge";

// Primary badge (Desert Sun)
<Badge>New</Badge>
// Uses: bg-primary text-primary-foreground

// Secondary badge (Tiffany Blue)
<Badge variant="secondary">Featured</Badge>
// Uses: bg-secondary text-secondary-foreground
```

### Custom Class Combinations

```tsx
// Desert Sun button with custom styling
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-md hover:shadow-lg">
  Contact Me
</button>

// Tiffany Blue accent
<div className="border-l-4 border-secondary bg-secondary/5 p-4">
  <p className="text-secondary font-semibold">Featured Content</p>
</div>

// Ivory background with black text
<div className="bg-background text-foreground p-6 rounded-2xl">
  <h2 className="text-2xl font-bold">Section Title</h2>
</div>
```

## Component Color Mapping

### Button Variants

| Variant | Background | Text Color | Usage |
|---------|-----------|------------|-------|
| `default` | Desert Sun (`primary`) | White | Primary CTAs |
| `secondary` | Tiffany Blue (`secondary`) | White | Secondary actions |
| `outline` | Ivory (`background`) | Black (`foreground`) | Tertiary actions |
| `ghost` | Transparent | Black | Subtle actions |
| `link` | Transparent | Desert Sun (`primary`) | Links |

### Card Styling

- **Background**: White (`card`)
- **Text**: Black (`card-foreground`)
- **Border**: Subtle gray (`border`)
- **Shadow**: Custom `shadow-polished` utility

### Semantic Colors

| CSS Variable | Tailwind Class | Color | Used For |
|-------------|----------------|-------|----------|
| `--primary` | `primary` | Desert Sun | Primary buttons, badges, highlights |
| `--secondary` | `secondary` | Tiffany Blue | Secondary buttons, links, accents |
| `--background` | `background` | Ivory | Page background |
| `--foreground` | `foreground` | Black | Primary text |
| `--muted-foreground` | `muted-foreground` | Gray | Secondary text |
| `--accent` | `accent` | Tiffany Blue | Hover states, accents |

## Troubleshooting

### Colors Not Showing?

1. **Check CSS Variables**: Ensure `app/globals.css` is imported in your layout
2. **Verify Theme Registration**: Check that `@theme` block exists in `globals.css`
3. **Check Component Classes**: Verify you're using semantic classes (`bg-primary` not `bg-[#D18C30]`)
4. **Clear Build Cache**: Try `npm run dev` again after changes

### Using Custom Colors Directly

If you need the exact hex codes directly in Tailwind:

```tsx
// Using arbitrary values (not recommended - use semantic colors)
<div className="bg-[#D18C30]">     {/* Desert Sun */}
<div className="bg-[#2897B0]">      {/* Tiffany Blue */}
<div className="bg-[#D8D9D0]">      {/* Ivory */}
<div className="text-[#111410]">   {/* Black */}
```

### Overriding in Components

You can override colors with inline className:

```tsx
<Button className="bg-[#D18C30] hover:bg-[#D18C30]/90">
  Custom Button
</Button>
```

But prefer using semantic classes for consistency:

```tsx
<Button className="bg-primary hover:bg-primary/90">
  Consistent Button
</Button>
```

## Best Practices

1. ✅ **Use Semantic Colors**: Always use `bg-primary`, `text-foreground`, etc.
2. ✅ **Leverage Shadcn Variants**: Use component variants (`variant="secondary"`)
3. ✅ **Consistent Hover States**: Use `/90` opacity for hover (`hover:bg-primary/90`)
4. ✅ **Maintain Contrast**: Ensure text is readable on backgrounds
5. ❌ **Avoid Direct Hex**: Don't use `bg-[#D18C30]` - use `bg-primary` instead

