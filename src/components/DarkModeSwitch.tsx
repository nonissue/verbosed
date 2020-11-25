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
      aria-label="Toggle UI appearance"
      variant="ghost"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
