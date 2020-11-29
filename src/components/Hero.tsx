import { Flex, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";

export const Hero: React.FunctionComponent<{ title?: string }> = ({
  title = "Destitute",
}) => {
  const externalLinkIconColor = useColorModeValue("gray.300", "gray.500");
  const definitionColor = useColorModeValue("gray.600", "gray.300");
  const dateColor = useColorModeValue("gray.400", "gray.600");
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      width="100vw"
      maxW="min(65ch, 100%)"
      m="auto"
      textAlign="center"
      px={["6", "6", "4", "4"]}
    >
      <Heading size="xl" mb="4" fontWeight="400" fontFamily="serif">
        {title}&nbsp;
        <Icon
          aria-label="more info"
          as={RiExternalLinkLine}
          verticalAlign="text-top"
          color={externalLinkIconColor}
          mt="0.18em"
          width="0.8em"
          height="0.8em"
        />
      </Heading>

      <Heading
        size="md"
        fontWeight="350"
        // fontFamily="Inter"
        letterSpacing="-0.02em"
        color={definitionColor}
        fontStyle="italic"
        lineHeight="1.4"
      >
        1. extremely poor and lacking the means to provide for oneself.
      </Heading>

      <Heading
        size="xs"
        fontWeight="400"
        fontFamily="body"
        color={dateColor}
        letterSpacing="0.2em"
        mt="4"
        lineHeight="1.4"
      >
        20-11-27
      </Heading>
    </Flex>
  );
};
