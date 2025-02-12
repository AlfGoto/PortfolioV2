import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfred Gauthier",
  description: "My portfolio, made by Alfred Gauthier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ animation: "flyIn 2s ease-out" }} className="overflow-x-hidden">
        <div id="wrapper">{children}</div>
      </body>
    </html>
  );
}
