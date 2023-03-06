import React from "react";
import { graphql } from "gatsby";
import {
  Grid,
  GridItem,
  Link,
  Container,
  Box,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import PostGrid from "../components/post/PostGrid";

export default function BlogPage({ data, pageContext }) {
  const posts = data.allMdx.edges;
  const itemPerPage = data.allMdx.pageInfo;
  const total = data.allMdx.pageInfo;

  return (
    <Layout>
      <Container maxW={"6xl"} py="10">
        <Grid autoRows templateColumns="repeat(12, 1fr)" gap={4} as="section">
          <GridItem colSpan={[12, 12, 8]}>
            <Box
              _light={{ bg: "gray.300" }}
              _dark={{ bg: "gray.700" }}
              p={4}
              rounded="md"
            >
              <Stack direction={["column", "row"]} justify="space-between">
                <Box>
                  <Heading
                    textTransform="capitalize"
                    _light={{ color: "gray.700" }}
                    _dark={{ color: "gray.200" }}
                    as="h3"
                    size="xl"
                  >
                    Blog page
                  </Heading>
                </Box>
                <Box p={2} _light={{ bg: "tertiary.700", color: "white" }} _dark={{ bg: "tertiary.100", color: "tertiary.800" }} rounded="full">
                Showing{" "}
                <Text as="span" fontWeight="medium">
                    1
                </Text>{" "}
                to{" "}
                <Text as="span" fontWeight="medium">
                {itemPerPage.perPage}
                </Text>{" "}
                of{" "}
                <Text as="span" fontWeight="medium">
                {total.totalCount} 
                </Text>{" "}
                Entries
                </Box>
              </Stack>
              <Box as="hr" h="px" my="4" bg="gray.500" />
              <Card variant="outline" size="sm">
                <CardBody>
                  <StaticImage
                  src="https://res.cloudinary.com/dieoeaoiy/image/upload/ar_16:9,c_fill,f_auto,e_sharpen,g_auto,w_746/v1675181057/GatsbyImg/patterns/pattern-background-1.jpg" 
                  placeholder="blurred"
                  alt="Blog page image"
                  loading="eager"
                  style={{ borderRadius: 6 }}
                   />
                   <Text fontSize="xs" as="figcaption" textAlign="center" my={2}>
                    Image by{" "}
                    <Link href="https://pixabay.com/users/dariuszsankowski-1441456/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1067991" isExternal>Dariusz Sankowski</Link>{" "}
                    from{" "}
                    <Link href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1067991" isExternal>Pixabay</Link>
                   </Text>
                </CardBody>
              </Card>
              {posts.length > 0 && (
                <PostGrid posts={posts} context={pageContext} />
              )}
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 12, 4]} bg="gray.100"></GridItem>
        </Grid>
      </Container>
    </Layout>
  );
}

export const postsQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          fields {
            slug
            timeToRead {
              text
            }
          }
          ...MediumFrontmatter
          ...MediumFeaturedImg
          excerpt(pruneLength: 140)
        }
      }
      pageInfo {
        perPage
        totalCount
      }
    }
  }
`;
