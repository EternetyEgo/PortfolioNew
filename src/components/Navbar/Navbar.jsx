import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box>
      <Text>Logo</Text>
      <Box>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Lab</Text>
      </Box>
    </Box>
  );
}
