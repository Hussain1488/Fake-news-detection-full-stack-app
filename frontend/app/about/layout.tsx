import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "about fake news detection",
    description: "in this page you can find about fake news, and how to detect them",
    keywords: ["fake news", "detection", "about", "fake news detection", "fake news detection app", 'deeplearning fake news detection'],
    authors: [{ name: "Hussain (Elio) Hedayati" }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    },
    openGraph: {
        title: "about fake news detection",
        description: "in this page you can find about fake news, and how to detect them",
        url: "https://fk-zartech.io",
        siteName: "fake news detection",
        images: [{ url: "https://fake-news-detection.com/og-image.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "about fake news detection",
        description: "in this page you can find about fake news, and how to detect them",
        images: [{ url: "https://fake-news-detection.com/og-image.png" }],
    }


}

type children = {
    children: React.ReactNode
}

export default function AboutLayout({ children }: children ) {
    return (
        <main>
            {children}
        </main>
    )
}