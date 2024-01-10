import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh gap-5">
      <h1 className="text-3xl">Todo Post !</h1>
      <Link href="/posts" className="border-2 border-gray-400 p-2 rounded-xl">
        Posts
      </Link>
    </main>
  );
}
