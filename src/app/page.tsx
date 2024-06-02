// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Stack } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export default function Page() {
  const { address } = useAccount();

  console.log("address", address);
  return (
    // <div>1111</div>
    <Box>
      <w3m-button />
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <Stack>
        <Box>11111</Box>
        <Box>11111</Box>
        <Box>11111</Box>
        <Box>11111</Box>
      </Stack>
    </Box>
  );
}
