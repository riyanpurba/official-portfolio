import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Decorative infinite ticker. Content is duplicated once for a seamless loop.
export const Marquee = ({ children, duration = 40, reverse = false, className = '' }: { children: ReactNode; duration?: number; reverse?: boolean; className?: string }) => (
  <div aria-hidden="true" className={`overflow-hidden ${className}`}>
    <motion.div className="flex w-max whitespace-nowrap" animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }} transition={{ duration, ease: 'linear', repeat: Infinity }}>
      <div className="flex shrink-0">{children}</div>
      <div className="flex shrink-0">{children}</div>
    </motion.div>
  </div>
);
