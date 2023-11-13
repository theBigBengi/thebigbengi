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
      className={`flex justify-center sticky top-0 z-50 duration-200 border-b ${
        scrollPosition === 0
          ? "bg-transparent border-transparent"
          : " bg-zinc-50 border-zinc-200 "
      }`}
    >
      {cloneElement(children, { scroll: scrollPosition })}
    </header>
  );
};
