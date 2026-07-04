import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "Velora Code",
  description: "Velora Code Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="fa"
  dir="rtl"
  className="h-full antialiased"
>
      <body className={`${vazirmatn.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}