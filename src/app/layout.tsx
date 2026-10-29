import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CashEarn | Android app preview",
  description:
    "Explore the CashEarn Android preview for tasks, referrals, wallet history and member settings. The app is in private testing; public download is not yet available.",
  metadataBase: new URL("https://www.cashearn.co.in"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

