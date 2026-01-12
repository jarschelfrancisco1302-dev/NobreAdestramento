import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  icon, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-sm sm:text-base py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nobre-dark disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-nobre-green hover:bg-green-600 text-white shadow-lg shadow-green-900/20",
    secondary: "bg-nobre-gold hover:bg-yellow-600 text-nobre-dark shadow-lg shadow-yellow-900/20",
    outline: "border-2 border-nobre-gold text-nobre-gold hover:bg-nobre-gold hover:text-nobre-dark",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;