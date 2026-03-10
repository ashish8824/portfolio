import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Anand | Backend Engineer",
  description:
    "Backend-focused full stack developer specializing in Node.js, MERN stack, and real-time systems.",
  keywords: [
    "Ashish Anand",
    "Backend Developer",
    "Node.js",
    "MERN Stack",
    "Software Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ashish Anand" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
  },
  openGraph: {
    title: "Ashish Anand | Backend Engineer",
    description:
      "Backend-focused full stack developer specializing in Node.js, MERN stack, and real-time systems.",
    url: "https://ashish-anand.vercel.app",
    siteName: "Ashish Anand",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Anand | Backend Engineer",
    description:
      "Backend-focused full stack developer specializing in Node.js, MERN stack, and real-time systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
