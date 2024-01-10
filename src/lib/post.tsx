"use server";

import { createSupabaseClient } from "@/utils/supabaseClient";
import { createSupabaseServerClient } from "@/utils/supabaseServer";
import { revalidatePath } from "next/cache";

export const deletePost = async (id: number) => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("post").delete().match({ id });
  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/");
};

export const createPost = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("post")
    .insert({ title, description });
  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/");
};
