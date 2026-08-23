import React, { useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  requiredStar?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, requiredStar, style, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "4px" }}>
        {label && (
          <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1E293B" }}>
            {label} {requiredStar && <span style={{ color: "var(--primary)" }}>*</span>}
          </label>
        )}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: isFocused ? "#FFFFFF" : "#F8FAFC",
            borderRadius: "10px",
            border: error
              ? "1.5px solid #EF4444"
              : isFocused
              ? "1.5px solid var(--primary)"
              : "1px solid #E2E8F0",
            boxShadow: isFocused ? "0 0 0 3px rgba(192, 10, 0, 0.12)" : "none",
            transition: "all 0.2s ease",
          }}
        >
          {icon && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "12px",
                color: isFocused ? "var(--primary)" : "#64748B",
                transition: "color 0.2s ease",
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            style={{
              width: "100%",
              height: "40px",
              padding: icon ? "9px 12px 9px 10px" : "9px 12px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "transparent",
              color: "#0F172A",
              fontSize: "16px",
              fontWeight: 500,
              outline: "none",
              fontFamily: "inherit",
              ...style,
            }}
            {...props}
          />
        </div>
        {error && (
          <span style={{ fontSize: "0.75rem", color: "#EF4444", fontWeight: 600 }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
