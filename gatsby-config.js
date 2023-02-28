/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `MARPREZ.DEV | A blog about Software Engineering and Programming`,
    description: `A blog about Software Engineering with Python, JS, and Java: topics range from algorithms and data structures to Machine Learning and another related topic.`,
    author: {
      name: "Mario Perez",
      bio: "I am a self-taught software developer interested in building apps for different devices, machine learning, and artificial intelligence to solve real-world problems. I like to share my experience and knowledge in software development. I hope my posts are meaningful to you.",
      avatar:
        "https://res.cloudinary.com/dieoeaoiy/image/upload/v1675195702/GatsbyImg/avatar/profile.jpg",
      social: {
        twitter: "marprezd",
        stackoverflow: "11650008/marprezd",
        github: "marprezd",
        kaggle: "marprezd",
        linkedin: "maprezd"
      },
    },
    image: `/icon.png`,
    siteUrl: `https://marprez.onrender.com/`,
  },
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      extensions: [`.mdx`, `.md`],
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `100`,
              // icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              // className: `custom-class`,
              // maintainCase: true,
              // removeAccents: true,
              // isIconAfterHeader: true,
              elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: true,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        // Required for uploading
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // Optional uploading options
        uploadFolder: process.env.CLOUDINARY_UPLOAD_FOLDER,
        overwriteExisting: process.env.NODE_ENV === "production" ? true : false,
        // Add the `gatsbyImageData` resolver to `BlogPostHeroImage`
        transformTypes: [`CloudinaryAsset`],
        // Optional transformation option
        defaultTransformations: ["c_fill", "g_auto", "q_auto"],
      },
    },
    {
      resolve: `gatsby-plugin-typesense`,
      options: {
        rootDir: `${__dirname}/public/blog`, // Required
        collectionSchema: {
          // Required
          name: "blog",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "tags",
              type: "string[]",
              optional: true,
              facet: true,
            },
            {
              name: "page_path", // Required
              type: "string",
            },
            {
              name: "page_priority_score", // Required
              type: "int32",
            },
          ],
          default_sorting_field: "page_priority_score", // Required
        },
        server: {
          // Required
          apiKey: "xyz",
          nodes: [
            {
              host: "localhost",
              port: "8108",
              protocol: "http",
            },
          ],
        },
      },
    },
  ],
};
