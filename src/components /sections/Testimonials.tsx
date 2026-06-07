import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Section from '../ui/Section';
import { testimonials } from '../../data/portfolio';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" title="Testimonials" subtitle="What People Say" pattern={false}>
      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <motion.div
          layout
          className="glass-card p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Quote Icon */}
          <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-500/10" />

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-glow">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-dark-200 italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-dark-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Grid (Desktop only) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.name}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? 'glass-card shadow-glow border-primary-500/30'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-white truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-dark-400 truncate">
                    {testimonial.role.split(',')[0]}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}
