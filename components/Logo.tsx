import { IconArrowBadgeRight } from "@/components/Icons.ts";

export type LogoProps = {
  readonly size?: "small" | "large";
}

export default function Logo({ size = "small" }: LogoProps) {
  const iconSize = size === "small" ? "w-8 h-8" : "w-12 h-12";
  const textSize = size === "small" ? "text-md" : "text-2xl";

  return (
    <div class="flex flex-row items-center justify-center">
      <IconArrowBadgeRight class={`inline ${iconSize}`} />
      <span class={`${textSize}`}>
        <span class="font-black">sosby</span>.dev
      </span>
    </div>
  );
}
