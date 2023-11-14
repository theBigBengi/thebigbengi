"use client";
import { ArrowLeft, Eye, Github, Twitter, MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
    imgSrc?: string;
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
    <div className='md:col-span-3  bg-zinc-50 md:border-r border-zinc-200 min-h-screen'>
      {project.imgSrc && (
        <div className='block md:hidden pt-12 w-full h-[400px]'>
          <img className=' h-full w-full' src={project.imgSrc} alt='' />
        </div>
      )}

      <div className='md:px-6 lg:px-8 pt-8  container sticky md:top-28 md:py-6 md:pr-12 mx-auto'>
        <div className='flex flex-wrap gap-x-1.5 gap-y-1.5'>
          <div className='px-3   py-1 rounded-full text-[10px] md:text-[11px]  text-white bg-blue-500'>
            Frontend
          </div>
          <div className='px-3   py-1 rounded-full text-[10px] md:text-[11px] text-white bg-blue-500'>
            Backend
          </div>
          <div className='px-3   py-1 rounded-full text-[10px] md:text-[11px] text-white bg-blue-500'>
            CMS
          </div>
          <div className='px-3   py-1 rounded-full text-[10px] md:text-[11px] text-white bg-blue-500'>
            Styles
          </div>
          <div className='px-3   py-1 rounded-full text-[10px] md:text-[11px] text-white bg-blue-500'>
            Frontend
          </div>
        </div>

        <div className='pt-5  flex flex-col items-stretch gap-4 '>
          <div className='max-w-2xl lg:mx-0'>
            <h1 className='text-3xl md:text-6xl  font-bold tracking-tight text-zinc-900  font-display'>
              {project.title}
            </h1>
          </div>

          <p className='text-md  leading-5 text-zinc-600 font-normal'>
            {project.description}
          </p>

          <div
            className={`-m-4 flex flex-wrap text-base font-semibold leading-7 text-zinc-600 `}
          >
            {links.map((link) => (
              <div
                className='basis-1/2 p-4 [&>a]:hover:bg-zinc-200 [&>a]:first:text-zinc-50 [&>a]:first:bg-zinc-900 [&>a]:first:hover:bg-zinc-700'
                key={link.label}
              >
                <Link
                  target='_blank'
                  href={link.href}
                  className='h-10  text-sm  border-zinc-200 border rounded-md flex flex-col justify-center items-center'
                >
                  {link.label}
                  {/* <span aria-hidden='true'>& rarr;</span> */}
                </Link>
              </div>
            ))}
          </div>

          <div className='text-sm text-zinc-500'>
            <div className='flex justify-between pb-2.5'>
              <span className='font-semibold'>Framework</span>
              <div>
                <a className=''>Nextjs</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5 '>
              <span className='font-semibold'>Database</span>
              <div>
                <a className=''>Upstash</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5'>
              <span className='font-semibold'>Use Case</span>
              <div>
                <a className=''>Dashboard</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5'>
              <span className='font-semibold'>CSS</span>
              <div>
                <a className=''>Tailwind</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5 '>
              <span className='font-semibold'>Database</span>
              <div>
                <a className=''>Upstash</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5'>
              <span className='font-semibold'>Use Case</span>
              <div>
                <a className=''>Dashboard</a>
              </div>
            </div>
            <div className='flex justify-between border-t border-zinc-200 py-2.5'>
              <span className='font-semibold'>CSS</span>
              <div>
                <a className=''>Tailwind</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
