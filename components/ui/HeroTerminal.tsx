import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export default function HeroTerminal() {
  return (
    <div dir="ltr">
      <Terminal>
        <TypingAnimation>&gt; npm run build:micodex</TypingAnimation>

        <AnimatedSpan className="text-green-500">
          ✔ Checking project structure.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Detecting framework. Found Next.js + TypeScript.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Loading Tailwind configuration.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Optimizing images and assets.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Connecting projects data from API.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Integrating social and contact links.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Deploying animations and interactions.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Finalizing build and performance checks.
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500">
          <span>ℹ Updated 2 files:</span>
          <span className="pl-2">- app/page.tsx</span>
          <span className="pl-2">- components/Hero.tsx</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-muted-foreground">
          ✅ Portfolio build completed successfully!
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}
