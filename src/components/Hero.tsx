import { Flex, Heading } from "@chakra-ui/react";

export const Hero: React.FunctionComponent<{ title?: string }> = ({
  title = "Destitute",
}) => (
  <Flex
    justifyContent="center"
    // alignItems="center"
    flexDirection="column"
    height="100vh"
  >
    <Heading size="2xl">{title}</Heading>
    <br />
    <Heading size="2xl" fontWeight="300" fontStyle="italic">
      without the basic necessities of life.
    </Heading>
  </Flex>
);
