const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require(`gatsby-awesome-pagination`);
const readingTime = require(`reading-time`);
const { createRemoteImageNode } = require("gatsby-transformer-cloudinary");
const intersection = require("lodash.intersection")
var stringSimilarity = require("string-similarity")

/**
 * @type {import('gatsby').GatsbyNode['createResolvers']}
 */
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Mdx: {
      relatedReads: {
        type: "[Mdx!]",
        args: { limit: "Int" },
        resolve: async (source, args, context, info) => {
          const limit = args.limit
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                fields: { slug: { ne: source.fields.slug } },
              },
            },
            type: "Mdx",
          })

          const otherPosts = entries
          return Array.from(otherPosts)
            .map(p => ({
              ...p,
              similarity:
                intersection(p.frontmatter.tags, source.frontmatter.tags)
                  .length +
                3.0 *
                  stringSimilarity.compareTwoStrings(
                    p.frontmatter.description,
                    source.frontmatter.description
                  ),
            }))
            .filter(({ similarity }) => similarity !== 0)
            .sort((a, b) => {
              const interval_a = Math.abs(
                new Date(a.frontmatter.date) - new Date(source.frontmatter.date)
              )
              const interval_b = Math.abs(
                new Date(b.frontmatter.date) - new Date(source.frontmatter.date)
              )

              return b.similarity - a.similarity || interval_a - interval_b
            })
            .slice(0, limit)
        },
      },
    },
  }
  createResolvers(resolvers)
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define the template
  const blogPage = path.resolve(`./src/templates/blog-page.jsx`);
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);

  const result = await graphql(
    `
      {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract post data from query
  const posts = result.data.allMdx.edges;

  // Create the blog index pages like `/blog`, `/blog/page/2`, `/blog/page/3`, etc.
  // All pages will have up to 6 items. If there are more posts,
  // each page will link to the next and previous pages.
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 6,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/blog" : "/blog/page"),
    component: blogPage,
  });

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].node.id;

      createPage({
        path: post.node.fields.slug,
        component: `${blogPost}?__contentFilePath=${post.node.internal.contentFilePath}`,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  getNode,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  // const { createNodeField, createNode } = actions;
  // For all Mdx nodes that have a featured image url, call createRemoteImageNode
  if (
    node.internal.type === `Mdx` &&
    node.frontmatter.featuredImgUrl !== null
  ) {
    // Upload the image to Cloudinary
    const imageNode = await createRemoteImageNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNode: node,
      createNode,
      createNodeId,
      createContentDigest,
      reporter,
    });

    let slug;

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${node.frontmatter.slug}/`;
    } else {
      slug = createFilePath({ node, getNode });
    }

    // Add node field
    createNodeField({
      name: "slug",
      node,
      value: `/blog${slug}`,
    });

    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });

    createNodeField({
      node: node,
      name: "featuredImg",
      value: imageNode.id,
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = gatsbyUtils => {
  const { actions } = gatsbyUtils

  // Connect the node to the CloudinaryAsset using @link
  const MdxFeaturedImgType = `
      type Mdx implements Node { 
        featuredImgUrl: String!
        featuredImg: CloudinaryAsset @link(from: "fields.featuredImg" by: "id")
      }
    `

  actions.createTypes([MdxFeaturedImgType])
}
