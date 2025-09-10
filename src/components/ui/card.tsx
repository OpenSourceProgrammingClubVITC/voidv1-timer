import * as React from "react"

// Shared Liquid Glass Card
// Ensures consistent padding, border, blur, and hover across sections

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={[
      "liquid-container",
      "rounded-2xl",
      "bg-white/5",
      "border border-white/10",
      "backdrop-blur-xl",
      "transition-all duration-300",
      "hover:bg-white/10",
      "hover:border-white/20",
      "p-5 sm:p-6",
      className
    ].filter(Boolean).join(" ")}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
