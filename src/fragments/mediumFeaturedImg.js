import { graphql } from "gatsby"

export const featuredImgFragment = graphql`
  fragment MediumFeaturedImg on Mdx {
    featuredImg {
      gatsbyImageData(
        width: 500
        placeholder: BLURRED
        transformations: ["c_fill", "g_auto:subject", "q_auto"]
      )
    }
  }
`
