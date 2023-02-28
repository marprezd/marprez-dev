/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from "react"
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  // setPostBodyComponents,
}) => {
  setHtmlAttributes({
    lang: "en",
  })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/inter/Inter.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
  /* setPostBodyComponents([]) */
}
