import Link from "next/link";

// Edit this block anytime — layout stays the same.
const content = {
  eyebrow: "About",
  title: "Fake News Detection",
  intro:
    "A research project turned into a public tool. Paste a headline or article and get a clear verdict, backed by reasoning you can read.",
  sections: [
    {
      title: "From thesis to tool",
      body: "This started as my master's thesis — a deep learning model trained to spot misleading news. I'm putting it online so anyone can try it, not just academics reviewing a paper.",
    },
    {
      title: "What it does",
      body: "You share text. The system classifies it as likely real or fake, then explains why — so the result is useful, not just a label.",
    },
    {
      title: "How it works",
      body: "A trained detection model handles the classification. A language model adds plain-language reasoning on top, so you see the logic behind each verdict.",
    },
  ],
  note: "Still evolving. Accuracy depends on the text you submit and how novel the claim is.",
  cta: { label: "Try it now", href: "/" },
};

export default function About() {
  return (
    <div className="flex-1 bg-gradient-to-b from-zinc-50 via-white to-zinc-100/80 dark:from-zinc-950 dark:via-black dark:to-zinc-900/50">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <header className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-wide text-zinc-400 dark:text-zinc-500">
            {content.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            {content.intro}
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-5">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-zinc-200/70 bg-white/60 px-6 py-5 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40"
            >
              <h2 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        {/* Footer note + CTA */}
        <footer className="mt-14 text-center sm:mt-16">
          <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
            {content.note}
          </p>
          <Link
            href={content.cta.href}
            className="mt-6 inline-block rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            {content.cta.label}
          </Link>
        </footer>
      </div>
    </div>
  );
}
