import ArticleHeader from "@/components/layout/ArticleHeader";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Training | Irving Duran",
  description:
    "Explore my Muay Thai training journey, including experience, fitness goals, gyms trained in, and content created.",
  images: "/og-article.png",
   url: "https://www.irvingduran.dev/muay-thai",
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
