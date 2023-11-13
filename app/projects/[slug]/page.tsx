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

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className=' bg-zinc-50 '>
      <Navigation>
        <Nav project={project} views={views} />
      </Navigation>

      <div className='px-6 md:px-0 md:grid md:grid-cols-8 flex flex-col max-w-7xl mx-auto'>
        <Header project={project} views={views} />
        <ReportView slug={project.slug} />

        <article className='md:col-span-5 md:pt-6 md:pl-12 md:pr-6 md:pb-12 prose prose-zinc prose-quoteless'>
          <div className='pb-12'>
            <Mdx code={project.body.code} />
          </div>
        </article>
      </div>

      <div className='bg-zinc-100 w-screen h-screen'></div>
    </div>
  );
}
