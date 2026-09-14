"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    category: "SHADOW WORK",
    title: "Why We Hide the Parts of Ourselves We Need to Understand",
    excerpt:
      "The traits we reject don't disappear — they often find other ways to surface.",
    date: "SEP 12, 2026",
    read: "8 MIN READ",
    
      image: "/images/shadow-work.jpg",
  },
  {
    category: "SELF-SABOTAGE",
    title: "The Hidden Reasons You Keep Getting in Your Own Way",
    excerpt:
      "Sometimes self-sabotage is a form of protection for something deeper.",
    date: "SEP 8, 2026",
    read: "6 MIN READ",
  
     image: "/images/self-sabotage.jpg",
  },
  {
    category: "INNER WORK",
    title: "Learning to Sit With the Parts of Yourself You Don't Like",
    excerpt:
      "Real inner work isn't about becoming someone else. It's about becoming honest.",
    date: "SEP 3, 2026",
    read: "7 MIN READ",

      image: "/images/self-acceptance.jpg",
  },
];

const topics = [
  {
    name: "Shadow Work",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Inner Child",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Self-Sabotage",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Emotional Patterns",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Triggers",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Self-Awareness",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">

      {/* NAVIGATION */}
      <header className="absolute left-0 right-0 top-0 z-50 bg-[#f7f5ef]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <Link href="/" className="shrink-0">
            <div className="font-serif text-xl tracking-[0.08em]">
              FACING MY SHADOW
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#72766f]">
              A JOURNAL FOR A MORE AUTHENTIC YOU
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link
              href="/"
              className="border-b border-[#202622] pb-1"
            >
              Home
            </Link>

            <Link href="/journal" className="hover:text-[#697269]">
              Journal
            </Link>

            <Link href="/topics" className="hover:text-[#697269]">
              Topics
            </Link>

            <Link href="/about" className="hover:text-[#697269]">
              About
            </Link>

            <Link href="/contact" className="hover:text-[#697269]">
              Contact
            </Link>

            <span className="text-xl">⌕</span>
          </nav>


        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden pt-24">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5ef] via-[#f7f5ef]/90 to-[#f7f5ef]/15" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >

            <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              A Kinder,
              <br />
              Braver You.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#555d57] sm:text-lg">
              Honest conversations, practical tools, and thoughtful insights
              to help you understand yourself, heal old patterns, and create
              a more meaningful life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/journal"
                className="rounded-md bg-[#344137] px-7 py-4 text-sm text-white transition hover:bg-[#253027]"
              >
                Explore the Journal →
              </Link>

              <Link
                href="/about"
                className="rounded-md border border-[#9da19a] bg-white/30 px-7 py-4 text-sm transition hover:bg-white/60"
              >
                Learn More
              </Link>

            </div>

            <div className="mt-9 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[#72766f]">
              <span className="h-px w-10 bg-[#72766f]" />
              Deeper awareness. A brighter tomorrow.
            </div>

          </motion.div>
        </div>

        <div className="absolute right-10 top-36 hidden max-w-[130px] font-serif text-xl italic leading-tight text-[#55534d] lg:block">
          Same
          <br />
          Questions.
          <br />
          Brighter
          <br />
          Tomorrow.
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="border-b border-[#ddd9d0] bg-[#fbfaf7]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-4">

          {[
            ["◒", "Understand", "Explore your inner world"],
            ["☼", "Reflect", "Question patterns"],
            ["♡", "Heal", "Be kinder to yourself"],
            ["△", "Grow", "Live more authentically"],
          ].map(([icon, title, subtitle]) => (

            <div
              key={title}
              className="border-b border-[#ddd9d0] px-6 py-9 text-center md:border-b-0 md:border-r last:border-r-0"
            >

              <div className="mb-4 text-3xl text-[#59665c]">
                {icon}
              </div>

              <h2 className="font-serif text-xl">
                {title}
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777c76]">
                {subtitle}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-end justify-between">

            <h2 className="font-serif text-4xl sm:text-5xl">
              Featured Articles
            </h2>

            <Link
              href="/journal"
              className="text-sm hover:text-[#68736b]"
            >
              View All Articles →
            </Link>

          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {articles.map((article, index) => (

              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >

                <Link href="/journal">

                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">

                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#70776f]">
                    {article.category}
                  </div>

                  <h3 className="mt-3 font-serif text-2xl leading-tight group-hover:text-[#68736b]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6d736e]">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#888b85]">
                    {article.date} &nbsp; • &nbsp; {article.read}
                  </div>

                </Link>

              </motion.article>

            ))}

          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-[#fbfaf7] px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-9 flex items-end justify-between">

            <h2 className="font-serif text-4xl">
              Explore by Topic
            </h2>

            <Link
              href="/topics"
              className="text-sm hover:text-[#68736b]"
            >
              View All Topics →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

            {topics.map((topic) => (

              <Link
                key={topic.name}
                href="/topics"
                className="group relative aspect-[0.82] overflow-hidden rounded-sm"
              >

                <img
                  src={topic.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 font-serif text-lg text-white">
                  {topic.name}
                </div>

              </Link>

            ))}

          </div>
        </div>
      </section>

      {/* QUOTE + NEWSLETTER */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-10">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#e8e3d8]/80" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div className="flex flex-col justify-center">

            <div className="font-serif text-5xl">“</div>

            <blockquote className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              The more honestly we look within, the more freely we can live.
            </blockquote>

            <div className="mt-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-[#697269]">
              <span className="h-px w-10 bg-[#697269]" />
              A KINDER, MORE AWARE WORLD
            </div>

          </div>

          <div className="flex flex-col justify-center border-l border-[#bdb9b0] pl-8 lg:pl-14">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#697269]">
              Stay Connected
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Thoughtful insights, straight to your inbox.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#656b65]">
              New articles, reflections, and resources — without the noise.
            </p>

   <iframe width="540" height="500" src="https://ed380c3a.sibforms.com/v2/serve/MUIFAF7jjYXFU82S2nCOHNBNl2z-HITYxebtl_iws6O4c72gnl02XWxFH28R8wH5opj7lo7A9Sn-aqIP4Si9X0-_DDnq9SPaM_-P4JxeaOCbWqwaXxr8hyk2yR7Obb7VoSKNf7fgxtxp-Ms76rHV0kLMYtjWVTag0o9tip0i0xPQP1mlooMHE9Xu9Zl75P5NImTYeoRDzNV1CpX8Wg==" frameBorder="0" scrolling="auto" allowFullScreen style={{
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100%",
}}></iframe>
            <p className="mt-3 text-[10px] text-[#858780]">
              No spam. Just meaningful content.
            </p>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#faf9f5] px-6 py-12 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <div className="font-serif text-xl">
                FACING MY SHADOW
              </div>

              <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#777b75]">
                A JOURNAL FOR A MORE AUTHENTIC YOU
              </p>
            </div>

            <nav className="flex flex-wrap items-start gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/topics">Topics</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <div className="flex gap-5 text-lg md:justify-end">
              <span>◎</span>
              <span>◉</span>
              <span>▶</span>
              <span>✉</span>
            </div>

          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#ddd9d0] pt-6 text-[10px] text-[#858880] sm:flex-row">
            <span>
              © 2026 Facing My Shadow. All rights reserved.
            </span>

            <span>
              A MORE AWARE WORLD STARTS WITH YOU.
            </span>
          </div>

        </div>
      </footer>

    </main>
  );
}