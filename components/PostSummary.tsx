import { Post } from "../data/posts.ts";

export type PostSummaryProps = {
  post: Post;
}

export default function PostSummary({ post }: PostSummaryProps) {
  const summary = `${post.content.substring(0, 100)}\u2026`;
  const link = `/posts/${post.slug}`;

  return (
    <div class="flex flex-col mb-5">
      <h2 class="text-xl font-normal">
        <a href={link} class="hover:text-underline">
          {post.title}
        </a>
      </h2>
      <div class="text-gray-400">{summary}</div>
    </div>
  );
}