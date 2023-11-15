"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className='overflow-hidden relative  border rounded-xl hover:bg-zinc-100/10 group md:gap-8 hover:border-zinc-500/50 border-zinc-300 dark:hover:bg-zinc-800/10 group dark:hover:border-zinc-400/50 dark:border-zinc-600 '
    >
      <div className='pointer-events-none'>
        <div className='absolute inset-0 z-0  transition  [mask-image:linear-gradient(black,transparent)]' />
        <motion.div
          className='absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-900/10 dark:via-zinc-100/10    transition group-hover:opacity-50 '
          style={style}
        />
        <motion.div
          className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition  group-hover:opacity-100'
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
