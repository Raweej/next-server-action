"use client";

import { createPost } from "@/lib/post";
import { createSupabaseClient } from "@/utils/supabaseClient";
import { createSupabaseServerClient } from "@/utils/supabaseServer";
import { revalidatePath } from "next/cache";
import React, { useRef } from "react";
import { z } from "zod";

const todoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const FormCreatePost = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    //validate with zod
    const result = todoSchema.safeParse({ title, description });
    if (!result.success) {
      console.log(result.error.message);
      return null;
      // throw new Error(result.error.message);
    }
    //insert into db if title and description is valid
    if (typeof title === "string" && typeof description === "string") {
      createPost({ title, description });
      ref.current?.reset();
    }
  };

  return (
    <form ref={ref} action={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="todo">Todo</label>
        <div className="flex gap-2">
          <input
            name="title"
            type="text"
            placeholder="What needs to be done?"
            required
            className="text-black"
          />
          <input
            name="description"
            type="text"
            placeholder="What needs to be done with description ?"
            required
            className="text-black"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="bg-gray-500 p-2">
          Add Todo
        </button>
      </div>
    </form>
  );
};
