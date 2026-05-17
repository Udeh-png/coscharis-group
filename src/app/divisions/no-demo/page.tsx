import Link from "next/link";

export default function NoDemoPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <h1 className="max-w-3xl text-3xl font-bold leading-tight text-black md:text-5xl">
        This page has no demo. Go to{" "}
        <Link
          href="/divisions/motors"
          className="text-red-600 underline underline-offset-4 transition hover:text-red-700"
        >
          Motors
        </Link>
        .
      </h1>
    </main>
  );
}
