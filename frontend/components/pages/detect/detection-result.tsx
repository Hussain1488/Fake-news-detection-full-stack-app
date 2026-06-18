type Prediction = {
    label: boolean
    probability: number
}

type Props = {
    prediction: Prediction
}


export default function DetectionResult({ prediction }: Props) {
    const isReal = prediction.label
    const confidence = isReal
        ? prediction.probability
        : 1 - prediction.probability

    return (
        <section className="mx-auto w-full max-w-2xl px-4 pb-12 sm:px-6 lg:px-8">
            <div
                className={`overflow-hidden rounded-2xl border shadow-sm ${
                    isReal
                        ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white dark:border-emerald-900/50 dark:from-emerald-950/40 dark:to-zinc-950"
                        : "border-rose-200 bg-gradient-to-br from-rose-50 to-white dark:border-rose-900/50 dark:from-rose-950/40 dark:to-zinc-950"
                }`}
            >
                <div
                    className={`px-6 py-5 sm:px-8 ${
                        isReal
                            ? "bg-emerald-600/10 dark:bg-emerald-500/10"
                            : "bg-rose-600/10 dark:bg-rose-500/10"
                    }`}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                                isReal
                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300"
                                    : "bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300"
                            }`}
                            aria-hidden
                        >
                            {isReal ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Analysis complete
                            </p>
                            <h2
                                className={`mt-1 text-2xl font-bold tracking-tight sm:text-3xl ${
                                    isReal
                                        ? "text-emerald-800 dark:text-emerald-200"
                                        : "text-rose-800 dark:text-rose-200"
                                }`}
                            >
                                {isReal ? "Likely Real News" : "Likely Fake News"}
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                                {isReal
                                    ? "This article appears consistent with patterns our model associates with credible reporting — but no automated tool can guarantee truth."
                                    : "This article shows patterns our model often links to misleading or fabricated stories. Treat it with extra caution before trusting or sharing."}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 px-6 py-6 sm:px-8">
                  

                    <div
                        className={`rounded-xl border p-4 ${
                            isReal
                                ? "border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20"
                                : "border-rose-200/80 bg-rose-50/50 dark:border-rose-900/40 dark:bg-rose-950/20"
                        }`}
                    >
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {isReal ? "Your challenge" : "Before you share"}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {isReal
                                ? "Cross-check this story with at least two independent, reputable outlets. Look for matching facts, named sources, and official statements — not just the headline."
                                : "Pause before reposting. Search the headline in fact-checking sites, compare versions across trusted newsrooms, and ask: who benefits if this story spreads?"}
                        </p>
                    </div>

                    <div className="flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
                        <svg
                            className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <div>
                            <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                                Powered by deep learning
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-amber-800/90 dark:text-amber-100/80">
                                This result comes from a neural network trained on historical news data.
                                Models can be wrong — especially on breaking stories or unfamiliar topics.
                                For important decisions, always double-check with primary sources and trusted journalism.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
