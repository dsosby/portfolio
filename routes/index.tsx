import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import PostList from "../components/PostList.tsx";
import { getPosts, Post } from "../data/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function Home({ data: posts }: PageProps<Post[]>) {
  return (
    <>
      <Header rays hero>
        <h1 class="text-4xl sm:text-5xl font-normal tracking-wide">
          Hi, I'm <span class="name">David!</span> 👋🏻
        </h1>
        <h2 class="text-xl sm:text-2xl font-light tracking-wide">
          but friends just call me{" "}
          <span title="saws-bee" class="pronounce">sosby</span>
        </h2>
      </Header>
      <main class="container mx-auto mt-5 px-5 md:px-0">
        <PostList posts={posts} />
      </main>
    </>
  );
}
