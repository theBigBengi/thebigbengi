"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactElement;
};
export const Navigation: React.FC<Props> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center backdrop-blur   sticky top-0 z-50 duration-300 border-b ${
        scrollPosition === 0
          ? "bg-transparent border-transparent"
          : " bg-zinc-50/50 border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-700"
      }`}
    >
      {cloneElement(children, { scroll: scrollPosition })}
    </header>
  );
};
