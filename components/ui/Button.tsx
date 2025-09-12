"use client";
import React from "react";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import { IconType } from "react-icons";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  icon?: IconType;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  variant = "primary",
  icon: Icon,
  className,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary-light text-primary-dark hover:bg-primary/90",
    secondary: "bg-secondary-light text-secondary-dark hover:bg-secondary/90",
    outline:
      "border border-primary-light text-primary-dark bg-transparent hover:bg-primary-light/10",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "group cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-colors duration-300",
        poppins.className,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span>{children}</span>
      {Icon && (
        <span className="flex items-center">
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;
