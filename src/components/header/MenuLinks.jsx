import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link, } from "@chakra-ui/react";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import topNavItems from "../../data/topNavItems";
import { MdCoffee } from "react-icons/md";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {topNavItems.slice(0, topNavItems.length).map((item) => (
          <Link as={GatsbyLink} to={item.url} key={item.id}>
            <Text display="block">{item.name}</Text>
          </Link>
        ))}
        <Link textDecoration="none" _hover={{ textDecoration: "none"}} href="https://ko-fi.com/marprezd" isExternal>
          <Button
            variant={"outline"}
            size="md"
            rounded="md"
            color="secondary.50"
            _hover={{ color: "secondary.100"}}
            rightIcon={<MdCoffee />}
          >
            Ko-fi page
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
