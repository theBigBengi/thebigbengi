import { notFound } from "next/navigation";
// import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
// import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

// const redis = Redis.fromEnv();

const allProjects = [
  {
    date: "2023-10-15",
    published: "2023-10-10",
    slug: "unkey",
    title: "sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "planetfall",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "Loremipsum",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm2",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm3",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet,  Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm4",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet,, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm5",
    title: "Lorem ipsum ",
    description:
      "adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
  {
    date: "2023-10-10",
    published: "2023-10-10",
    slug: "highstorm6",
    title: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum posuere tortor, eget vulputate ex feugiat molestie. Curabitur sagittis libero id odio imperdiet condimentum. Proin vestibulum pellentesque dignissim. Vivamus id metus vitae ipsum venenatis sagittis. Duis et cursus metus. Maecenas id lacinia erat, vitae tincidunt dolor. Donec non sodales nibh, ac aliquet metus. Cras non posuere erat.",
  },
];

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

  // const views =
  //   (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <Header project={project} views={0} />
      <ReportView slug={project.slug} />

      <article className='px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
        {/* <Mdx code={project.body.code} /> */}
      </article>
    </div>
  );
}
