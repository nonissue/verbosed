import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const DarkModeSwitch: React.FunctionComponent<ColorModeSwitcherProps> = (
  props
) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      // position="fixed"
      // top="1rem"
      // right="1rem"
      // alignContent="flex-end"
      alignSelf=""
      aria-label="Toggle UI appearance"
      variant="ghost"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
