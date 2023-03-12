import React, { useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export const Comments = () => {
  const utteranceTheme = useColorModeValue("github-light", "github-dark");
  const commentNodeId = 'comments';

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "marprezd/marprez-dev");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("label", "comment :speech_balloon:");
    scriptEl.setAttribute("theme", utteranceTheme);

    const scriptParentNode = document.getElementById(commentNodeId);
    scriptParentNode.appendChild(scriptEl);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, [utteranceTheme]);

  return <Box my={10} id={commentNodeId} />;
};
