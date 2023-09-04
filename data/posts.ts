import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
};

export type Post = {
  title: string;
  slug: string;
  content: string;
  date: Date;
};

async function getPost(slug: string): Promise<Post> {
  const text = await Deno.readTextFile(join("./data/posts", `${slug}.md`));
  const { attrs, body } = extract<Frontmatter>(text);

  return {
    slug,
    title: attrs.title,
    content: body,
    date: new Date(attrs.date),
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./data/posts");
  const postPromises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    postPromises.push(getPost(slug));
  }

  const posts = await Promise.all(postPromises);
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}
