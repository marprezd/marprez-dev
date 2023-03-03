import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";
import { ThemeToggle } from "./ThemeToggle";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      <ThemeToggle />
      <IconButton 
      _light={{ bg: "primary.100", color: "primary.800" }}
      _dark={{ bg: "secondary.100", color: "secondary.800" }}
      aria-label="Menu Toggle"
      fontSize="20px"
      icon={isOpen ? <HiBarsArrowUp /> : <HiBarsArrowDown />} />
    </Box>
  );
};

export default MenuToggle;
