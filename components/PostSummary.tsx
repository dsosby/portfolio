import { render } from "$gfm";
import { Post } from "@/data/posts.ts";

export type PostSummaryProps = {
  post: Post;
}

export default function PostSummary({ post }: PostSummaryProps) {
  const renderedPost = render(post.content);
  const link = `/posts/${post.slug}`;

  return (
    <div class="flex flex-col mb-5">
      <h1 class="text-2xl font-black">
        <a href={link} class="hover:text-underline">
          {post.title}
        </a>
      </h1>
      <div class="markdown-body" data-color-mode="dark" data-dark-theme="dark" dangerouslySetInnerHTML={{ __html: renderedPost }} />
    </div>
  );
}