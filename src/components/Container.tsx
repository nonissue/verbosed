import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Container: React.FunctionComponent<FlexProps> = (props) => {
  const { colorMode } = useColorMode();

  // const bgColor = { light: "gray.50", dark: "gray.900" };
  // const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      maxW="min(65ch, 100%)"
      mx="auto"
      px={["4", "4", "2", "2"]}
      {...props}
    />
  );
};
