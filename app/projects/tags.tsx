"use client";

import * as React from "react";
import { ArrowLeft, Eye, ArrowBigRight, Tags } from "lucide-react";
import { allProjects } from "contentlayer/generated";

export interface ITagsFilterProps {}

export default function TagsFilter({}: ITagsFilterProps) {
  const [tagsVisible, setTagsVisible] = React.useState<boolean>(false);

  const tags = allProjects.flatMap((project) => project.tags);

  return (
    <div className='flex flex-col gap-3 items-center'>
      <div
        className='flex justify-end  items-start gap-2 text-sm w-full border-t border-zinc-300 dark:border-zinc-500 dark:text-zinc-500 py-3 px-2 '
        onClick={() => setTagsVisible((prevValue) => !prevValue)}
      >
        <span>Tags</span>
        <Tags className='h-5 w-5' />
      </div>

      {tagsVisible && (
        <ul className='w-full '>
          {tags?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
