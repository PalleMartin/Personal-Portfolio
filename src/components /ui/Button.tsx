import { ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, disabled, onClick, type = 'button' }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg hover:shadow-glow',
      secondary: 'glass-button text-white hover:bg-white/20',
      outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10',
      ghost: 'text-dark-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
