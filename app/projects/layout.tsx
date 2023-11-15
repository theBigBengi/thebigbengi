import Link from "next/link";
import { Navigation } from "../components/navigation";
import { ArrowLeft, Monitor, Sun, Moon, Twitter, Github } from "lucide-react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen bg-gradient-to-tl from-zinc-50 via-zinc-400/10 to-zinc-50 dark:bg-gradient-to-tl dark:from-zinc-900 dark:via-zinc-400/10 dark:to-zinc-900'>
      {children}
      <footer className='bg-zinc-100 dark:bg-zinc-900 flex justify-between items-center'>
        <div className='flex justify-between items-center gap-2'>
          <Link target='_blank' href='https://twitter.com/chronark_'>
            <Twitter className={`w-6 h-6 duration-200 hover:font-medium `} />
          </Link>
          <Link target='_blank' href='https://github.com/chronark'>
            <Github className={`w-6 h-6 duration-200 hover:font-medium `} />
          </Link>
        </div>
        <div className=' flex justify-between items-center gap-2 bg-zinc-50 py-2 px-3 rounded-full'>
          <Sun />
          <Moon />
          <Monitor />
        </div>
      </footer>
    </div>
  );
}
