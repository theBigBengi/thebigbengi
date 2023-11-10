"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const background =
    theme === "dark"
      ? `bg-zinc-900/30  border-zinc-800`
      : "bg-zinc-100/80  border-zinc-400 ";

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting ? "bg-zinc-900/0 border-transparent" : background
        }`}
      >
        <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
          <div className='flex justify-between gap-8'>
            <Link
              href='/projects'
              className='duration-200 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='duration-200 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            >
              Contact
            </Link>
          </div>

          <Link
            href='/'
            className='duration-200 text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100'
          >
            <ArrowLeft className='w-6 h-6 ' />
          </Link>
        </div>
      </div>
    </header>
  );
};
