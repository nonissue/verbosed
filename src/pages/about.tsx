import {
  Box,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Container, Nav, Heading } from "src/components";
import { RiSubtractLine, RiCheckboxBlankLine } from "react-icons/ri";

const About: React.FunctionComponent = () => {
  const listDecoration = useColorModeValue("gray.400", "gray.600");
  const creditsText = useColorModeValue("gray.600", "gray.500");
  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
        mb="8"
      >
        <Heading title="About" />

        <Text fontSize="md" lineHeight="1.6" mb="4" fontStyle="italic">
          A collection of words that I may or may not find interesting and that
          I may or may not understand.
        </Text>

        <SimpleGrid columns={[1, 3, 3, 3]} spacing={[2, 2, 10, 10]}>
          <Box>
            <Text fontSize="xl" pt="4" fontWeight="400" fontFamily="serif">
              Technologies
            </Text>

            <List mb="0" pt="2" fontFamily="body">
              <ListItem ml="1">
                <ListIcon
                  as={RiSubtractLine}
                  fontWeight="300"
                  color={listDecoration}
                  mb="3px"
                  verticalAlign="middle"
                />
                <Link href="https://nextjs.org" variant="external">
                  Next.js
                </Link>
              </ListItem>
              <ListItem ml="1">
                <ListIcon
                  as={RiSubtractLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                <Link variant="external" href="https://prisma.io">
                  Prisma
                </Link>
              </ListItem>
              <ListItem ml="1">
                <ListIcon
                  as={RiSubtractLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                <Link href="https://next.chakra-ui.com" variant="external">
                  Chakra-UI
                </Link>
              </ListItem>

              <ListItem ml="1">
                <ListIcon
                  as={RiSubtractLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                <Link
                  href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres"
                  // color={technologyLinkColor}
                  variant="external"
                >
                  Postgres
                </Link>
              </ListItem>
              <ListItem ml="1">
                <ListIcon
                  as={RiSubtractLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                <Link
                  href="http://typescriptlang.org"
                  // color={technologyLinkColor}
                  variant="external"
                >
                  TypeScript
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Text fontSize="xl" pt="4" fontWeight="500" fontFamily="serif">
              Credits
            </Text>
            <Box textColor={creditsText}>
              <Text my="0" fontFamily="heading" pt="2">
                Made by:{" "}
                <Link
                  href="https://nonissue.org"
                  // color={linkColor}
                  variant="external"
                  fontWeight="500"
                  fontFamily="heading"
                >
                  @nonissue
                </Link>
              </Text>
              <Text my="0" fontFamily="body">
                View source:&nbsp;
                <Link
                  href="https://github.com/nonissue/wotd"
                  variant="external"
                  fontWeight="500"
                  fontFamily="heading"
                >
                  @github
                </Link>
              </Text>
            </Box>
            <Text fontSize="xl" fontWeight="500" pt="4" fontFamily="serif">
              Version
            </Text>
            <Text fontFamily="body" fontSize="" color={creditsText} pt="2">
              0.0.1 (beta)
            </Text>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="500" pt="4" fontFamily="serif">
              Todo
            </Text>
            <List mb="0" pt="2" fontFamily="body">
              <ListItem ml="1">
                <ListIcon
                  as={RiCheckboxBlankLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                Suggestions
              </ListItem>
              <ListItem ml="1">
                <ListIcon
                  as={RiCheckboxBlankLine}
                  color={listDecoration}
                  fontWeight="300"
                  mb="3px"
                  verticalAlign="middle"
                />
                RSS Support
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default About;
