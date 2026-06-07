import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { services } from '../../data/portfolio';

export default function Services() {
  return (
    <Section id="services" title="Services" subtitle="What I Offer">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            {/* Gradient Border on Top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />

            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-dark-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-dark-400">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="ghost" className="!p-0 group/btn">
              <span className="text-primary-400 group-hover/btn:text-primary-300">Learn More</span>
              <ArrowRight className="w-4 h-4 text-primary-400 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
