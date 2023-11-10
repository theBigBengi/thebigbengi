export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen dark:bg-gradient-to-tl from-zinc-900 via-zinc-300/10 to-zinc-900 '>
      {children}
    </div>
  );
}
