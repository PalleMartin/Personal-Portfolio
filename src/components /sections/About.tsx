import { motion } from 'framer-motion';
import { Code2, Brain, Palette, Video, Award, Briefcase, FolderOpen, Film } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Section from '../ui/Section';
import { stats } from '../../data/portfolio';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="space-y-12 lg:space-y-16">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-dark-300 text-lg leading-relaxed">
              I'm a Computer Science and Engineering professional passionate about building
              impactful digital experiences. My expertise spans multiple domains, allowing me
              to create comprehensive solutions that bridge technology and creativity.
            </p>
            <p className="text-dark-300 leading-relaxed">
              From developing scalable web applications and AI-powered systems to creating
              compelling visual designs and professional video content, I bring a unique
              multi-disciplinary approach to every project. I believe in the power of
              combining technical excellence with creative vision to solve real-world problems.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, label: 'Full Stack Development', desc: 'Modern web apps' },
              { icon: Brain, label: 'AI & Machine Learning', desc: 'Intelligent solutions' },
              { icon: Palette, label: 'Graphic Design', desc: 'Visual identities' },
              { icon: Video, label: 'Video Production', desc: 'Compelling stories' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 group hover:shadow-glow transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                <p className="text-sm text-dark-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dark-400 italic border-l-2 border-primary-500 pl-4"
          >
            "Transforming ideas into intelligent software, compelling designs, and engaging
            digital experiences."
          </motion.p>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-16"
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}

function StatCard({
  label,
  value,
  suffix,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const icons = [FolderOpen, Award, Briefcase, Palette, Film];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-300"
    >
      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-primary-400" />
      </div>
      <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-dark-400">{label}</p>
    </motion.div>
  );
}

