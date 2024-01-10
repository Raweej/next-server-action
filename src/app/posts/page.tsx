import { CustomButton } from "@/components/posts/Button";
import { Post } from "@/types/common";
import { createSupabaseServerClient } from "@/utils/supabaseServer";
import { revalidatePath, revalidateTag } from "next/cache";
import React, { Suspense } from "react";

import BlogPosts from "./components/BlogPost";
import SearchPost from "./components/SearchPost";
import { FormCreatePost } from "./components/FormCreatePost";

async function getPosts(
  limit: number,
  page: number,
  search?: string
): Promise<Post[]> {
  "use server";
  const supabase = createSupabaseServerClient();
  let query = supabase.from("post").select("*");
  let from;
  let to;
  if (page && limit) {
    from = (Number(page) - 1) * Number(limit);
    to = Number(page) * Number(limit) - 1;
    query = query.range(from, to);
  }
  if (search) {
    query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
  }
  // Wrap the operation in a new Promise that resolves after 1 second
  return await new Promise((resolve, reject) => {
    setTimeout(async () => {
      const { data, error } = await query.order("id", { ascending: false });
      if (error) {
        reject(error);
      }
      resolve(data as Post[]);
    }, 500);
  });
}

const PostPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  let { page = "1", limit = "50", search } = searchParams;
  // let data = await getPosts(parseInt(limit), parseInt(page), search);

  async function Posts() {
    const data = await getPosts(parseInt(limit), parseInt(page), search);
    return <BlogPosts data={data} />;
  }

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <h2>Server Actions Demo</h2>
      <FormCreatePost />
      <SearchPost search={search} />
      <Suspense fallback={<div>loading...</div>}>
        <Posts />
      </Suspense>
    </main>
  );
};

export default PostPage;
