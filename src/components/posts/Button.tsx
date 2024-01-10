"use client";
import React from "react";
import { deletePost } from "@/lib/post";

interface Props {
  children: React.ReactNode;
  post: any;
  insert?: boolean;
  deleted?: boolean;
  edit?: boolean;
}
function Spinner() {
  <span className="loader"></span>;
}
export const CustomButton = ({
  children,
  insert,
  deleted,
  edit,
  post,
}: Props) => {
  const [loading, setLoading] = React.useState(false);
  function setClassName() {
    if (insert) {
      return "border-green-500 text-green-500";
    } else if (deleted) {
      return "border-red-500 text-red-500";
    } else if (edit) {
      return "border-orange-500 text-orange-500";
    }
  }

  function checkHandleAction() {
    if (insert) {
      return;
    } else if (deleted) {
      return { deletePost };
    } else if (edit) {
      return;
    }
  }

  const handleAction = () => {
    setLoading(true);
    const action = checkHandleAction();
    if (action) {
      setTimeout(() => {
        action.deletePost(post.id);
      }, 250);
    }
  };

  return (
    <button
      className={`${
        loading ? "bg-gray-500" : setClassName()
      } p-2 self-stretch min-w-[100px] border-2 rounded-md`}
      onClick={handleAction}>
      {loading ? "loading..." : children}
    </button>
  );
};
