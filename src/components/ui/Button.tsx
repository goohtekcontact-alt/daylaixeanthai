import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, style, ...props }, ref) => {
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      borderRadius: "9999px",
      fontWeight: 700,
      fontFamily: "inherit",
      letterSpacing: "0.3px",
      cursor: "pointer",
      border: "none",
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      outline: "none",
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: { padding: "8px 16px", fontSize: "0.85rem", minHeight: "38px" },
      md: { padding: "12px 22px", fontSize: "0.95rem", minHeight: "48px" },
      lg: { padding: "14px 28px", fontSize: "1.05rem", minHeight: "54px" },
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        background: "var(--accent-gradient)",
        color: "#FFFFFF",
        boxShadow: "var(--shadow-primary)",
      },
      secondary: {
        backgroundColor: "var(--primary-light)",
        color: "var(--primary)",
        border: "1px solid rgba(255, 43, 0, 0.2)",
      },
      outline: {
        backgroundColor: "transparent",
        color: "var(--primary)",
        border: "2px solid var(--primary)",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--foreground)",
      },
    };

    return (
      <button
        ref={ref}
        style={{
          ...baseStyle,
          ...sizeStyles[size],
          ...variantStyles[variant],
          ...style,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
