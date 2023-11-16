import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  let stack = project?.stack?.Framework;

  if (project?.stack?.Framework) {
    stack = project?.stack;
    delete stack.repo;
    delete stack.Use_case;
  }

  return (
    <Link href={`/projects/${project.slug}`}>
      <article className='p-4 md:p-8'>
        <div className='flex justify-between gap-2 items-center'>
          <span className='text-xs duration-1000 text-zinc-600 dark:text-zinc-200  group-hover:text-black dark:group-hover:text-white group-hover:border-zinc-700 dark:group-hover:border-zinc-200 drop-shadow-orange'>
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className='text-zinc-500 text-xs  flex items-center gap-1'>
            <Eye className='w-4 h-4' />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
        </div>
        <h2 className='z-20 text-xl text-zinc-800 dark:text-zinc-200 font-medium duration-1000 lg:text-3xl  group-hover:text-black dark:group-hover:text-white font-display'>
          {project.title}
        </h2>
        <p className='z-20 mt-4 text-sm  duration-1000 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200'>
          {project.description}
        </p>
        <div className='mt-4 text-[11px] text-zinc-500  '>
          {stack && Object.values(stack)?.join(", ")}
        </div>
      </article>
    </Link>
  );
};
