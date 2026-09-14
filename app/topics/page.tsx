import Link from "next/link";

const topics = [
  {
    title: "Shadow Work",
    description:
      "Explore the parts of yourself you may have learned to hide, reject, or ignore.",
    image: "/images/shadow-work.jpg",
  },
  {
    title: "Inner Child",
    description:
      "Understand how earlier experiences can shape the person you are today.",
    image: "/images/inner-child.jpg",
  },
  {
    title: "Self-Sabotage",
    description:
      "Look beneath the habits and patterns that keep getting in your way.",
    image: "/images/self-sabotage.jpg",
  },
  {
    title: "Emotional Patterns",
    description:
      "Become more aware of the reactions, habits, and emotional patterns that repeat.",
    image: "/images/triggers.jpg",
  },
  {
    title: "Triggers",
    description:
      "Use strong emotional reactions as opportunities for curiosity and reflection.",
    image: "/images/triggers.jpg",
  },
  {
    title: "Self-Awareness",
    description:
      "Build a more honest and compassionate relationship with yourself.",
    image: "/images/self-awareness.jpg",
  },
];

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      {/* Header */}
      <section className="border-b border-[#202622]/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#687268]">
            Explore the journal
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Explore by topic.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#5f665f] md:text-base">
            Start wherever you are. Explore the ideas, patterns, and questions
            that feel most relevant to your life right now.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={`/journal?topic=${encodeURIComponent(topic.title)}`}
              className="group overflow-hidden rounded-2xl border border-[#202622]/10 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#687268]">
                  Topic
                </p>

                <h2 className="font-serif text-3xl">{topic.title}</h2>

                <p className="mt-4 text-sm leading-6 text-[#687268]">
                  {topic.description}
                </p>

                <div className="mt-6 text-xs uppercase tracking-[0.15em]">
                  Explore topic →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#202622]/10 bg-[#eeece4]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#687268]">
            Not sure where to start?
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Start with the journal.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#687268]">
            Browse all of the articles and follow whatever catches your
            attention. Sometimes the right place to begin is simply the thing
            you can't stop thinking about.
          </p>

          <Link
            href="/journal"
            className="mt-8 inline-block rounded-md bg-[#344137] px-7 py-4 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-[#202622]"
          >
            Explore the Journal →
          </Link>
        </div>
      </section>
    </main>
  );
}