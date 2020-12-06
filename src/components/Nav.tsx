import {
  Link as ChakraLink,
  Flex,
  IconButton,
  Stack,
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { DarkModeSwitch } from ".";

const navItems = [
  {
    url: "/archive",
    title: "Archive",
  },
  {
    url: "/suggest",
    title: "Suggest",
  },
  {
    url: "/words/queue",
    title: "Queue",
  },
  {
    url: "/about",
    title: "About",
  },
];

export const Nav: React.FunctionComponent = () => {
  const logoColor = useColorModeValue("gray.900", "gray.50");
  // const ofthedayColor = useColorModeValue(
  //   "hsla(213.75, 30.25%, 35.0%, 1)",
  //   "hsla(213.75, 20.25%, 75.0%, 1)"
  // );
  const navBorderBottom = useColorModeValue("gray.200", "gray.900");
  const navColor = useColorModeValue("gray.700", "gray.200");
  const navBg = useColorModeValue(
    "hsla(210, 30%, 99%, 0.5)",
    "hsla(220, 25.7%, 11.7%, 0.7)"
  );

  const mobileNavBg = useColorModeValue(
    "hsla(0, 0%, 100%, 0.5)",
    "hsla(220, 25.7%, 11.7%, 0.5)"
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
            fontWeight="800"
            _hover={{ textDecoration: "none", opacity: 0.9 }}
          >
            <Flex alignItems="center">
              <Text mr="1">verbosed</Text>

              {/* <Text
                fontSize="0.69em"
                fontStyle="italic"
                fontWeight="400"
                fontFamily="serif"
                color={ofthedayColor}
                textTransform="lowercase"
                textDecoration="underline"
              >
                of the Day
              </Text> */}
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
            <Stack
              isInline
              align="right"
              spacing="4"
              alignItems="center"
              fontSize="0.9em"
              fontWeight="600"
              textColor={navColor}
            >
              {navItems.map((item) => (
                <ChakraLink key={item.title} href={item.url}>
                  {item.title}
                </ChakraLink>
              ))}

              <DarkModeSwitch
                marginLeft="auto"
                p="1"
                size="sm"
                borderRadius="2rem"
              />
            </Stack>
          )}
        </Flex>
      </Box>
      <Box
        bg={mobileNavBg}
        w="100%"
        position="absolute"
        _after={{
          shadow: "lg",
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
            maxW="min(65ch, 100%)"
            spacing={6}
            align="center"
            fontSize="2xl"
            fontFamily="body"
            fontWeight="400"
            letterSpacing="0.01em"
            m="auto"
            px={["6", "6", "4", "4"]}
            py="6"
            direction="column"
            borderBottom="1px"
            borderBottomColor={navBorderBottom}
            zIndex="1"
            shadow="inner"
            style={{
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {navItems.map((item) => (
              <ChakraLink key={item.title} href={item.url}>
                {item.title}
              </ChakraLink>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};
