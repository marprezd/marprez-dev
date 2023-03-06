import { graphql } from "gatsby"

export const frontmatterFragment = graphql`
  fragment BigFrontmatter on Mdx {
    frontmatter {
      title
      date
      modified
      author
      description
      featuredImgAuthor
      featuredImgCreditLink
      featuredImgHostName
      categories
      series
      tags
      toc
    }
  }
`
