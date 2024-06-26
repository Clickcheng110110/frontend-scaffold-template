import type { Metadata } from "next";

import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import { headers } from "next/headers";
import Web3ModalProvider from "@/context";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Web3ModalProvider initialState={initialState}>
          <Providers>{children}</Providers>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
