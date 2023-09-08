import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/data/posts.ts";
import { Head } from "$fresh/runtime.ts";
import { default as PostComponent } from "@/components/Post.tsx";
import Header from "@/components/Header.tsx";
import PostList from "@/components/PostList.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function PostPage({ data: posts }: PageProps<Post[]>) {
  return (
    <>
      <Head>
        <title>{`David Sosby - Articles`}</title>
      </Head>
      <Header>
      </Header>
      <main class="container mx-auto mt-5 px-5 md:px-0">
        <PostList posts={posts} />
      </main>
    </>
  )
}
