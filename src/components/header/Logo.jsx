import React from "react";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <StaticImage
          src="https://res.cloudinary.com/dieoeaoiy/image/upload/c_scale,f_auto,q_auto,w_170/v1677709856/GatsbyImg/logo.png"
          alt="marprez logo"
          placeholder="blurred"
          layout="fixed"
          width={170}
        />
      </Link>
    </Box>
  );
}
