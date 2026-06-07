import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { skills } from '../../data/portfolio';

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="What I Do Best" pattern={false}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 group relative overflow-hidden"
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skillCategory.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <skillCategory.icon className="w-7 h-7 text-white" />
            </div>

            {/* Category Title */}
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
              {skillCategory.category}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <Badge key={skill} variant="secondary" className="hover:bg-white/10 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
