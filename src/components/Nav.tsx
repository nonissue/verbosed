import {
  Link as ChakraLink,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";

import { useState } from "react";

import { DarkModeSwitch } from ".";

export const Nav: React.FunctionComponent = () => {
  const logoColor = useColorModeValue("gray.900", "gray.50");
  const ofthedayColor = useColorModeValue("#2D3748", "#CBD5E0");
  const navBorderBottom = useColorModeValue("gray.200", "gray.900");
  const navColor = useColorModeValue("gray.700", "gray.200");
  const navBg = useColorModeValue(
    "hsla(210, 30%, 99%, 0.7)",
    "hsla(220, 25.7%, 11.7%, 0.8)"
  );
  const mobileNavBg = useColorModeValue(
    "hsla(0, 0%, 100%, 0.5)",
    "hsla(220, 25.7%, 11.7%, 0.1)"
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
      py="1"
      _before={{
        borderBottom: "1px",
        position: "absolute",
        borderBottomColor: navBorderBottom,
        content: `""`,
        width: "100%",
        // shadow: "base",
        height: "100%",
        top: "-1px",
        zIndex: "-1",
      }}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
      zIndex="2"
    >
      <Box width="100vw" maxW="min(65ch, 100%)" m="auto">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px={["6", "6", "4", "4"]}
          flexDirection="row"
          top="1rem"
          py={2}
        >
          <ChakraLink
            href="/"
            textColor={logoColor}
            fontSize={["1.5em", "1.35em"]}
            letterSpacing="-0.05em"
            lineHeight="1"
            // textTransform="uppercase"
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Flex alignItems="center">
              <b style={{ fontWeight: 700 }}>word</b>
              &nbsp;
              <Text
                fontSize="0.69em"
                fontStyle="italic"
                fontWeight="400"
                fontFamily="serif"
                color={ofthedayColor}
                textTransform="lowercase"
                textDecoration="underline"
                // style={{
                //   fontSize: "0.66em",
                //   fontWeight: 400,
                //   fontFamily: "'Libre Baskerville', serif",
                //   color: ofthedayColor,
                //   textTransform: "lowercase",
                //   textDecoration: "underline",
                // }}
              >
                of&nbsp;the&nbsp;Day
              </Text>
            </Flex>
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
            <Flex
              align="right"
              alignItems="center"
              fontSize="0.9em"
              textColor={navColor}
            >
              <ChakraLink href="/archive" mx={["1", "2"]}>
                Archive
              </ChakraLink>

              <ChakraLink href="/suggest" mx={["1", "3"]} marginRight="2">
                Suggest
              </ChakraLink>

              <ChakraLink href="/about" mx={["1", "3"]} marginRight="2">
                About
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
            fontWeight="400"
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
            <ChakraLink href="/suggest">Suggest</ChakraLink>
            <ChakraLink href="/about">About</ChakraLink>
          </Stack>
        )}
      </Box>
    </Box>
  );
};
