import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "./data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and expert analysis on online reputation management, digital PR, and brand protection.",
};

export default function BlogPage() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <p className="text-[#28b44f] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">Blog</p>
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] mb-4">Insights &amp; Resources</h1>
          <p className="text-[#666] text-[16px] leading-[1.75] max-w-[600px]">Expert analysis and practical guides on online reputation management, digital PR, and brand protection.</p>
        </div>
      </section>

      {featured && (
        <section className="bg-[#f5f5f3] py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
            <Link href={`/blog/${featured.slug}`} className="block bg-[#161616] rounded-2xl overflow-hidden group hover:bg-[#1d1d1d] transition-colors lg:grid lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[340px]">
                <Image src={featured.image} alt={featured.imageAlt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[#28b44f] text-[12px] font-medium uppercase tracking-wider">{featured.category}</span>
                <h2 className="text-white font-semibold text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.25] mt-3 mb-4">{featured.title}</h2>
                <p className="text-white/50 text-[15px] leading-[1.7] mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-white/30 text-[13px]">
                  <span>{featured.date}</span><span className="w-1 h-1 rounded-full bg-white/20" /><span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-[#f5f5f3] pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={article.image} alt={article.imageAlt} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[#28b44f] text-[11px] font-medium uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-[#0f0f0f] font-semibold text-[17px] leading-[1.35] mt-2 mb-3 group-hover:text-[#333]">{article.title}</h3>
                  <p className="text-[#777] text-[14px] leading-[1.65] mb-5 flex-1">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-[#bbb] text-[12px] mt-auto">
                    <span>{article.date}</span><span className="w-1 h-1 rounded-full bg-[#ddd]" /><span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
