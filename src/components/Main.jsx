import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import baby from "../assets/babyNFT.png";
import MintBox from "./MintBox";
import WonderStory from "./WonderStory";
import WrapContent from "./WrapContent";

function Main() {
  return (
    <Box
      minHeight="70vh"
      as="main"
      backgroundImage={"url('/background1.gif')"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      bgColor="#00000069"
      bgBlendMode={"overlay"}
    >
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2]} spacing="5" py="40px">
          <Image src={baby} w={["80%"]} m="auto" />
          {/*  */}
          <Stack spacing="5" color="white">
            <Heading as="h2" fontSize="23px">
              Wonder Babies Collection
            </Heading>
            <Text>
              Wonder Babies NFT Collection is a rich collection of 10,000
              uniquely designed/crafted NFT babies,
              one baby representing every beautiful baby ever born.
              This is an NFT Collection developed to show the beauty of babies around the world.
              It gives us the privilege of seeing the world
              through the eyes of babies harnessing the power of the emerging NFT market
              to fight against infant mortality rate and to help in the sustainability
              of orphans all over the world, and not just that,
              the sale of these NFT collections will help
              in supporting orphanages all over the world.

            </Text>
            <Text>
              These NFT Collection aims to showcase the dynamic nature
              of babies from various cultural perspectives through NFTs,
              which we believe will help the world see the similarities
              in our diverse cultures.
              The NFT Collection is also designed with a backing story
              which will spice up the interest of our community.
            </Text>
          </Stack>
        </SimpleGrid>
      </WrapContent>
      <MintBox />
      <WonderStory />
      <Box m="auto" className="beforeFooterBox" w="100%"></Box>
    </Box>
  );
}

export default Main;
