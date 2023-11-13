"use client";

import * as React from "react";
import { Navigation } from "../components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface Props {
  scroll?: number;
}

export const Nav: React.FC<Props> = ({ scroll }) => {
  console.log(scroll);
  console.log("scroll");

  return (
    <div className='container max-w-7xl flex flex-row-reverse items-center justify-between p-6 '>
      <div
        className={`flex justify-between gap-8 ${
          scroll === 0 ? "" : "text-zinc-900"
        }`}
      >
        <Link
          href='/projects'
          className={`duration-200 text-zinc-400 hover:text-zinc-100 ${
            scroll === 0 ? "" : "text-zinc-900"
          }`}
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className={`duration-200 text-zinc-400 hover:text-zinc-100 ${
            scroll === 0 ? "" : "text-zinc-900"
          }`}
        >
          Contact
        </Link>
      </div>

      <Link
        href='/'
        className={`duration-200 text-zinc-300 hover:text-zinc-100 ${
          scroll === 0 ? "" : "text-zinc-900"
        }`}
      >
        <ArrowLeft className='w-6 h-6 ' />
      </Link>
    </div>
  );
};
