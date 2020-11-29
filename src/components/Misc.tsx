import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

export const Heading: React.FunctionComponent<
  { title: string } & HeadingProps
> = ({ title, ...chakraProps }) => {
  // const textColor = useColorModeValue("blue.700", "blue.300");~
  return (
    <ChakraHeading
      size="2xl"
      // align="center"
      mb="2"
      mt="4"
      // justifyItems="left"
      width="100%"
      fontFamily="heading"
      // textTransform="uppercase"
      fontWeight="800"
      // color={textColor}
      // textDecoration="underline"
      py="4"
      // borderBottom="1px"
      // borderBottomColor="gray.700"
      // borderTop="1px"
      // borderTopColor="gray.700"
      letterSpacing="-0.03em"
      // fontStyle="italic"
      {...chakraProps}
      // letterSpacing="0.05em"
      // textTransform="uppercase"
    >
      {title}
    </ChakraHeading>
  );
};
