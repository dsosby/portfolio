import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "@/data/posts.ts";
import { Head } from "$fresh/runtime.ts";
import { default as PostComponent } from "@/components/Post.tsx";
import Navbar from "@/components/Navbar.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage({ data: post }: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>{`David Sosby - ${post.title}`}</title>
      </Head>
      <Navbar />
      <main class="container mx-auto mt-5 px-5 md:px-0">
        <PostComponent post={post} />
      </main>
    </>
  )
}