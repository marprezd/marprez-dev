import * as React from "react";
import {
  ChakraProvider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Fonts from "./Fonts";
import theme from "../@chakra-ui/gatsby-plugin/theme";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Grid
        templateAreas={`"header header" "main main" "footer footer"`}
        gridTemplateRows={"auto auto auto"}
        gap={10}
      >
        <GridItem area={"header"} as="header">
          <Header />
        </GridItem>
        <GridItem area={"main"} as="main" my={20}>
          {children}
        </GridItem>
        <GridItem area={"footer"} as="footer">
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
