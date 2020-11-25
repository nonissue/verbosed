import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch: React.FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      // position="fixed"
      // top="1rem"
      // right="1rem"
      color="aqua"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
