"use server"

export default async function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">Fake News Detection</div>
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              Delivering fast, reliable fake news detection with AI-assisted analysis,
              easy sharing, and actionable trust signals for journalists, researchers,
              and everyday readers.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Explore
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/detect" className="transition hover:text-white">
                  Detect News
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-white">
                  About Project
                </a>
              </li>
              <li>
                <a href="/about-developer" className="transition hover:text-white">
                  Developer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Contact
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <span className="block font-semibold text-zinc-100">Email</span>
                <a href="mailto:hello@fakenewsdetector.io" className="transition hover:text-white">
                  hello@fakenewsdetector.io
                </a>
              </li>
              <li>
                <span className="block font-semibold text-zinc-100">Phone</span>
                <a href="tel:+1234567890" className="transition hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block font-semibold text-zinc-100">Address</span>
                <span className="text-zinc-400">
                  123 Trust Lane, Suite 400<br />San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Legal & Support
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/support" className="transition hover:text-white">
                  Support Center
                </a>
              </li>
              <li>
                <a href="/faq" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Fake News Detection. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Built for trustworthy news verification and smarter media literacy.
          </p>
        </div>
      </div>
    </footer>
  )
}
