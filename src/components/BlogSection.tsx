import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
  onSelectArticle?: (slug: string) => void;
}

export const BlogSection: React.FC<Props> = ({ onNavigate, onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Guides & Organization', 'Caregiver Tools', 'Clinical Preparation', 'Digital Health'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleArticleClick = (slug: string) => {
    if (onSelectArticle) {
      onSelectArticle(slug);
    } else {
      onNavigate(`blog/${slug}`);
    }
  };

  return (
    <section id="blog-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>SPG11 Educational Resources & Family Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SPG11 Journey Tracker Blog
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Practical guides on digital health organization, clinic visit preparation, and daily living strategies for individuals and families affected by Spastic Paraplegia Type 11.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 10 guides..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 shadow-2xs"
              />
            </div>

            <button
              type="button"
              onClick={() => onNavigate('blog')}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-2xs"
            >
              <span>View All 10 Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap gap-1.5 items-center" role="tablist" aria-label="Blog Categories">
          <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-slate-900 text-white font-bold shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(0, 6).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="p-6 space-y-3.5">
                
                {/* Zero-Pill Metadata */}
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <span className="text-teal-700 font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{post.publishedDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                  <button
                    type="button"
                    onClick={() => handleArticleClick(post.slug)}
                    className="text-left focus:outline-hidden focus:underline"
                  >
                    {post.title}
                  </button>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="text-[11px] text-slate-500 pt-1">
                  By <strong className="text-slate-700">{post.author.name}</strong>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleArticleClick(post.slug)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono">
                  /blog/{post.slug.substring(0, 18)}...
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Callout */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block text-sm">
              Explore All 10 SPG11 Guides & Caregiver Articles
            </span>
            <p className="text-slate-600">
              Browse our complete library of digital health, clinical visit checklists, and records organization tutorials.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('blog')}
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shrink-0"
          >
            <span>Visit Full Blog Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
