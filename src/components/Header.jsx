import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MenuToggle from "./header/MenuToggle";
import Logo from "./header/Logo";
import MenuLinks from "./header/MenuLinks";
import { ThemeToggle } from "./header/ThemeToggle";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      borderBottom="1px"
      boxShadow="base"
      px={5}
      py={3}
      _light={{ bg: "primary.800", color: "white", borderColor: "gray.200" }}
      _dark={{ bg: "gray.900", color: "white", borderColor: "gray.600" }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Box display={{ base: "none", md: "block" }}>
        <ThemeToggle />
      </Box>
    </NavBarContainer>
  );
};
