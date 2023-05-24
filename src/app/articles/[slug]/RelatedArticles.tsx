import ArticleCard from "@/components/ArticleCard";
import { Article } from "contentlayer/generated";

export default function RelatedArticles({
  articles,
}: {
  articles: Article[];
}): JSX.Element {
  return (
    <>
      {articles.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-6">
            Related Articles
          </h2>

          <article className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {articles.map((article: any) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </article>
        </div>
      )}
    </>
  );
}
