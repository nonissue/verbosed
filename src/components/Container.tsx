import { Flex, FlexProps } from "@chakra-ui/react";

export const Container: React.FunctionComponent<FlexProps> = (props) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // maxW="min(65ch, 100%)"
      mx="auto"
      // px={["6", "6", "4", "4"]}
      {...props}
    />
  );
};
