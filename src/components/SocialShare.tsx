import { server } from "config";
import { Article, Tag } from "contentlayer/generated";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { IconBrandFacebook, IconBrandTwitter, IconBrandReddit, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

export default function SocialShare({
  article,
}: {
  article: Article;
}): JSX.Element {
  const url = `${server}/articles/${article.slug}`;
  return (
    <div className="flex justify-center space-x-2">
      <div>
        <FacebookShareButton
          url={url}
          quote={article.title}
          hashtag={(article.tags as Tag[])[0].title}
          blankTarget={true}
        >
          <IconBrandFacebook size={28} />
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton
          url={url}
          title={article.title}
          hashtags={[
            (article.tags as Tag[]).map((tag) => tag.title).join(", "),
          ]}
          blankTarget={true}
        >
          <IconBrandTwitter size={28} />
        </TwitterShareButton>
      </div>
      <div>
        <RedditShareButton url={url} title={article.title} blankTarget={true}>
          <IconBrandReddit size={28} />
        </RedditShareButton>
      </div>
      <div>
        <LinkedinShareButton url={url} blankTarget={true}>
          <IconBrandLinkedin size={28} />
        </LinkedinShareButton>
      </div>
      <div>
        <WhatsappShareButton url={url} title={article.title} blankTarget={true}>
          <IconBrandWhatsapp size={28} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
