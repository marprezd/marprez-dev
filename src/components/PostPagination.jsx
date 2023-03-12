import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Stack,
  Text,
  Link,
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link as GatsbyLInk } from "gatsby";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const PostPagination = (props) => {
  const hasAnotherPost = props.next || props.previous;
  const twitterUrl = "https://twitter.com/marprezd";
  const facebookUrl = "https://www.facebook.com/marprezd/";

  return (
    <>
      {hasAnotherPost && (
        <Stack direction={["column", "row"]} spacing="2">
          {props.previous ? (
            <Box w={{ base: "100%", md: "50%" }} _light={{ bg: "white" }} _dark={{ bg: "gray.900" }} borderRadius={5} shadow="md">
            <Box p={4} display={{ lg: "flex" }}>
              <Box flexShrink={0}>
                <GatsbyImage
                  imgStyle={{ borderRadius: "10px" }}
                  loading="lazy"
                  image={props.previous.featuredImg.gatsbyImageData}
                  alt={props.previous.frontmatter.title}
                />
              </Box>
              <Box mt={{ base: 4, lg: 0 }} ml={{ lg: 6 }}>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  _light={{ color: "secondary.600" }} _dark={{ color: "secondary.100" }}
                >
                  Read previous post
                </Text>
                <Link
                  mt={1}
                  as={GatsbyLInk}
                  display="block"
                  fontSize="lg"
                  lineHeight="normal"
                  fontWeight="semibold"
                  to={props.previous.fields.slug}
                >
                  {props.previous.frontmatter.title}
                </Link>
                <Text mt={2} fontSize="sm" _light={{ color: "gray.500" }} _dark={{ color: "gray.300" }}>
                  {props.previous.excerpt}
                </Text>
              </Box>
            </Box>
            </Box>
          ) : (
            <Card align="center" w={{ base: "100%", md: "50%" }} shadow="md">
              <CardHeader>
                <Heading size="xl" textAlign="center">This is the first post</Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign="center">
                  Stay in touch to receive information about new publications.
                </Text>
              </CardBody>
              <CardFooter gap={2}>
                <Button 
                colorScheme="twitter" 
                leftIcon={<FaTwitter />}
                onClick={() =>
                window.open(twitterUrl, '_blank')}
                >
                  Twitter
                </Button>
                <Button 
                colorScheme="facebook" 
                leftIcon={<FaFacebookF />}
                onClick={() =>
                window.open(facebookUrl, '_blank')}
                >
                  Facebook
                </Button>
              </CardFooter>
            </Card>
          )}
          {props.next ? (
            <Box w={{ base: "100%", md: "50%" }} _light={{ bg: "white" }} _dark={{ bg: "gray.900" }} borderRadius={5} shadow="md">
            <Box p={4} display={{ lg: "flex" }}>
              <Box flexShrink={0}>
                <GatsbyImage
                  imgStyle={{ borderRadius: "10px" }}
                  loading="lazy"
                  image={props.next.featuredImg.gatsbyImageData}
                  alt={props.next.frontmatter.title}
                />
              </Box>
              <Box mt={{ base: 4, lg: 0 }} ml={{ lg: 6 }}>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  _light={{ color: "secondary.600" }} _dark={{ color: "secondary.100" }}
                >
                  Read next post
                </Text>
                <Link
                  mt={1}
                  as={GatsbyLInk}
                  display="block"
                  fontSize="lg"
                  lineHeight="normal"
                  fontWeight="semibold"
                  to={props.next.fields.slug}
                >
                  {props.next.frontmatter.title}
                </Link>
                <Text mt={2} fontSize="sm" _light={{ color: "gray.500" }} _dark={{ color: "gray.300" }}>
                  {props.next.excerpt}
                </Text>
              </Box>
            </Box>
            </Box>
          ) : (
            <Card align="center" w={{ base: "100%", md: "50%" }}>
              <CardHeader>
                <Heading size="xl" textAlign="center">This is the last post</Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign="center">
                  Stay in touch to receive information about new publications.
                </Text>
              </CardBody>
              <CardFooter gap={2}>
                <Button 
                colorScheme="twitter" 
                leftIcon={<FaTwitter />}
                onClick={() =>
                window.open(twitterUrl, '_blank')}
                >
                  Twitter
                </Button>
                <Button 
                colorScheme="facebook" 
                leftIcon={<FaFacebookF />}
                onClick={() =>
                window.open(facebookUrl, '_blank')}
                >
                  Facebook
                </Button>
              </CardFooter>
            </Card>
          )}
        </Stack>
      )}
    </>
  );
};

export default PostPagination;
