import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Slideshow from './components/Slideshow';
import BentoGrid from './components/BentoGrid';

export default function App() {
  const [mode, setMode] = useState<'slideshow' | 'bento'>('slideshow');

  return (
    <div className="w-full h-screen bg-[var(--color-bg-main)] text-[var(--color-ink)] overflow-hidden editorial-grain">
      <AnimatePresence mode="wait">
        {mode === 'slideshow' ? (
          <motion.div
            key="slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55 }}
            className="w-full h-full"
          >
            <Slideshow onComplete={() => setMode('bento')} />
          </motion.div>
        ) : (
          <motion.div
            key="bento"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full h-full overflow-y-auto"
          >
            <BentoGrid />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
