import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Nav } from "./nav";
import { Navigation } from "@/app/components/navigation";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  let projects = allProjects.filter((obj) => {
    if (!obj?.tags || !project?.tags) return false;

    return project?.tags?.every(
      (tag) => obj?.tags?.includes(tag) && project.slug !== obj.slug
    );
  });

  console.log(projects);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className=' bg-zinc-50 dark:bg-zinc-900'>
      <Navigation>
        <Nav project={project} views={views} />
      </Navigation>

      <div className='px-6 md:px-0 md:grid md:grid-cols-8 flex flex-col max-w-7xl mx-auto'>
        {/* {project.imgSrc && (
          <div className='pt-12 w-full h-[400px]'>
            <img
              className='block md:hidden h-full w-full'
              src={project.imgSrc}
              alt=''
            />
          </div>
        )} */}
        <Header project={project} views={views} />
        <ReportView slug={project.slug} />
        <article className='pt-8 md:col-span-5 md:pt-6 md:pl-12 md:pr-6 md:pb-12 prose prose-zinc prose-quoteless'>
          {project.imgSrc && (
            <div className='hidden md:block pt-6 w-full h-[400px]'>
              <img className=' h-full w-full' src={project.imgSrc} alt='' />
            </div>
          )}

          <div className='pb-12 md:pt-12'>
            <Mdx code={project.body.code} />
          </div>
        </article>
      </div>

      <div className='bg-zinc-100 w-screen h-screen'></div>
    </div>
  );
}
