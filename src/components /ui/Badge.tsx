import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white',
    primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
    secondary: 'bg-white/5 text-dark-300',
    accent: 'bg-accent-500/20 text-accent-400 border border-accent-500/30',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
