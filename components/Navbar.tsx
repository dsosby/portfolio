import { IconBrandGithub, IconBrandLinkedin } from './Icons.ts';
import Logo from "@/components/Logo.tsx";

export default function Navbar() {
  return (
    <nav class="container mx-auto flex flex-row flex-wrap justify-between items-center">
      <div class="flex flex-row items-center gap-5">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div class="basis-0 flex flex-row flex-wrap gap-3 mx-2 items-center">
        <a href="/articles">
          <span class="font-light">Articles</span>
        </a>
        {/* <a href="/career">
          <span class="font-light">Career</span>
        </a> */}
        <a href="/about">
          <span class="font-light">About</span>
        </a>
        <a
          href="https://github.com/dsosby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub aria-label="Gihub" class="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-sosby-b30055b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin aria-label="LinkedIn" class="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
