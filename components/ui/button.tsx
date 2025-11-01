import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]",
        destructive:
          "bg-destructive text-white rounded-full shadow-md hover:bg-destructive/90 hover:shadow-lg active:scale-[0.98] focus-visible:ring-destructive/20",
        outline:
          "border-2 border-border rounded-full bg-background shadow-sm hover:bg-accent/50 hover:border-accent hover:text-accent-foreground hover:shadow-md active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full shadow-md hover:bg-secondary/90 hover:shadow-lg active:scale-[0.98]",
        ghost:
          "rounded-lg hover:bg-accent/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-full gap-1.5 px-4 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 rounded-full px-8 text-base has-[>svg]:px-5",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
