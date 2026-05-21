import Link from "next/link";

export default function NoDemoPage({
  isCompany = false,
}: {
  isCompany?: boolean;
}) {
  const companyText = isCompany ? "Home Page" : "Motors";
  const companyLink = isCompany ? "/divisions/motors" : "/";
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <h1 className="max-w-3xl text-3xl font-bold leading-tight text-black md:text-5xl">
        This page has no demo. Go to{" "}
        <Link
          href={companyLink}
          className="text-red-600 underline underline-offset-4 transition hover:text-red-700"
        >
          {companyText}
        </Link>
        .
      </h1>
    </main>
  );
}
