import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Hero } from "../components/Hero";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Box as="section" w="100%" my={8}>
        <Container>...</Container>
      </Box>
    </Layout>
  );
}
