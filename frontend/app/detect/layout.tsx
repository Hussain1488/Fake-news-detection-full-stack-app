import type { Metadata } from "next";
import ToastProvider from "@/components/provider/toastify";

export const metadata: Metadata = {
  title: "Detect Fake News",
  description: "Detect fake news using our advanced model",
  keywords: [
    "fake news",
    "detection",
    "model",
    "advanced",
    "fake news detection",
  ],
  authors: [{ name: "Hussain (Elio) Hedayati" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Detect Fake News",
    description: "Detect fake news using our advanced model",
    url: "https://fk-zartech.io",
    siteName: "Fake News Detection",
    images: [{ url: "https://fk-zartech.io/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Detect Fake News",
    description: "Detect fake news using our advanced model",
    images: [{ url: "https://fk-zartech.io/og-image.png" }],
  },
};

type children = {
  children: React.ReactNode;
};

export default function DetectLayout({ children }: children) {
  return (
    <main>
      <ToastProvider />
      {children}
    </main>
  );
}
