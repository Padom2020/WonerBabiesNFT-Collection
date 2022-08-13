import { Box, Button, HStack, Image, Input, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import cflux from "../assets/cflux.jpg";
import { useAppContext } from "../context/AppContext";
import { chainID } from "../utils/contract";
import WrapContent from "./WrapContent";

function MintBox() {
  const { contract, chainIdFromMetamask, account } = useAppContext();
  const [cost, setCost] = useState(null);
  const [fetchingCost, setFetchingCost] = useState(false);

  async function mint(e) {
    e.preventDefault();
    if (!cost) return;
    let value = e.target.amount.value;
    let totalCost = value * cost;
    try {
      let res = await contract.mint(account, value, {
        value: ethers.utils.parseEther(totalCost.toString()),
      });
      alert("minted successfully");
    } catch (error) {
      console.error(error);
    }
  }

  const fetchCost = async () => {
    if (contract) {
      setFetchingCost(true);
      let res = await contract.cost();
      setCost(ethers.utils.formatEther(res));
      setFetchingCost(false);
    }
  };

  useEffect(() => {
    fetchCost();
  }, [contract]);

  return (
    <WrapContent py="40px">
      <HStack
        bg="teal.300"
        m="auto"
        h="50px"
        pr="3"
        maxW="fit-content"
        justifyContent={"space-between"}
        rounded="40px"
        shadow="xl"
      >
        <HStack spacing="3" h="inherit">
          <Image src={cflux} h="full" roundedLeft="40px" />
          <Text fontWeight="bolder" fontSize="15px" color="white">
            Mint now
            {fetchingCost && `: fetching cost...`}
          </Text>
        </HStack>
        {!fetchingCost && (
          <HStack as="form" onSubmit={mint}>
            <Input
              w="50px"
              size="sm"
              bg="white"
              color="black"
              type="number"
              min="1"
              required
              placeholder="enter number"
              name="amount"
            />
            <Button
              type="submit"
              disabled={chainIdFromMetamask !== chainID}
              size="sm"
              rounded={"40px"}
            >
              Mint
            </Button>
          </HStack>
        )}
      </HStack>
      <Box textAlign={"center"} color="white">
        {!fetchingCost && `Costs ${cost} CFX per NFT`}
      </Box>
    </WrapContent>
  );
}

export default MintBox;
