import Link from "next/link";

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#687068]">
            Stay connected
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            A little more awareness,
            <br />
            delivered occasionally.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#59615a] md:text-xl">
            Join the Facing My Shadow journal for new reflections,
            practical exercises, and thoughtful conversations about
            understanding yourself and creating a more meaningful life.
          </p>
        </div>
      </section>

      <section className="border-y border-[#202622]/10 bg-[#ece9df] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-xl">
          <div className="bg-[#f7f5ef] p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl">
              Join the journal
            </h2>

            <p className="mt-4 leading-7 text-[#59615a]">
              Enter your email below to receive occasional updates from
              Facing My Shadow.
            </p>

            <form className="mt-8">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#202622]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#202622]/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-[#8a908a] focus:border-[#344137]"
              />

              <button
                type="submit"
                className="mt-4 w-full border border-[#344137] bg-[#344137] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#202622]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-5 text-xs leading-5 text-[#687068]">
              No spam. Just occasional reflections and new journal entries.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="font-serif text-2xl italic leading-8 text-[#59615a] md:text-3xl">
            “The more honestly we look within, the more freely we can live.”
          </p>

          <Link
            href="/journal"
            className="mt-8 inline-block border border-[#344137] px-6 py-3 text-sm font-medium text-[#344137] transition hover:bg-[#344137] hover:text-white"
          >
            Explore the Journal
          </Link>
        </div>
      </section>
    </main>
  );
}