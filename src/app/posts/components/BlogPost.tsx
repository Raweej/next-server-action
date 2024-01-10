"use client";

import { CustomButton } from "@/components/posts/Button";
import { Post } from "@/types/common";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  data: Post[];
}

const BlogPosts = ({ data }: Props) => {
  //useMemo to cache the data
  const posts = useMemo(() => data, [data]);

  return (
    <div>
      <ul className="w-full max-w-xl ">
        {posts.length > 0
          ? posts.map((post) => (
              <div key={post.id} className="flex justify-between gap-5">
                <li>
                  {post.title} - {post.description}
                </li>
                <CustomButton deleted post={post}>
                  delete
                </CustomButton>
              </div>
            ))
          : "No posts"}
      </ul>
    </div>
  );
};

export default BlogPosts;
