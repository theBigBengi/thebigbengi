"use client";
import { useState, useEffect, ReactElement } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

interface ToggleIconProps {
  children: ReactElement;
  themeValue: string;
}

const ToggleIcon = ({ children, themeValue }: ToggleIconProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <span
      className={`${
        theme === themeValue
          ? "bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
          : ""
      } p-2 rounded-full dark:text-zinc-400 `}
      onClick={() => {
        setTheme(themeValue);
      }}
    >
      {children}
    </span>
  );
};

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`flex gap-3 w-fit  right-4 bottom-2  p-2 rounded-md duration-1000`}
    >
      <ToggleIcon themeValue='light'>
        <Sun className='w-5 h-5' />
      </ToggleIcon>
      <ToggleIcon themeValue='dark'>
        <Moon className='w-5 h-5' />
      </ToggleIcon>
      <ToggleIcon themeValue='system'>
        <Monitor className='w-5 h-5' />
      </ToggleIcon>
    </div>
  );
};
