import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import { getExperienceYears } from "./lib/utils";

export const metadata: Metadata = {
  title: "Yavuz Tokus — Senior Frontend & Fullstack Engineer",
  description: `${getExperienceYears()}+ years building performant, scalable web applications. React, Next.js, TypeScript, Node.js.`,
  openGraph: {
    title: "Yavuz Tokus — Senior Frontend & Fullstack Engineer",
    description: `${getExperienceYears()}+ years building performant, scalable web applications.`,
    type: "website",
  },
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const svgIcon = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="rgba(168,255,62,0.12)" />
    <rect x="1" y="1" width="62" height="62" rx="13" fill="#0a0b0d" stroke="#a8ff3e" stroke-width="2" />
    <text x="32" y="48" font-family="monospace" font-size="46" font-weight="800" letter-spacing="-2" fill="#a8ff3e" text-anchor="middle">YT</text>
  </svg>
`);
  const iconUrl = `data:image/svg+xml,${svgIcon}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={iconUrl} />
        <link rel="apple-touch-icon" href={iconUrl} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
