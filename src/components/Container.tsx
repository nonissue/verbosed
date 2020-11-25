import { Flex, FlexProps } from "@chakra-ui/react";

export const Container: React.FunctionComponent<FlexProps> = (props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      maxW="min(75ch, 100%)"
      mx="auto"
      px={["6", "6", "2", "2"]}
      {...props}
    />
  );
};
