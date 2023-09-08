import { render } from "$gfm";
import { Post } from "@/data/posts.ts";

export type PostProps = {
  readonly post: Post;
}

export default function Post({ post }: PostProps) {
  const renderedPost = render(post.content);
  const link = `/posts/${post.slug}`;

  return (
    <div class="flex flex-col mb-5">
      <h1 class="text-2xl font-black">{post.title}</h1>
      <div class="markdown-body" data-color-mode="dark" data-dark-theme="dark" dangerouslySetInnerHTML={{ __html: renderedPost }} />
    </div>
  );
}