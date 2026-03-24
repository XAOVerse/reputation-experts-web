import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and expert analysis on online reputation management, digital PR, search optimisation, and brand protection.",
};

const ARTICLES = [
  {
    category: "Reputation Strategy",
    title: "Why Your Online Reputation Is Your Most Valuable Business Asset",
    excerpt:
      "In today's digital-first world, your online reputation often forms the first impression for potential clients, partners, and employers. We explore why proactive reputation management has become essential.",
    date: "March 2026",
    readTime: "5 min read",
    slug: "#",
    featured: true,
  },
  {
    category: "Search Management",
    title: "Understanding How Search Results Shape Perception",
    excerpt:
      "What appears on the first page of Google when someone searches your name or brand has an outsized impact on trust and decision-making. Here's what you need to know.",
    date: "March 2026",
    readTime: "4 min read",
    slug: "#",
  },
  {
    category: "Crisis Management",
    title: "How to Respond When Your Reputation Is Under Attack",
    excerpt:
      "A practical guide to the first 48 hours of a reputation crisis — from initial assessment to strategic response and long-term recovery planning.",
    date: "February 2026",
    readTime: "7 min read",
    slug: "#",
  },
  {
    category: "Digital PR",
    title: "Building Authority Through Strategic Content Placement",
    excerpt:
      "How thought leadership articles, press features, and high-authority content can transform your digital presence and push negative results off the first page.",
    date: "February 2026",
    readTime: "5 min read",
    slug: "#",
  },
  {
    category: "Review Management",
    title: "The Complete Guide to Managing Your Review Presence",
    excerpt:
      "A comprehensive overview of how to build authentic positive reviews, respond to feedback strategically, and address problematic content through proper channels.",
    date: "January 2026",
    readTime: "8 min read",
    slug: "#",
  },
  {
    category: "Personal Branding",
    title: "Executive Reputation: Protecting Your Personal Digital Footprint",
    excerpt:
      "For C-suite leaders and public-facing professionals, personal reputation management is no longer optional. We outline the key steps to taking control of your narrative.",
    date: "January 2026",
    readTime: "6 min read",
    slug: "#",
  },
];

export default function BlogPage() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <main className="pt-[64px]">
      {/* Hero */}
      <section className="bg-[#f2f2f2] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <p className="text-[#28b44f] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">Blog</p>
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-4">
            Insights & Resources
          </h1>
          <p className="text-[#666] text-[16px] leading-[1.75] max-w-[600px]">
            Expert analysis and practical guides on online reputation management, digital PR, and brand protection.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-[#f5f5f3] py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
            <Link href={featured.slug} className="block bg-[#161616] rounded-2xl p-8 lg:p-12 group hover:bg-[#1d1d1d] transition-colors">
              <span className="text-[#28b44f] text-[12px] font-medium uppercase tracking-wider">{featured.category}</span>
              <h2 className="text-white font-semibold text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.25] tracking-[-0.01em] mt-3 mb-4 max-w-[700px]">
                {featured.title}
              </h2>
              <p className="text-white/50 text-[15px] leading-[1.7] max-w-[600px] mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/30 text-[13px]">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{featured.readTime}</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-[#f5f5f3] pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article) => (
              <Link
                key={article.title}
                href={article.slug}
                className="bg-white rounded-2xl p-7 group hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <span className="text-[#28b44f] text-[11px] font-medium uppercase tracking-wider">{article.category}</span>
                <h3 className="text-[#0f0f0f] font-semibold text-[17px] leading-[1.35] mt-2 mb-3 group-hover:text-[#333] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#777] text-[14px] leading-[1.65] mb-5 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#bbb] text-[12px] mt-auto">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
