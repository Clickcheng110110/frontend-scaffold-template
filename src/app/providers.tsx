// app/providers.tsx
"use client";

import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <ToastContainer className="toast-custom" />
    </ChakraProvider>
  );
}
