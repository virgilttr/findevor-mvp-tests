import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Hydrate } from "@/components/Hydrate";
import { PHProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Findevor AI",
  description: "Next Generation underwriting automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <PHProvider>
        <body className={`${inter.className} bg-[#09090B] text-white`}>
          <Hydrate>{children}</Hydrate>
        </body>
      </PHProvider>
    </html>
  );
}
