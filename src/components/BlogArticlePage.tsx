import React, { useEffect, useState } from 'react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { 
  ArrowLeft, 
  Share2, 
  Calendar, 
  Clock, 
  User, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Home,
  ShieldCheck,
  ClipboardList,
  Sparkles
} from 'lucide-react';

interface Props {
  article: BlogPost;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const BlogArticlePage: React.FC<Props> = ({
  article,
  onNavigateHome,
  onNavigateBlog,
  onSelectArticle,
  onNavigateSection,
}) => {
  const [copied, setCopied] = useState(false);

  // SEO: Update document title, meta description, canonical link, and JSON-LD
  useEffect(() => {
    // 1. Update Title
    const originalTitle = document.title;
    document.title = `${article.title} | SPG11 Journey Tracker`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', article.metaDescription);
    }

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const originalCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', article.canonicalUrl);
    }

    // 4. Inject Schema.org JSON-LD BlogPosting
    const scriptId = 'blog-article-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': article.title,
      'description': article.metaDescription,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': article.canonicalUrl,
      },
      'url': article.canonicalUrl,
      'datePublished': article.publishedDate,
      'dateModified': article.publishedDate,
      'author': {
        '@type': 'Person',
        'name': article.author.name,
        'jobTitle': article.author.role,
        'worksFor': {
          '@type': 'Organization',
          'name': article.author.institution,
        },
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'SPG11 Journey Tracker & Research Alliance',
        'url': 'https://www.spg11journey.com',
      },
      'keywords': article.tags.join(', '),
      'articleSection': article.category,
    };
    scriptTag.textContent = JSON.stringify(schemaData);

    // Scroll smoothly to top on load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonicalLink && originalCanonical) canonicalLink.setAttribute('href', originalCanonical);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [article]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.metaDescription,
        url: article.canonicalUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(article.canonicalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Find related article objects
  const relatedArticles = BLOG_POSTS.filter((p) =>
    article.relatedSlugs.includes(p.slug)
  ).slice(0, 3);

  return (
    <article className="min-h-screen bg-white text-slate-900 pb-20">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3.5 sticky top-16 z-30 backdrop-blur-md bg-slate-50/90 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 text-xs">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-slate-500 truncate">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-teal-700 transition flex items-center gap-1 shrink-0 font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={onNavigateBlog}
              className="hover:text-teal-700 transition shrink-0 font-medium"
            >
              Blog
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-800 font-semibold truncate" aria-current="page">
              {article.title}
            </span>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium transition shadow-2xs"
              title="Share this article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onNavigateBlog}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-10">
        
        {/* Article Header */}
        <header className="space-y-6">
          
          {/* Zero-Pill Unboxed Metadata Header */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-teal-700 font-bold uppercase tracking-wider">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <time dateTime="2026-10-02">{article.publishedDate}</time>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Single Semantic H1 Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            {article.title}
          </h1>

          {/* Lead Excerpt */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Block (Zero-Pill, Human Attribution) */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">{article.author.name}</div>
                <div className="text-slate-500">{article.author.role} · {article.author.institution}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Medically Reviewed Information</span>
            </div>
          </div>

          {/* Visual Header Representation */}
          <div className="relative rounded-2xl bg-linear-to-br from-slate-900 via-teal-950 to-slate-900 p-8 text-white overflow-hidden shadow-sm border border-slate-800">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="text-xs font-mono text-teal-300 font-bold uppercase tracking-wider">
                {article.coverImage.badgeText}
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {article.title}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practical, patient-first health organization and longitudinal documentation strategies for families and clinicians.
              </p>
            </div>
          </div>

        </header>

        {/* Key Takeaways Card */}
        <section aria-label="Key Takeaways" className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-3">
          <h2 className="text-xs font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Key Takeaways</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-teal-950">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Article Body Sections */}
        <div className="space-y-12 text-slate-800 leading-relaxed text-base sm:text-lg">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              
              {/* Semantic H2 Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-2">
                {section.heading}
              </h2>

              {/* Optional H3 Subheading */}
              {section.subheading && (
                <h3 className="text-lg sm:text-xl font-semibold text-slate-700">
                  {section.subheading}
                </h3>
              )}

              {/* Paragraphs */}
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2 pl-2 text-sm sm:text-base text-slate-700">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Contextual Internal Link Callout */}
              {section.internalLink && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">{section.internalLink.description}</span>
                    <span className="text-slate-500">Integrated feature inside the SPG11 Hub</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(section.internalLink!.target)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold shrink-0 transition"
                  >
                    <span>{section.internalLink.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </section>
          ))}

          {/* Conclusion */}
          <section className="pt-6 border-t border-slate-200 space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Final Thoughts
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {article.conclusion}
            </p>
          </section>
        </div>

        {/* Mandatory Medical Disclaimer Callout */}
        <section aria-label="Medical Disclaimer" className="p-6 rounded-2xl bg-amber-50/80 border border-amber-300 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px] text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            The information contained in this article and throughout the SPG11 Journey Tracker portal is for educational, informational, and organizational purposes only and does not constitute medical advice, diagnosis, or treatment. The SPG11 Journey Tracker does not diagnose, treat, or cure any medical condition. Always seek the advice of your neurologist, medical geneticist, or other qualified healthcare provider with any questions regarding clinical management or health concerns.
          </p>
        </section>

        {/* Tags (Zero-Pill unboxed clean text) */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Topics covered:</span>
          {article.tags.map((tag, idx) => (
            <span key={idx}>
              #{tag}{idx < article.tags.length - 1 ? ' ·' : ''}
            </span>
          ))}
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section aria-label="Related Articles" className="pt-10 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">Continue Reading</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Related Articles</h3>
              </div>
              <button
                type="button"
                onClick={onNavigateBlog}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 transition flex items-center gap-1"
              >
                <span>Browse All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onSelectArticle(rel.slug)}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-white transition flex flex-col justify-between cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="text-[11px] text-slate-500 font-medium">
                      <span>{rel.category}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-teal-700 transition">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1 text-xs font-bold text-teal-700 group-hover:text-teal-900 transition">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back to Hub Banner */}
        <div className="p-6 rounded-2xl bg-linear-to-r from-slate-900 to-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
          <div className="space-y-1">
            <h4 className="font-bold text-base text-white">Ready to organize your health journey?</h4>
            <p className="text-xs text-slate-300">
              Start documenting your symptoms, milestones, and diagnostic records in our secure personal health vault.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateSection('journey')}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-1.5"
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Open Journey Tracker</span>
            </button>
            <button
              type="button"
              onClick={onNavigateBlog}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
            >
              Back to Blog
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
