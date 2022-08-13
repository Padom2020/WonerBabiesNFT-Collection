import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box py="40px" bg="teal">
      <Center flexDirection={"column"}>
        <Heading mb="4" as="h1" fontSize="24px" color="white">
          Wonder Babies NFT
        </Heading>
        <Text>Created for NFT Builder Competition</Text>
        <Text>Happy 3rd Anniversay ChainIDE</Text>
      </Center>
    </Box>
  );
}

export default Footer;
