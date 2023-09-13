import { render } from "$gfm";
import { Post } from "@/data/posts.ts";

export type PostSummaryProps = {
  post: Post;
}

export default function PostSummary({ post }: PostSummaryProps) {
  const link = `/posts/${post.slug}`;
  const { summary }= post;

  return (
    <div class="flex flex-col mb-5">
      <h1 class="text-2xl font-black">
        <a href={link} class="hover:text-underline">
          {post.title}
        </a>
      </h1>
      <h6 class="text-md font-light">{summary}</h6>
    </div>
  );
}