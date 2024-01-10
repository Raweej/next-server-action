import React, { Suspense } from "react";
import Blog from "./Blog";

const page = () => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="grid grid-cols-4 gap-8 text-center w-full">
        {[...new Array(4)].map((_, i) => {
          const colors = ["red", "blue", "green", "yellow"];
          return (
            <div key={i}>
              <Suspense fallback={<>loading..</>}>
                <Blog color={colors[i]} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
