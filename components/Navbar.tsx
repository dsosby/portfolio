import { IconBrandGithub, IconBrandLinkedin, IconArrowBadgeRight } from './Icons.ts';
import Logo from "@/components/Logo.tsx";

export default function Navbar() {
  return (
    <nav class="container mx-auto flex flex-row justify-between items-center">
      <div class="basis-0">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div class="basis-1 flex flex-row w-full justify-center gap-5">
        <a href="/career">
          <span class="font-light">Career</span>
        </a>
        <a href="/about">
          <span class="font-light">About</span>
        </a>
      </div>
      <div class="basis-0 flex flex-row gap-5">
        <a
          href="https://github.com/dsosby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub class="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-sosby-b30055b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin class="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}
