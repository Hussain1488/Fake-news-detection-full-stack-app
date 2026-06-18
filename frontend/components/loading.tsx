type LoadingProps = {
    message?: string
    variant?: "page" | "inline"
}

export default function Loading({
    message = "Analyzing article",
    variant = "page",
}: LoadingProps) {
    const isPage = variant === "page"

    return (
        <div
            className={
                isPage
                    ? "flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black"
                    : "w-full"
            }
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div
                className={`w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 ${
                    isPage ? "max-w-md" : "max-w-2xl"
                }`}
            >
                <div className="border-b border-zinc-100 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 px-6 py-8 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center">
                        <div className="relative h-14 w-14">
                            <div className="absolute inset-0 rounded-full border-2 border-zinc-200 dark:border-zinc-700" />
                            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-zinc-900 border-r-zinc-400 dark:border-t-zinc-100 dark:border-r-zinc-500" />
                            <div
                                className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-emerald-500 border-l-emerald-300 dark:border-b-emerald-400 dark:border-l-emerald-600"
                                style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.75}
                                    aria-hidden
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {message}
                    </p>
                    <p className="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
                        Running deep learning inference…
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500"
                                style={{ animationDelay: `${i * 150}ms` }}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-4 px-6 py-6">
                    <div className="space-y-2">
                        <div className="h-3 w-3/4 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-3 w-1/2 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2.5 w-full animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800/80" />
                        <div className="h-2.5 w-full animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800/80" />
                        <div className="h-2.5 w-5/6 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800/80" />
                    </div>
                    <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
                        This usually takes a few seconds
                    </p>
                </div>
            </div>
        </div>
    )
}
