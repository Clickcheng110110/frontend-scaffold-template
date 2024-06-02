import { Box, Stack } from "@chakra-ui/react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "test",
  };
}

export default function Page({ params, searchParams }: Props) {
  console.log("params", params);
  console.log("searchParams", searchParams);
  return (
    <Stack>
      <Box>11111</Box>
      <Box>11111</Box>
      <Box>11111</Box>
      <Box>11111</Box>
    </Stack>
  );
}
