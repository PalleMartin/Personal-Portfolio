import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  pattern?: boolean;
}

export default function Section({ id, title, subtitle, children, className = '', pattern = true }: SectionProps) {
  return (
    <section id={id} className={`section-padding relative overflow-hidden ${className}`}>
      {pattern && <div className="absolute inset-0 grid-pattern opacity-50" />}

      <div className="container-custom relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            {subtitle && (
              <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
