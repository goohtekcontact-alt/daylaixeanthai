import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, style, ...props }, ref) => {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "6px" }}>
        {label && (
          <label style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)" }}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          style={{
            width: "100%",
            minHeight: "42px",
            padding: "10px 14px",
            borderRadius: "10px",
            border: error ? "1.5px solid #EF4444" : "1px solid var(--input-border)",
            backgroundColor: "var(--input-bg)",
            color: "var(--foreground)",
            fontSize: "0.9rem",
            outline: "none",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            ...style,
          }}
          {...props}
        />
        {error && (
          <span style={{ fontSize: "0.8rem", color: "#EF4444", fontWeight: 600 }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
