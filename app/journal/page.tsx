
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { articles } from "@/lib/articles";



const categories = [
  "All",
  "Shadow Work",
  "Self-Awareness",
  "Self-Sabotage",
  "Self-Acceptance",
  "Triggers",
  "Inner Child",
];

export default function JournalPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;

      const searchText = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      {/* Journal Introduction */}
      <section className="border-b border-[#202622]/10 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1500px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#687068]">
            The Journal
          </p>

          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            A place to slow down,
            <br />
            look inward, and grow.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#59615a] md:text-xl">
            Honest conversations about shadow work, self-awareness,
            emotional patterns, self-sabotage, and becoming more comfortable
            with who you really are.
          </p>
        </div>
      </section>

      {/* Search + Categories */}
   <section className="border-b border-[#202622]/10 px-6 py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:max-w-sm">
              <label
                htmlFor="journal-search"
                className="sr-only"
              >
                Search the journal
              </label>

              <input
                id="journal-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search the journal..."
                className="w-full border-b border-[#202622]/20 bg-transparent px-0 py-3 text-sm text-[#202622] outline-none placeholder:text-[#7a817b] focus:border-[#344137]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`border px-4 py-2 text-xs transition ${
                    category === item
                      ? "border-[#344137] bg-[#344137] text-white"
                      : "border-[#202622]/15 text-[#59615a] hover:border-[#344137] hover:text-[#202622]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex items-end justify-between border-b border-[#202622]/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687068]">
                Explore
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                From the Journal
              </h2>
            </div>

            <p className="hidden text-sm text-[#687068] md:block">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "article" : "articles"}
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <article key={article.title} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e6dc]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />

                    {!article.published && (
                      <div className="absolute left-4 top-4 bg-[#f7f5ef] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#59615a]">
                        Coming Soon
                      </div>
                    )}
                  </div>

                  <div className="pt-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#687068]">
                      <span>{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-[#687068]" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-4xl">
                      {article.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#59615a]">
                      {article.excerpt}
                    </p>

                    {article.published ? (
                      <Link
                        href={`/journal/${article.slug}`}
                        className="mt-6 inline-flex border border-[#344137] px-5 py-2.5 text-sm font-medium text-[#344137] transition hover:bg-[#344137] hover:text-white"
                      >
                        Read Article
                      </Link>
                    ) : (
                      <span className="mt-6 inline-block text-sm text-[#8a908a]">
                        More soon
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="font-serif text-3xl">
                Nothing found
              </h3>

              <p className="mt-3 text-[#687068]">
                Try a different search or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 border border-[#344137] bg-[#344137] px-6 py-3 text-sm text-white transition hover:bg-[#202622]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Journal Philosophy */}
      <section className="border-y border-[#202622]/10 bg-[#ece9df] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#687068]">
            A gentle reminder
          </p>

          <blockquote className="mt-6 font-serif text-3xl leading-tight text-[#202622] md:text-5xl">
            “You don't have to have yourself figured out to begin
            understanding yourself.”
          </blockquote>

          <div className="mx-auto mt-8 h-px w-12 bg-[#344137]/40" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#687068]">
            Stay connected
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            A little more awareness,
            <br />
            delivered occasionally.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#59615a]">
            New reflections, practical exercises, and thoughtful
            conversations about becoming a little more honest with yourself.
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-[#202622]/15 bg-white/60 px-4 py-3 text-sm outline-none placeholder:text-[#7a817b] focus:border-[#344137]"
            />

            <button
              type="submit"
              className="border border-[#344137] bg-[#344137] px-6 py-3 text-sm text-white transition hover:bg-[#202622]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#202622]/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#687068] md:flex-row md:items-center md:justify-between">
                <p>© 2026 Facing My Shadow</p>

        <div className="flex gap-6">
          <Link
            href="/"
            className="transition hover:text-[#202622]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#202622]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#202622]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  </main>
);
}