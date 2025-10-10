import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white rounded-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all duration-200",
        destructive: "bg-gradient-to-r from-destructive to-destructive/90 text-white rounded-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-destructive/20 active:scale-[0.98]",
        outline: "border border-input bg-background/80 backdrop-blur-sm text-foreground rounded-lg hover:bg-accent/10 hover:border-primary/30 hover:scale-[1.02] active:scale-[0.98]",
        secondary: "bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground rounded-lg hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        ghost: "text-foreground rounded-lg hover:bg-accent/50 hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline hover:scale-[1.02] active:scale-[0.98]",
        gradient: "bg-gradient-to-r from-primary via-accent/90 to-primary text-white rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/25 active:scale-[0.98] relative overflow-hidden",
        premium: "bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 text-white rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98] font-semibold",
        success: "bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98]",
        info: "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98]",
        business: "bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-700/40 active:scale-[0.98] font-semibold",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
