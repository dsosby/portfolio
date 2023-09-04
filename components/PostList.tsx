import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../data/posts.ts";
import PostSummary from "./PostSummary.tsx";

export type PostListProps = {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <main class="w-full mx-auto">
      <ul>
        <li>
          {posts.map((post) => <PostSummary post={post} />)}
        </li>
      </ul>
    </main>
  );
}
