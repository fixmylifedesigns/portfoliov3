"use client"
import { articles } from '@/data/articles';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function ArticlesPage() {
  const allArticles = articles.articles;
  const topics = [...new Set(allArticles.map(article => article.topic))];
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredArticles = allArticles
    .filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.some(section => 
          section.paragraph?.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTopic = !selectedTopic || article.topic === selectedTopic;

      return matchesSearch && matchesTopic;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Articles</h1>
        
        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Articles Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.urlName}`}
                  className="bg-gray-800/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  {article.mainImage && (
                    <div className="overflow-hidden">
                      <img
                        src={article.mainImage}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-cyan-400 text-sm mb-2">{article.topic}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>{formatDate(article.dateCreated)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Topics Sidebar */}
          <div className="md:w-64">
            <div className="bg-gray-800/30 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">Topics</h2>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className={`px-4 py-2 rounded-md text-left transition-colors ${
                    !selectedTopic 
                      ? 'bg-cyan-500 text-black' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All Topics
                </button>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-md text-left transition-colors ${
                      selectedTopic === topic 
                        ? 'bg-cyan-500 text-black' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}