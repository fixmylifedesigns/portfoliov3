import ArticleHeader from "@/components/layout/ArticleHeader";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Articles | Irving Duran",
  description:
    "Explore our articles about VPN security, remote work, and technology guides.",
  images: "/og-article.png",
   url: "https://www.irvingduran.dev/articles",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <ArticleHeader />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}
