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
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
