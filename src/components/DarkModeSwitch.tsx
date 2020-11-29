import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const DarkModeSwitch: React.FunctionComponent<ColorModeSwitcherProps> = (
  props
) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <RiMoonLine /> : <RiSunLine />}
      aria-label="Toggle UI appearance"
      variant="ghost"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
