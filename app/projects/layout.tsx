import Link from "next/link";
import { Navigation } from "../components/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen bg-gradient-to-tl from-zinc-50 via-zinc-200/10 to-zinc-50 '>
      {children}
    </div>
  );
}
