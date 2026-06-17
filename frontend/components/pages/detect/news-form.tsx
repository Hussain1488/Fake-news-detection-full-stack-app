"use client" 
import { useState, useActionState  } from "react"
import { newsForm, Reasoning } from "./types"

type Props = {
    formAction: (formData: FormData) => void
    initialState: newsForm
    pending: boolean
}



export default function NewsForm({ formAction, initialState, pending }: Props){

    const [title, setTitle] = useState(initialState.title);
    const [content, setContent] = useState(initialState.content);
    const [reasoning, setReasoning] = useState(initialState.reasoning);

    return (
        <section className="flex-1 bg-zinc-50 dark:bg-black">
            <div className="mx-auto flex max-w-2xl flex-col px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Analyze a headline
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Paste a news title and article text. Our model will estimate whether the story is likely fake.
                    </p>
                </div>

                <form action={formAction}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
                >
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Title
                            </label>
                            <input
                                name="title"
                                id="title"
                                className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
                                type="text"
                                placeholder="Enter the news headline"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="content"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                className="min-h-40 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
                                placeholder="Paste the full article or a summary here"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>

                        <label
                            htmlFor="reasoning"
                            className="flex cursor-pointer items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                        >
                            <select
                                name="reasoning"
                                value={reasoning === "on" ? Reasoning.ON : Reasoning.OFF}
                                onChange={(e) => setReasoning(e.target.value === Reasoning.ON ? Reasoning.ON : Reasoning.OFF)}
                                id="reasoning"
                                className="w-full text-sm rounded-lg border-zinc-300 text-zinc-900 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-900"
                            >
                                <option className="text-zinc-900 dark:text-zinc-100 text-sm font-medium"  value={Reasoning.ON} >True</option>
                                <option className="text-zinc-900 dark:text-zinc-100 text-sm font-medium"  value={Reasoning.OFF} >False</option>
                            </select>
                           
                        </label>

                        <button
                            disabled={pending}
                            className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 active:scale-[0.99] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                            type="submit"
                        >
                            {pending ? "Detecting..." : "Detect"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}