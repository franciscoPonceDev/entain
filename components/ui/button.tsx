import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", ...props },
    ref
  ) {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-transparent";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "bg-sky-600 hover:bg-sky-500 text-white shadow/50 shadow-sky-900/20",
      secondary:
        "bg-slate-700 hover:bg-slate-600 text-slate-100 shadow/50 shadow-slate-900/20",
      ghost: "bg-transparent hover:bg-white/5 text-slate-100",
      gold:
        "bg-[#CAB167] text-slate-900 font-semibold shadow-[0_8px_24px_rgba(202,177,103,0.35)] hover:bg-[#D4BB78]",
      outline: "bg-transparent border border-white text-white hover:bg-white/10",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-9 w-9",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className, 'cursor-pointer')}
        {...props}
      />
    );
  }
);


