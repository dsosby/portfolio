import IconArrowBadgeRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-badge-right.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md h-screen mx-auto flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <IconArrowBadgeRight class="inline w-8 h-8" /><span><span class="font-black">sosby</span>.dev</span>
          </div>
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline mt-5">Let's try home</a>
        </div>
      </div>
    </>
  );
}
