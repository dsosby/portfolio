import type { ComponentChildren } from "preact";
import Rays from "./Rays.tsx";
import Navbar from "./Navbar.tsx";

export type HeaderProps = {
  children?: ComponentChildren;
  hero?: boolean;
  rays?: boolean;
}

export default function Header({ children, hero, rays }: HeaderProps) {
  const height = hero ? 'h-96' : 'h-50';
  return (
    <div class={`relative max-w-screen ${height}  bg-gradient-to-r from-carolinaBlue to-blue border-b-1 border-white border-solid`}>
      { rays && <Rays /> }
      <div class="relative flex h-full flex-col items-center justify-center">
        <div class={`${hero ? 'absolute' : 'relative'} w-full top-0`}>
          <Navbar />
        </div>
        { children }
      </div>
    </div>
  )
}