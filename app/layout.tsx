import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevora",
  description: "Elevate your online presence with customizable portfolios.",
  keywords: [
    "portfolio builder",
    "personal branding",
    "Elevora",
    "website creator",
    "showcase work",
  ],
  authors: [{ name: "Elevora Team" }],
  metadataBase: new URL("http://localhost:3000"), 
  alternates: {
    canonical: "http://localhost:3000", 
  },
  openGraph: {
    title: "Elevora",
    description: "Elevate your online presence with customizable portfolios.",
    url: "http://localhost:3000", 
    siteName: "Elevora",
    locale: "en_US",
    type: "website",
    // images: []   <-- add later
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevora",
    description: "Elevate your online presence with customizable portfolios.",
    creator: "@elevora", 
    // images: [] <-- same here, add later
  },
  robots: {
    index: false, 
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
      <body className="bg-background text-foreground antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
