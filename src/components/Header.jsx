import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContext";
import WrapContent from "./WrapContent";

function Header() {
  const { connect, account, disconnect } = useAppContext();
  return (
    <Box shadow="xl" bg="teal.400">
      <WrapContent>
        <HStack justifyContent={"space-between"} py="4">
          <Heading as="h1" fontSize="24px" color="white">
            Wonder Babies NFT
          </Heading>
          {!account && <Button onClick={connect}>Connect</Button>}
          {account && <Button onClick={disconnect}>Disconnect</Button>}
        </HStack>
      </WrapContent>
    </Box>
  );
}

export default Header;
