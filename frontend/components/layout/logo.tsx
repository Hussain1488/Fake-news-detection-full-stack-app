import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 text-2xl font-black tracking-tight text-zinc-900 transition hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900">
        FN
      </span>
      <span className="text-sm leading-tight">
        <span className="block font-semibold">Fake News</span>
        <span className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Detection
        </span>
      </span>
    </Link>
  );
}
