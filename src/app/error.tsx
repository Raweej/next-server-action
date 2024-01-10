"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-5">
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="border-2 border-gray-400 p-2 rounded-xl">
        Try again
      </button>
    </div>
  );
}
