"use client";
import { GithubIcon } from "@/app/components/githubIcon";
import { ArrowLeft, Eye, Github, Twitter, MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { startCase } from "lodash";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
    imgSrc?: string;
    stack?: { [key: string]: string };
    tags?: string[];
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
    <div className='md:col-span-3  md:border-r border-zinc-200 md:min-h-screen'>
      {project.imgSrc && (
        <div className='block md:hidden pt-12 w-full h-[400px]'>
          <img className=' h-full w-full' src={project.imgSrc} alt='' />
        </div>
      )}

      <div className='md:px-6 lg:px-8 pt-8  container sticky md:top-28 md:py-6 md:pr-12 mx-auto'>
        {project.tags && (
          <div className='flex flex-wrap gap-x-1.5 gap-y-1.5'>
            {project.tags.map((tag) => (
              <div
                key={tag}
                className='px-3   py-1 rounded-full text-[11px] md:text-[11px]  text-white bg-blue-500 dark:bg-blue-600/620'
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        <div className='pt-5  flex flex-col items-stretch gap-4 '>
          <div className='max-w-2xl lg:mx-0'>
            <h1 className='text-4xl md:text-6xl  font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-display'>
              {startCase(project.title)}
            </h1>
          </div>

          <p className='text-sm md:text-base  leading-5 text-zinc-600 dark:text-zinc-400 font-normal'>
            {project.description}
          </p>

          <div
            className={`-m-4 flex flex-wrap text-base font-semibold leading-7 text-zinc-600 `}
          >
            {links.map((link) => (
              <div
                className='basis-1/2 p-4 [&>a]:hover:bg-zinc-200 [&>a]:dark:hover:bg-zinc-700 [&>a]:first:text-zinc-50 [&>a]:first:bg-zinc-900 [&>a]:first:hover:bg-zinc-700  [&>a]:dark:first:hover:bg-zinc-300 [&>a]:dark:first:bg-zinc-50 [&>a]:dark:first:text-zinc-900 [&>a]:dark:text-zinc-300'
                key={link.label}
              >
                <Link
                  target='_blank'
                  href={link.href}
                  className='h-10  text-sm  border-zinc-200 dark:border-zinc-700 border rounded-md flex flex-col justify-center items-center'
                >
                  {link.label}
                  {/* <span aria-hidden='true'>& rarr;</span> */}
                </Link>
              </div>
            ))}
          </div>

          {project.stack && (
            <div className='text-sm text-zinc-500 dark:text-zinc-400'>
              {Object.keys(project.stack).map((key) => (
                <div className='first:border-t-0 border-t border-zinc-200 dark:border-zinc-700 flex justify-between items-center py-2.5'>
                  <span className='font-semibold'>
                    {startCase(key.replace("_", " "))}
                  </span>
                  <div className='flex items-center'>
                    {key === "repo" && (
                      <GithubIcon size={16} className='mr-1  sm:block hidden' />
                    )}
                    <a className=''>{project.stack![key]}</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
