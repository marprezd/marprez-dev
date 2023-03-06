import { graphql } from "gatsby"

export const frontmatterFragment = graphql`
  fragment SmallFrontmatter on Mdx {
    frontmatter {
      title
      date
      categories
      series
    }
  }
`
