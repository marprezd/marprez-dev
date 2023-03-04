import React from "react";
import {
  Container,
  Spacer,
  Flex,
  Box,
  Square,
  Heading,
  Highlight,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { navigate } from "gatsby";
import DevActivitySvg from "./hero/DevActivitySvg";
import HeroWavesSvg from "./hero/HeroWavesSvg";

export const Hero = () => {
  const wavesGradientStart = useColorModeValue("rgba(0, 122, 112, .8)", "rgba(0, 0, 0, 1)")
  const wavesGradientStop = useColorModeValue("rgba(0, 122, 112, 1)", "rgba(23, 25, 35, 0.92)")

  return (
    <Box as="section" overflow="hidden" position="relative">
      <Container maxW={"5xl"}>
        <Flex
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <Box w={["100%", "100%", "100%", "49%"]}>
            <Square size="100%">
              <Box
                textAlign={["center", "center", "center", "left"]}
                px={[4, 4, 4, 0]}
              >
                <Heading as="h1" size={["2xl", "2xl", "3xl", "4xl"]} mb={4}>
                  Welcome to my personal blog!
                </Heading>
                <Heading as="h2" size="md" lineHeight="taller">
                  <Highlight
                    query={[
                      "Python",
                      "Machine Learning",
                      "Data Visualization",
                      "APIs Design",
                      "Java",
                    ]}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "secondary.300",
                      color: "secondary.900",
                      fontFamily: "JetBrains Mono",
                    }}
                  >
                    I am Mario and I write about Python, Machine Learning, Data
                    Visualization, APIs Design, Java, and other Tech subjects
                  </Highlight>
                </Heading>
                <Button
                  size="lg"
                  colorScheme="primary"
                  my="24px"
                  textTransform="uppercase"
                  fontSize="sm"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Know About Me
                </Button>
              </Box>
            </Square>
          </Box>
          <Spacer />
          <Box w={["100%", "100%", "100%", "49%"]}>
            <Square size="100%">
              <DevActivitySvg />
            </Square>
          </Box>
        </Flex>
      </Container>
      <HeroWavesSvg
        gradientStart={wavesGradientStart}
        gradientStop={wavesGradientStop}
      />
    </Box>
  );
};
