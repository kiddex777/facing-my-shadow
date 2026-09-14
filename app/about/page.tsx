export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      <section className="border-b border-[#202622]/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#687268]">
            About Facing My Shadow
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-6xl">
            A place to look within.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#5f665f]">
            Facing My Shadow is a journal about becoming more aware of the
            patterns, emotions, and parts of ourselves that shape the way we
            experience life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-8 text-[17px] leading-8 text-[#4f5750]">
          <p>
            We all have parts of ourselves we understand easily — and parts
            we'd rather avoid. The reactions that surprise us. The habits we
            keep repeating. The emotions we don't quite know what to do with.
          </p>

          <p>
            Facing My Shadow explores those quieter parts of being human. The
            goal isn't to judge ourselves or become someone we're not. It's to
            understand ourselves with a little more honesty and a little more
            compassion.
          </p>

          <p>
            Here you'll find thoughtful articles about shadow work, inner
            patterns, self-sabotage, emotional triggers, self-awareness, and
            personal growth.
          </p>

          <div className="border-l border-[#344137] pl-6 py-2">
            <p className="font-serif text-2xl leading-9 text-[#344137]">
              "The more honestly we look within, the more freely we can live."
            </p>
          </div>

          <p>
            This isn't about having all the answers. It's about becoming
            willing to ask better questions.
          </p>
        </div>
      </section>

      <section className="border-t border-[#202622]/10 bg-[#ece9df]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-serif text-3xl text-[#344137]">
            Understand. Reflect. Heal. Grow.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#687268]">
            Start wherever you are. There is no perfect place to begin.
          </p>
        </div>
      </section>
    </main>
  );
}