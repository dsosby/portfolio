import { Head } from "$fresh/runtime.ts";
import Logo from "@/components/Logo.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md h-screen mx-auto flex flex-col items-center justify-center">
          <Logo size="large" />
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
