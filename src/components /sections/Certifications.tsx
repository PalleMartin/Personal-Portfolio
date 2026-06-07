import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { certifications } from '../../data/portfolio';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Professional Credentials">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500 to-primary-500/50" />

        {/* Certifications Grid */}
        <div className="space-y-8 md:space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-center gap-4 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-glow z-10"
              />

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-card p-6 group relative overflow-hidden"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500`} />

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <cert.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{cert.category}</Badge>
                        <span className="text-xs text-dark-500">{cert.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-dark-400 mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
