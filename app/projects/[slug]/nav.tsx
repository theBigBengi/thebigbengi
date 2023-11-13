"use client";
import { Navigation } from "@/app/components/navigation";
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
  scroll?: number;
};

export const Nav: React.FC<Props> = ({ project, views, scroll }) => {
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
    <div className='container max-w-7xl  flex flex-row-reverse items-center justify-between p-6'>
      <div className='flex justify-between gap-8'>
        <span
          title='View counter for this page'
          className={`duration-200 hover:font-medium flex items-center gap-1 ${
            scroll === 0
              ? " text-zinc-400 hover:text-zinc-100"
              : "text-zinc-600 hover:text-zinc-900"
          } `}
        >
          <Eye className='w-5 h-5' />{" "}
          {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
        </span>
        <Link target='_blank' href='https://twitter.com/chronark_'>
          <Twitter
            className={`w-6 h-6 duration-200 hover:font-medium ${
              scroll === 0
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          />
        </Link>
        <Link target='_blank' href='https://github.com/chronark'>
          <Github
            className={`w-6 h-6 duration-200 hover:font-medium ${
              scroll === 0
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          />
        </Link>
      </div>

      <Link
        href='/projects'
        className={`duration-200 hover:font-medium ${
          scroll === 0
            ? " text-zinc-400 hover:text-zinc-100"
            : "text-zinc-600 hover:text-zinc-900"
        } `}
      >
        <ArrowLeft className='w-6 h-6 ' />
      </Link>
    </div>
  );
};
