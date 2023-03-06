import { graphql } from "gatsby";

export const featuredImgFragment = graphql`
  fragment SmallFeaturedImg on Mdx {
    featuredImg {
        gatsbyImageData(
          width: 50
          height: 50
          placeholder: BLURRED
          transformations: ["c_fill", "g_auto:subject", "q_auto"]
        )
      }
  }
`
