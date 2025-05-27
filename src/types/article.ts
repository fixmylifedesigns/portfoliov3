export interface ArticleContent {
  id: number;
  title: string;
  paragraph?: string;
  code?: {
    language: string;
    content: string;
  };
  links?: Array<{
    text: string;
    url: string;
  }>;
  steps?: string[];
}

export interface Article {
  id: number;
  urlName: string;
  title: string;
  dateCreated: string;
  author: string;
  topic: string;
  summary: string;
  mainImage?: string;
  content: ArticleContent[];
}
