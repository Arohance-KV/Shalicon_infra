
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#1a1a1a] text-white",
    outline: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
      )}
    </button>
  );
};

export default Button;
