import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-400/50 to-white  dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4 font-display'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 darkhover:text-zinc-200'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={220}
      />
      <h1 className=' z-10 text-4xl text-transparent duration-1000  bg-black dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0'>
        thebigbengi
      </h1>

      <div className='font-family:Gruppo hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-500 dark:text-zinc-400'>
          Dynamic Full Stack Engineer
        </h2>
      </div>
    </div>
  );
}
