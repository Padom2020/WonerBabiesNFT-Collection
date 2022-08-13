import React from 'react';

import {
    Box,
    Container,
    chakra,
    Flex,
    SimpleGrid,
    Stack,
    Image,
} from '@chakra-ui/react';
import baby from "../assets/babyNFT.png";

export default function OurStory() {
    return (
        <Flex
            bg="#AFEEEE"
            w="full"
            justifyContent="center"
            alignItems="center"
            id="About"
            pt="20"
        >
            <Container maxW="container.xl" px="8">
                <Stack spacing={[10, 10, 20]} py={['60px', '60px', 20]} mx="auto">
                    <SimpleGrid
                        id="about"
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={4}
                                fontSize={{ base: '2xl', md: '4xl' }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                                textAlign={{ base: 'center', md: 'left' }}
                                color="gray.900"
                                lineHeight={{ md: 'shorter' }}
                            >
                                The Story
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: 'left', sm: 'left' }}
                                color="gray.600"
                                fontSize={{ md: 'lg' }}
                            >
                                In a world where babies ruled, filled with love and laughter for
                                centuries, there came a time of terror when the angel of
                                destruction and pain unleashed evil in the babies world to
                                destroy babies laughter and cause chaos.
                                <br />
                                <br />
                                The babies world is made up of six great kingdoms whose strength
                                are built in unity. kingdom of HAK ruled by King Koric, Kingdom
                                of CRAFT ruled by King Ombe, Kingdom SOBO ruled by King Saro,
                                Kingdom of SAL ruled King Molak, Kingdom of EBORON ruled by King
                                Luca and Kingdom of ITAMUZ ruled by King Muka.
                                <br />
                                <br />
                                The babies world was a world of magic, beauty and laughter until
                                the dark angel of destruction aroused to cause pain and agony in
                                the world of babies. To achieve this he planted greed in the
                                heart of King Muka, promising to give the entire babies world to
                                him if he helps him conquer the other kingdoms.
                                <br />
                                <br />
                                The selfish King Muka agreed to this and planned to lure the
                                other Kings and their princes to the Ooki (the arena of justice)
                                for them to be slain. This would have gone according to his plan
                                if not for his daughter princess Sarima who overheard him
                                plotting with his commander.
                                <br />
                                She could not allow this to happen, she is in love with Prince
                                Luz of the HAK Kingdom, she to tried inform him but it was
                                almost too late, they were already gathered in Ooki. Immediately
                                she got there and informed Prince Luz, the massacre started, it
                                was a fierce battle, the dark angel and his army and king Muka
                                unleashed great evil on the babies world. The other Kings and
                                Princes escape with the help of the Goddess of unity. They were
                                urged by the goddess of unity to fight and recovery their
                                kingdoms and save their people from slavery.
                            </chakra.p>
                        </Box>
                        <Box w="full">
                            <Image alt="Wonder baby" src={baby} fit="contain" />
                        </Box>
                    </SimpleGrid>
                </Stack>
            </Container>
        </Flex>
    );
}
