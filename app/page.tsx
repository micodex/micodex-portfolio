import { Suspense } from "react";
import ProjectSkeleton from "@/components/ui/ProjectSkeleton";

// Home page Sections
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
import SkillSection from "@/components/Home/SkillSection";
import BlogSection from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContactSection";
import BlogSkeleton from "@/components/ui/PostCardSkeleton";
import PostCardSkeleton from "@/components/ui/PostCardSkeleton";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectSection />
      </Suspense>

      <SkillSection />

      <Suspense fallback={<BlogSkeleton />}>
        <BlogSection />
      </Suspense>

      <ContactSection />
    </>
  );
}
