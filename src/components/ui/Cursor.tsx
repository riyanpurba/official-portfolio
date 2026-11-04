import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Follower cursor for mouse users; elements opt in with data-cursor="Label". Native cursor stays visible.
export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState('');
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setFine(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest?.('[data-cursor]') as HTMLElement | null;
      setLabel(el?.dataset.cursor ?? '');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [x, y]);

  if (!fine) return null;
  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[90]" style={{ x: sx, y: sy }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-semibold text-bg"
        animate={{ width: label ? 88 : 12, height: label ? 88 : 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};
