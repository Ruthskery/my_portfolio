import type { Metadata } from "next";
import "./globals.css"; // Global CSS
import Layout from "../components/layout";

export const metadata: Metadata = {
  title: "Cyril's Portfolio",
  description: "Using Next.js with App Router and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>  {/* Wrap all pages with Layout */}
      </body>
    </html>
  );
}
