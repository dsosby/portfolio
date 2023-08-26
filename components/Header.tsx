import Rays from "./Rays.tsx";

export default function Header() {
  return (
    <div class="relative max-w-screen h-96 bg-gradient-to-r from-carolinaBlue to-blue">
      <Rays />
      <div class="relative flex h-full flex-col items-center justify-center">
        <h1 class="text-4xl font-normal tracking-wide">Hi, I'm <span class="name">David!</span></h1>
        <h2 class="text-2xl font-light tracking-wide">
          (but friends call me <span title="saws-bee" class="pronounce">Sosby</span>)
        </h2>
      </div>
    </div>
  )
}