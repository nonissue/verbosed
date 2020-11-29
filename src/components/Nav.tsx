import {
  Link as ChakraLink,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";

import { useState } from "react";

import { DarkModeSwitch } from ".";

export const Nav: React.FunctionComponent = () => {
  const logoColor = useColorModeValue("gray.900", "gray.100");
  const navBorderBottom = useColorModeValue("gray.300", "gray.700");
  const navColor = useColorModeValue("gray.600", "gray.400");
  const navBg = useColorModeValue(
    "hsla(210, 38%, 95%, 0.7)",

    "hsla(220, 25.71428571428571%, 11.725490196078432%, 0.9)"
  );
  const mobileNavBg = useColorModeValue(
    "hsla(0, 0%, 100%, 0.5)",
    "hsla(220, 25.71428571428571%, 11.725490196078432%, 0.1)"
  );
  const showHamburger = useBreakpointValue({
    base: "true",
    sm: "false",
    md: "false",
    lg: "false",
    xl: "false",
  });

  const [mobileNavShown, setMobileNavShown] = useState(false);

  const toggleMobileNav = () => setMobileNavShown(!mobileNavShown);

  return (
    <Box
      w="100%"
      position="sticky"
      top="0"
      bg={navBg}
      _before={{
        borderBottom: "1px",
        position: "absolute",
        borderBottomColor: navBorderBottom,
        content: `""`,
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      zIndex="2"
    >
      <Box width="100vw" maxW="min(65ch, 100%)" m="auto">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px={["6", "6", "4", "4"]}
          fontSize={["1rem", "1rem", "1rem", "1rem"]}
          flexDirection="row"
          top="1rem"
          py={2}
        >
          <ChakraLink
            fontFamily="serif"
            href="/"
            textColor={logoColor}
            fontSize={["1.2em", "1.5em"]}
            letterSpacing="0.01em"
            _hover={{ textDecoration: "none", color: "orange.400" }}
          >
            wotd
          </ChakraLink>

          {showHamburger === "true" ? (
            <Flex align="right" alignItems="center" textColor={navColor}>
              <DarkModeSwitch
                marginLeft="auto"
                p="1"
                size="md"
                borderRadius="2rem"
              />
              <IconButton
                colorScheme="gray"
                variant="ghost"
                aria-label="menu"
                borderRadius="2rem"
                ml="0"
                onClick={toggleMobileNav}
                size="md"
                icon={mobileNavShown ? <RiCloseLine /> : <RiMenu5Fill />}
              />
            </Flex>
          ) : (
            <Flex align="right" alignItems="center" textColor={navColor}>
              <ChakraLink href="/archive" mx={["1", "2"]}>
                Archive
              </ChakraLink>

              <ChakraLink href="/suggest" mx={["1", "3"]} marginRight="2">
                Suggest
              </ChakraLink>

              <DarkModeSwitch
                marginLeft="auto"
                p="1"
                size="sm"
                borderRadius="2rem"
              />
            </Flex>
          )}
        </Flex>
      </Box>
      <Box
        bg={mobileNavBg}
        w="100vw"
        position="absolute"
        _after={{
          shadow: "md",
          width: "100%",
          height: "100%",
          content: `""`,
          top: 0,
          left: 0,
          position: "absolute",
          zIndex: "-1",
        }}
      >
        {mobileNavShown && (
          <Stack
            align="center"
            fontSize="lg"
            fontWeight="semibold"
            maxW="min(65ch, 100%)"
            m="auto"
            px={["6", "6", "4", "4"]}
            py="4"
            direction="column"
            borderBottom="1px"
            borderBottomColor={navBorderBottom}
            zIndex="1"
            shadow="inner"
            style={{
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }}
          >
            <ChakraLink href="/archive">Archive</ChakraLink>
            <ChakraLink herf="/suggest">Suggest</ChakraLink>
            <ChakraLink href="/about">About</ChakraLink>
          </Stack>
        )}
      </Box>
    </Box>
  );
};
