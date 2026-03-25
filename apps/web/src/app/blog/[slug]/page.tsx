import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs, ARTICLES } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, images: [{ url: article.image }] } };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="pt-[64px]">
      <div className="relative w-full h-[300px] lg:h-[440px] bg-[#111]">
        <Image src={article.image} alt={article.imageAlt} fill className="object-cover opacity-80" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[800px] mx-auto px-5 lg:px-8 pb-10 lg:pb-14">
          <span className="text-[#28b44f] text-[12px] font-semibold uppercase tracking-wider">{article.category}</span>
          <h1 className="text-white font-semibold text-[clamp(1.5rem,3.5vw,1.5rem)] leading-[1.2] mt-2">{article.title}</h1>
          <div className="flex items-center gap-4 text-white/40 text-[13px] mt-4">
            <span>{article.date}</span><span className="w-1 h-1 rounded-full bg-white/20" /><span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[720px] mx-auto px-5 lg:px-8">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-[#444] text-[16px] lg:text-[17px] leading-[1.85] mb-6">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8f6] py-12 lg:py-16">
        <div className="max-w-[720px] mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[#0f0f0f] font-semibold text-[22px] mb-3">Need help with your reputation?</h2>
          <p className="text-[#777] text-[15px] mb-6">Get a free, confidential consultation with our team.</p>
          <Link href="/contact" className="inline-block bg-[#e74c3c] text-white text-[14px] font-medium px-8 py-3 rounded-full hover:bg-[#d44335] transition-colors">Free Consultation</Link>
        </div>
      </section>

      <section className="bg-[#f5f5f3] py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#0f0f0f] font-semibold text-[22px] mb-8">More Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherArticles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="bg-white rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={a.image} alt={a.imageAlt} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[#28b44f] text-[11px] font-medium uppercase tracking-wider">{a.category}</span>
                  <h3 className="text-[#0f0f0f] font-semibold text-[16px] leading-[1.35] mt-2 mb-2 group-hover:text-[#333]">{a.title}</h3>
                  <div className="flex items-center gap-3 text-[#bbb] text-[12px] mt-auto pt-3">
                    <span>{a.date}</span><span className="w-1 h-1 rounded-full bg-[#ddd]" /><span>{a.readTime}</span>
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
