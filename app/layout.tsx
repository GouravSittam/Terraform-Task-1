import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraform Task 1",
  description: "Terraform Task 1",
  generator: "Terraform Task 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
