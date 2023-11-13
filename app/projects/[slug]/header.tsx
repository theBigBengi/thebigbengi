"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };

  views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "View Demo",
      href: project.url,
    });
  }

  return (
    <div className='md:col-span-3  bg-zinc-50 md:border-r border-zinc-200'>
      <div className='container sticky top-16 md:py-6 md:pr-12 mx-auto'>
        <div className='pt-8 md:px-6 lg:px-8  flex flex-col items-stretch gap-4 '>
          <div className='max-w-2xl lg:mx-0'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl font-display'>
              {project.title}
            </h1>
          </div>

          <p className='text-sm leading-8 text-zinc-600'>
            {project.description}
          </p>

          <div
            className={`-m-4 flex flex-wrap text-base font-semibold leading-7 text-zinc-600 `}
          >
            {links.map((link) => (
              <div className='basis-1/2 p-4 ' key={link.label}>
                <Link
                  target='_blank'
                  href={link.href}
                  className='h-10  first:text-zinc-100 first:bg-zinc-900  text-sm  border-zinc-400 border rounded-md flex flex-col justify-center items-center'
                >
                  {link.label}
                  {/* <span aria-hidden='true'>& rarr;</span> */}
                </Link>
              </div>
            ))}
          </div>

          <div className='text-sm '>
            <div className='flex justify-between pb-2.5'>
              <span className='font-bold'>Framework</span>
              <div>
                <a className='text-zinc-700'>Nextjs</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5 '>
              <span className='font-bold'>Framework</span>
              <div>
                <a className='text-zinc-700'>Nextjs</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5'>
              <span className='font-bold'>Framework</span>
              <div>
                <a className='text-zinc-700'>Nextjs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
