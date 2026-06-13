"use server"

export default async function Header() {
    return (
        <header className="bg-zinc-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold">Fake News Detection</h1>
            </div>
        </header>
    )
}