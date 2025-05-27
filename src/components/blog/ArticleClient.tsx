"use client";

import { useEffect } from "react";
import ShareButtons from "./ShareButtons";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types/article";

interface ArticleClientProps {
  article: Article;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    document.title = `${article.title} | Article`;
  }, [article]);

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12">
          <div className="text-cyan-400 mb-4">{article.topic}</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-between text-gray-400 mb-6">
            <div className="flex items-center gap-4">
              <span>{article.author}</span>
              <span>•</span>
              <time dateTime={article.dateCreated}>
                {formatDate(article.dateCreated)}
              </time>
            </div>
            <ShareButtons
              url={currentUrl}
              title={article.title}
              summary={article.summary}
            />
          </div>
        </header>

        {article.mainImage && (
          <div className="mb-12">
            <img
              src={article.mainImage}
              alt={article.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {article.content.map((section) => (
            <div key={section.id} className="mb-8">
              {section.title && (
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
              )}

              {section.paragraph && (
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {section.paragraph}
                </p>
              )}

              {section.code && (
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    {section.code.content}
                  </code>
                </pre>
              )}

              {section.links && (
                <div className="flex flex-wrap gap-4">
                  {section.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}

              {section.steps && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {section.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
