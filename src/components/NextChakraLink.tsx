import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  BoxProps,
} from "@chakra-ui/react";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

// _hover prop doesn't exist in LinkProps, but works
// so BoxProps are provided as well
export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, "as"> & BoxProps
>;

//  Has to be a new component because both chakra and next share the `as` keyword
export const NextChakraLink: React.FunctionComponent<NextChakraLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextChakraLinkProps) => {
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
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  );
};
