import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ArticleClient from "@/components/blog/ArticleClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.articles.find((a) => a.urlName === params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.dateCreated,
      authors: [article.author],
      images: "/og-article.png",
      url: `https://irvingduran.dev/articles/${article.urlName}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: "/og-article.png",
    },
  };
}

export async function generateStaticParams() {
  return articles.articles.map((article) => ({
    slug: article.urlName,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = articles.articles.find((a) => a.urlName === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} />;
}
