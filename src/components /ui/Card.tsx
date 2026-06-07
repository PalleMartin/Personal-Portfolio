import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, glow = false, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        glass-card p-6
        ${hover ? 'cursor-pointer' : ''}
        ${glow ? 'hover:shadow-glow' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
