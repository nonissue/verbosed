import { Flex, Heading } from "@chakra-ui/react";

export const Hero: React.FunctionComponent<{ title?: string }> = ({
  title = "Destitute",
}) => (
  <Flex
    justifyContent="center"
    // alignItems="center"
    flexDirection="column"
    height="100vh"
    width="100vw"
    maxW="min(65ch, 100%)"
    m="auto"
    // height="50vh"
    // maxH="100vh"
    px={["6", "6", "4", "4"]}
    // overflowY="hidden"
    // width="100%"
  >
    <Heading size="2xl" mb="4">
      {title}
    </Heading>

    <Heading size="lg" fontWeight="300" fontStyle="italic" lineHeight="1.3">
      Without the basic necessities of life. With the necessities of life. With
      the basic wants of life. Absent the basic needs of life. Without the basic
      necessities of life. Without the basic necessities of life.
    </Heading>
  </Flex>
);
