import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  BoxProps,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import NextLink from "next/link";
import { PropsWithChildren } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, "as"> & BoxProps
>;

export const ExternalLink: React.FunctionComponent<NextChakraLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}) => {
  const externalLinkIconColor = useColorModeValue("gray.400", "gray.500");
  const externalLinkIconColorHover = useColorModeValue("gray.600", "gray.300");

  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <ChakraLink
        color={externalLinkIconColor}
        _hover={{ color: externalLinkIconColorHover }}
        {...chakraProps}
      >
        {children}
        <Icon
          // width="0.95em"
          // height="0.95em"
          aria-label="more info"
          as={RiExternalLinkLine}
          verticalAlign="text-top"
          mt="0.15em"
        />
      </ChakraLink>
    </NextLink>
  );
};
