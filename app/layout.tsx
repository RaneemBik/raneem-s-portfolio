import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Raneem Bikai | Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, Node.js and modern web technologies. Building scalable, beautiful web applications.",
  keywords: ["Raneem Bikai", "Full Stack Developer", "React", "Next.js", "Web Developer", "Lebanon"],
  openGraph: {
    title: "Raneem Bikai | Full-Stack Developer",
    description: "Full-stack web developer building modern, scalable applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-dark text-white overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a24",
              color: "#fff",
              border: "1px solid rgba(168,85,247,0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
