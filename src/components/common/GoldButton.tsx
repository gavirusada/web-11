import React from 'react';
import { Link } from 'react-router-dom';

interface GoldButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wider uppercase text-xs sm:text-sm select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs sm:text-sm gap-2",
    lg: "px-8 py-4 text-sm sm:text-base gap-2.5 tracking-widest",
  }[size];

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#E5C982] to-[#C9A45C] text-[#101010] font-semibold hover:shadow-[0_0_20px_rgba(201,164,92,0.4)] hover:brightness-105 active:scale-[0.99] border border-[#E5C982]",
    outline: "bg-transparent text-[#E5C982] border border-[#C9A45C]/60 hover:border-[#E5C982] hover:bg-[#C9A45C]/10 hover:text-[#F5F0E7] active:scale-[0.99]",
    ghost: "bg-transparent text-[#F5F0E7] hover:text-[#E5C982] hover:bg-white/5",
    dark: "bg-[#202020] text-[#F5F0E7] border border-[#C9A45C]/30 hover:border-[#C9A45C] hover:bg-[#282828] active:scale-[0.99]",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className} group`}
    >
      {content}
    </button>
  );
};
