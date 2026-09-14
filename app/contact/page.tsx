export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      <section className="border-b border-[#202622]/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#687268]">
            Get in touch
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-6xl">
            Let's start a conversation.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#5f665f]">
            Have a question, a thought, or something you'd like to share?
            I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-sm border border-[#202622]/10 bg-white/40 p-8 md:p-12">
          <h2 className="font-serif text-3xl text-[#344137]">
            Send a message
          </h2>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-[#4f5750]"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-[#202622]/15 bg-[#f7f5ef] px-4 py-3 outline-none transition focus:border-[#344137]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-[#4f5750]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#202622]/15 bg-[#f7f5ef] px-4 py-3 outline-none transition focus:border-[#344137]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-[#4f5750]"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none border border-[#202622]/15 bg-[#f7f5ef] px-4 py-3 outline-none transition focus:border-[#344137]"
              />
            </div>

            <button
              type="button"
              className="bg-[#344137] px-7 py-3 text-sm text-white transition hover:bg-[#202622]"
            >
              Send Message
            </button>
          </form>

          <p className="mt-6 text-xs leading-5 text-[#687268]">
            This form is currently a design placeholder. We'll connect it to
            an email service later.
          </p>
        </div>
      </section>

      <section className="border-t border-[#202622]/10 bg-[#ece9df]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="font-serif text-2xl text-[#344137]">
            Every meaningful conversation starts somewhere.
          </p>
        </div>
      </section>
    </main>
  );
}