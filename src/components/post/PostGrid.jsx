import React from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Box,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { DateTime } from "luxon";
import PropTypes from "prop-types";
import { FiClock, FiCalendar, FiMinus } from "react-icons/fi";

const PostCard = ({ post }) => {
  const dtCreated = DateTime.fromISO(post.date);

  return (
    <LinkBox as="article">
      <Card size="sm" _dark={{ bg: "gray.800" }} boxShadow='md'>
        <CardBody>
          <GatsbyImage
            image={post.image}
            alt={post.title}
            style={{ borderRadius: 6 }}
          />
          <Box mt={4} display="flex">
            <Box
              fontSize="xs"
              as="span"
              display="flex"
              alignItems="center"
              _light={{ color: "secondary.700" }}
              _dark={{ color: "secondary.300" }}
            >
              <Icon as={FiClock} mr="1" boxSize={4} />
              {post.timeToRead}
            </Box>
            <Box display="flex" alignItems="center" as="span" mx={2}>
              <Icon as={FiMinus} />
            </Box>
            <Box
              fontSize="xs"
              as="span"
              display="flex"
              alignItems="center"
              _light={{ color: "secondary.700" }}
              _dark={{ color: "secondary.300" }}
            >
              <Icon as={FiCalendar} mr="1" boxSize={4} />
              {dtCreated.toLocaleString(DateTime.DATETIME_MED)}
            </Box>
          </Box>
          <Heading as="h4" size="lg" my={1}>
            {post.title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: "secondary.700" }}
            _dark={{ color: "secondary.300" }}
          >
            By {post.author}
          </Text>
          <Text fontSize="sm" my={4}>
            <LinkOverlay as={Link} to={post.slug}>
              {post.excerpt}
            </LinkOverlay>
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="ghost"
            colorScheme="primary"
            textTransform="uppercase"
            fontSize="sm"
            as={Link}
            to={post.slug}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export default function PostGrid(props) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      mt={4}
    >
      {props.posts.map(({ node }) => {
        const post = {
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          image: node.featuredImg.gatsbyImageData,
          author: node.frontmatter.author,
          slug: node.fields.slug,
          timeToRead: node.fields.timeToRead.text,
          excerpt: node.excerpt,
        };
        return <PostCard key={node.id} post={post} />;
      })}
    </SimpleGrid>
  );
}

PostCard.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string.isRequired,
  }),
};
