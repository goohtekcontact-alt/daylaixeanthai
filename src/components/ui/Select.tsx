"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  error?: string;
  options?: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: { target: { value: string; name?: string } }) => void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      error,
      options = [],
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Chọn tùy chọn...",
      name,
      disabled = false,
      style,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string>(
      controlledValue || defaultValue || (options.length > 0 ? options[0].value : "")
    );
    const internalRef = useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (internalRef.current && !internalRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const selectedOption = options.find((opt) => opt.value === currentValue);

    const handleSelect = (optionValue: string) => {
      if (disabled) return;
      setInternalValue(optionValue);
      setIsOpen(false);
      if (onChange) {
        onChange({ target: { value: optionValue, name } });
      }
    };

    return (
      <div
        ref={internalRef}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          position: "relative",
          ...style,
        }}
      >
        {label && (
          <label style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)" }}>
            {label}
          </label>
        )}

        {name && <input type="hidden" name={name} value={currentValue} />}

        {/* Trigger Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "100%",
            minHeight: "42px",
            padding: "10px 14px",
            borderRadius: "10px",
            border: error
              ? "1.5px solid #EF4444"
              : isOpen
                ? "2px solid var(--primary)"
                : "1px solid var(--input-border)",
            backgroundColor: "var(--input-bg)",
            color: selectedOption ? "var(--foreground)" : "#94A3B8",
            fontSize: "0.9rem",
            fontWeight: 600,
            outline: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            boxShadow: isOpen ? "0 0 0 4px rgba(255, 43, 0, 0.12)" : "none",
            transition: "all 0.2s ease",
            textAlign: "left",
          }}
        >
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={18}
            style={{
              color: isOpen ? "var(--primary)" : "#64748B",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
          />
        </button>

        {/* Custom Dropdown Menu Popup */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              right: 0,
              zIndex: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1.5px solid rgba(255, 43, 0, 0.2)",
              boxShadow: "0 16px 36px rgba(0, 0, 0, 0.14)",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {options.map((opt) => {
              const isSelected = opt.value === currentValue;
              return (
                <div
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = "var(--primary-light)";
                      e.currentTarget.style.color = "var(--primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--foreground)";
                    }
                  }}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.925rem",
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? "var(--primary)" : "var(--foreground)",
                    backgroundColor: isSelected ? "var(--primary-light)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />}
                </div>
              );
            })}
          </div>
        )}

        {error && (
          <span style={{ fontSize: "0.8rem", color: "#EF4444", fontWeight: 600 }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
