"use server"

export default async function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    &copy; 2026 Fake News Detection. All rights reserved.
                </p>
            </div>
        </footer>
    )
}