import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({ className = "", variant = "default", children, ...props }) => {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors";
  const variantCls = variant === "ghost" ? "text-primary bg-transparent" : "bg-primary text-primary-foreground";
  return (
    <button data-slot="button" className={cn(base, variantCls, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
