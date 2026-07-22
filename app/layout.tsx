import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.jhapu.com"),
  title: {
    default: "Jhapu Documentation",
    template: "%s · Jhapu Documentation",
  },
  description: "Guides for using, configuring and extending Jhapu ERP.",
  icons: {
    icon: "/jhapu-logo.svg",
    shortcut: "/jhapu-logo.svg",
  },
  openGraph: {
    title: "Jhapu Documentation",
    description: "ERP guides, administration and developer reference",
    type: "website",
    url: "https://docs.jhapu.com",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Jhapu Documentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhapu Documentation",
    description: "ERP guides, administration and developer reference",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
