import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My Journey">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/20" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 shadow-glow z-10"
              />

              {/* Content Card */}
              <div className={`w-full lg:w-[calc(50%-2rem)] ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 lg:p-8 group relative overflow-hidden"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500" />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <exp.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <Badge variant="primary" className="mt-1">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-dark-300 border border-white/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternate layout on desktop */}
              <div className="hidden lg:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
