import { graphql } from "gatsby"

export const frontmatterFragment = graphql`
  fragment MediumFrontmatter on Mdx {
    frontmatter {
      title
      date
      modified
      author
      categories
      series
      tags
    }
  }
`
