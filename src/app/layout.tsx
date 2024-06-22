import { Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpotProvider, TripProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharetri",
  description: "Let's share your memory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>
        <TripProvider>
          <SpotProvider>
            <Header sx={{ marginBottom: "15px" }} />
            {children}
          </SpotProvider>
        </TripProvider>
      </body>
    </html>
  );
}
