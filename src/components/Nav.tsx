import {
  Link as ChakraLink,
  Flex,
  useColorModeValue,
  IconButton,
  Icon,
  Box,
} from "@chakra-ui/react";

import { useState } from "react";

import { DarkModeSwitch } from ".";

export const Nav: React.FunctionComponent = () => {
  const showMobileMenu = true;
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
          fontSize={["1rem", "1.3rem", "1rem", "1rem"]}
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
            // style={{ textDecorationThickness: "0.05em" }}
            _hover={{ textDecoration: "none", color: "orange.400" }}
          >
            {/* Word of the Day */}
            wotd
          </ChakraLink>

          {showMobileMenu ? (
            <Flex align="right" alignItems="center" textColor={navColor}>
              <DarkModeSwitch
                marginLeft="auto"
                p="1"
                size="sm"
                borderRadius="2rem"
              />
              <IconButton
                colorScheme="gray"
                variant="ghost"
                aria-label="menu"
                borderRadius="2rem"
                ml="2"
                onClick={toggleMobileNav}
                size="sm"
                icon={
                  <Icon
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z"
                      fill="currentColor"
                    ></path>
                  </Icon>
                }
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
            </Flex>
          )}
        </Flex>
        {/* <Box> */}
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
          <Flex
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
          </Flex>
        )}
      </Box>
    </Box>
  );
  // </Container>
};
