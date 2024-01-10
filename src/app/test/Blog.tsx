import React from "react";

const Blog = async ({ color }: { color: string }) => {
  //random number between 1s and 5s
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <div className={`bg-${color}-500 self-stretch p-2 `}>{color}</div>;
};

export default Blog;
