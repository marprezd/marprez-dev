import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeToggle = () => {
  function Switcher() {
    const { toggleColorMode, colorMode } = useColorMode();
    const SelectIcon = useColorModeValue(
      <HiMoon />,
      <HiSun />
    );
    return (
      <Tooltip
        label={colorMode === "light" ? "Toggle dark mode" : "Toggle light mode"}
        hasArrow
        placement="auto"
        arrowShadowColor="primary.900"
        bg="primary.900"
        _light={{ color: "white" }}
        _dark={{ color: "white" }}
      >
        <IconButton
          colorScheme={"primary"}
          aria-label="Toggle light and dark modes"
          fontSize="20px"
          mr={{ base: 2, md: 0 }}
          icon={SelectIcon}
          onClick={toggleColorMode}
        />
      </Tooltip>
    );
  }
  return <Switcher />;
};
