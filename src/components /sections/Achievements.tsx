import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { achievements } from '../../data/portfolio';

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones & Recognition">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <achievement.icon className="w-8 h-8 text-primary-400" />
            </div>

            {/* Category Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
              {achievement.category}
            </h3>

            {/* Achievement Items */}
            <ul className="space-y-3">
              {achievement.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="flex items-start gap-3 text-dark-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
