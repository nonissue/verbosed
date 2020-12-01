// import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

export const Heading: React.FunctionComponent<
  { title: string } & HeadingProps
> = ({ title, ...chakraProps }) => {
  // const textColor = useColorModeValue("blue.700", "blue.300");~
  return (
    <ChakraHeading
      size="xl"
      mb="4"
      mt="4"
      width="100%"
      fontFamily="serif"
      fontWeight="400"
      py="2"
      letterSpacing="-0.01em"
      {...chakraProps}
    >
      {title}
    </ChakraHeading>
  );
};
