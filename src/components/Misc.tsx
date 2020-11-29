import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

export const Heading: React.FunctionComponent<
  { title: string } & HeadingProps
> = ({ title, ...chakraProps }) => {
  // const textColor = useColorModeValue("blue.700", "blue.300");~
  return (
    <ChakraHeading
      size="xl"
      // align="center"
      mb="4"
      mt="4"
      // justifyItems="left"
      width="100%"
      fontFamily="serif"
      // textTransform="uppercase"
      fontWeight="400"
      py="2"
      // borderBottom="1px"
      // borderBottomColor="gray.700"
      // borderTop="1px"
      // borderTopColor="gray.700"
      letterSpacing="-0.01em"
      {...chakraProps}
    >
      {title}
    </ChakraHeading>
  );
};
