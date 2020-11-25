import { Flex, Heading } from "@chakra-ui/react";

export const Hero: React.FunctionComponent<{ title?: string }> = ({
  title = "Destitute",
}) => (
  <Flex
    justifyContent="center"
    // alignItems="center"
    flexDirection="column"
    height="100vh"
    width="100%"
  >
    <Heading size="2xl" mb="2">
      {title}
    </Heading>

    <Heading size="2xl" fontWeight="300" fontStyle="italic">
      Without the basic necessities of life.
    </Heading>
  </Flex>
);
