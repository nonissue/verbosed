import { Link as ChakraLink, Flex } from "@chakra-ui/react";

import { Container, DarkModeSwitch } from ".";

export const Nav: React.FunctionComponent = () => (
  <Container
    flexDirection="row"
    position="fixed"
    top="1rem"
    width="100%"
    // maxWidth="48rem"
    py={2}
  >
    <Flex
      justifyContent="space-between"
      // justifyItems="flex-end"
      alignItems="center"
      // flexDirection="column"
      w="100%"
      fontSize={["1.1rem", "1.3rem", "1rem", "1rem"]}
    >
      <ChakraLink
        fontWeight="800"
        href="/"
        mr="4"
        fontSize={["1.5em", "1.5rem"]}
      >
        WOTD
      </ChakraLink>

      <Flex align="right" alignItems="center">
        <ChakraLink href="/archive" mx={2}>
          Archive
        </ChakraLink>

        <ChakraLink href="/suggest" mx={2} marginRight="4">
          Suggest
        </ChakraLink>

        <DarkModeSwitch marginLeft="auto" p="1" size="md" borderRadius="2rem" />
      </Flex>
    </Flex>
  </Container>
);
