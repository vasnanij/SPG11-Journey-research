import React, { useState, useEffect } from 'react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  Sparkles, 
  AlertCircle,
  Home,
  ClipboardList,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface Props {
  onSelectArticle: (slug: string) => void;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const BlogListing: React.FC<Props> = ({
  onSelectArticle,
  onNavigateHome,
  onNavigateSection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // SEO: Sync document title, meta description, and canonical link
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'SPG11 Journey Tracker Blog & Family Resource Center | www.spg11journey.com';

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical guides, caregiver toolkits, and digital health strategies for individuals and families affected by Spastic Paraplegia Type 11 (SPG11).'
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const originalCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://www.spg11journey.com/blog');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonicalLink && originalCanonical) canonicalLink.setAttribute('href', originalCanonical);
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3.5 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 text-xs">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-slate-500">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-teal-700 transition flex items-center gap-1 font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900 font-semibold" aria-current="page">
              Blog & Family Resources
            </span>
          </nav>

          <button
            type="button"
            onClick={() => onNavigateSection('journey')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition text-xs shadow-2xs"
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Launch Tracker</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Base & Patient Guides — Route: /blog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            SPG11 Journey Tracker Blog & Family Resource Center
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Practical strategies, caregiver toolkits, and digital documentation frameworks designed to empower people living with Spastic Paraplegia Type 11, their families, and clinicians.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Functional Category Filter Segmented Buttons */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Article Categories">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
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
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics, authors..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
              aria-label="Search articles"
            />
          </div>

        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
            >
              {/* Header Visual Simulation */}
              <div className="h-40 bg-linear-to-br from-slate-900 to-teal-950 p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-teal-300 font-bold uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span className="text-slate-400 font-normal">{post.readTime}</span>
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-slate-300 font-medium line-clamp-1">
                    {post.coverImage.badgeText}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* Zero-Pill Metadata (Clean text separated by middots) */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{post.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Article Title */}
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(post.slug)}
                      className="text-left focus:outline-hidden focus:underline"
                    >
                      {post.title}
                    </button>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Read More Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-slate-500 truncate max-w-[55%]">
                    By <strong className="text-slate-800">{post.author.name}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectArticle(post.slug)}
                    className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900 transition"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredPosts.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-3">
            <p className="text-sm">
              No articles found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Medical Disclaimer Banner */}
        <section aria-label="Medical Disclaimer" className="p-6 rounded-2xl bg-amber-50/70 border border-amber-300 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px] text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            The articles published on this platform are for general educational, caregiving, and health documentation purposes only and do not constitute clinical medical advice. The SPG11 Journey Tracker does not diagnose, treat, prevent, or cure any neurodegenerative disease. Always consult with a licensed neurologist or healthcare specialist for individual clinical decisions.
          </p>
        </section>

        {/* Bottom Hub Launcher Banner */}
        <div className="p-8 rounded-3xl bg-linear-to-r from-teal-950 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border border-teal-800/80 shadow-md">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
              Continuous Care Companion
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Put These Guides into Action with SPG11 Journey Tracker
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Track mobility scores, record physical therapy adjustments, safely store diagnostic MRIs, and export 1-page visit reports directly in your browser.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateSection('journey')}
              className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-2 shadow-sm"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Launch Journey Tracker</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNavigateHome}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
            >
              Return Home
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
