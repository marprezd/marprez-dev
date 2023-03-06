import { graphql } from "gatsby"

export const featuredImgFragment = graphql`
  fragment BigFeaturedImg on Mdx {
    featuredImg {
      gatsbyImageData(
        aspectRatio: 1.9,
        width: 864,
        placeholder: BLURRED,
        transformations: ["c_fill", "g_auto:subject", "q_auto"]
      )
    }
  }
`
