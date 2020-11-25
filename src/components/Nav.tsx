import { Link as ChakraLink, Button } from "@chakra-ui/react";

import { Container, DarkModeSwitch } from ".";

export const Nav: React.FunctionComponent = () => (
  <Container
    flexDirection="row"
    position="fixed"
    top="1rem"
    // justifyContent="flex-start"
    // justifyItems="flex-start"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink fontWeight="800" href="/" mr="4">
      WOTD
    </ChakraLink>
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={0} mx={2}>
      {/* <Button width="100%" variant="outline" colorScheme="gray"> */}
      Archive
      {/* </Button> */}
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      flexGrow={0}
      mx={2}
    >
      Suggest
    </ChakraLink>

    <DarkModeSwitch />
  </Container>
);
