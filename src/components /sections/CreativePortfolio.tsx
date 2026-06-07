import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { creativePortfolio } from '../../data/portfolio';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'photography', label: 'Photography' },
  { id: 'video', label: 'Video Editing' },
];

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function CreativePortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = creativePortfolio.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <Section id="portfolio" title="Creative Portfolio" subtitle="My Creative Work">
      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                : 'glass-button text-dark-300 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <motion.div layout className="masonry">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="masonry-item group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="glass-card overflow-hidden relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full"
                  style={{
                    height: index % 3 === 0 ? '280px' : index % 3 === 1 ? '200px' : '240px',
                    objectFit: 'cover',
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="group-hover:opacity-100 transition-opacity"
                  >
                    <Badge
                      variant={
                        item.category === 'design'
                          ? 'accent'
                          : item.category === 'photography'
                          ? 'primary'
                          : 'default'
                      }
                      className="mb-2"
                    >
                      {item.category === 'design' && 'Design'}
                      {item.category === 'photography' && 'Photography'}
                      {item.category === 'video' && 'Video'}
                    </Badge>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-dark-300">{item.description}</p>
                  </motion.div>
                </div>

                {/* View Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full glass-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 glass-button rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-[70vh] object-contain"
              />

              {/* Info */}
              <div className="p-6 border-t border-white/10">
                <Badge
                  variant={
                    selectedItem.category === 'design'
                      ? 'accent'
                      : selectedItem.category === 'photography'
                      ? 'primary'
                      : 'default'
                  }
                  className="mb-3"
                >
                  {selectedItem.category === 'design' && 'Graphic Design'}
                  {selectedItem.category === 'photography' && 'Photography'}
                  {selectedItem.category === 'video' && 'Video Editing'}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-dark-300">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
