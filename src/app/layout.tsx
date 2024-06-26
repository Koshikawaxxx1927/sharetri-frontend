import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpotProvider, TripProvider } from "@/context";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sharetri",
  description: "Let's share your memory",
  openGraph: {
    title: {
      default: "Sharetri",
      template: `%s | Sharetri`,
    },
    description: "Let's share your memory",
  },
  twitter: {
    card: "summary_large_image",
  },
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
        <Footer />
      </body>
    </html>
  );
}
