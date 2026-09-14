import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const prompts = [
  {
    number: 1,
    title: "What parts of myself do I try hardest to hide from other people?",
    text: "Think about the qualities, emotions, fears, or behaviors you don't want others to see. Why do you feel the need to hide them?",
  },
  {
    number: 2,
    title: "What is something about myself that I have difficulty accepting?",
    text: "It could be a personality trait, an emotion, a mistake from your past, or something else entirely. What makes accepting it difficult?",
  },
  {
    number: 3,
    title: "What emotions make me uncomfortable?",
    text: "Anger? Sadness? Jealousy? Fear? Neediness? Vulnerability? Think about which emotions you tend to suppress, ignore, or distract yourself from.",
  },
  {
    number: 4,
    title: "What do I judge other people for?",
   text: `Think about the behaviors that irritate you most in other people. Then ask yourself: "Why does this bother me so much?" And, perhaps more importantly: "Is there any part of this quality that exists in me?" You don't have to conclude that you are exactly like the person you're judging. The point is simply to become curious about your reaction.`,
  },
  {
    number: 5,
    title: "What do I want other people to believe about me?",
    text: "Maybe you want people to see you as confident, independent, kind, successful, strong, intelligent, or easygoing. What happens when you feel like you're failing to live up to that image?",
  },
  {
    number: 6,
    title: "What situations make me react more strongly than I think I should?",
    text: "Think of a recent situation where your emotional response surprised you. What happened? How did you react? What were you feeling underneath the initial reaction?",
  },
  {
    number: 7,
    title: "What kind of criticism is hardest for me to hear?",
    text: 'Do you become defensive? Embarrassed? Angry? Withdrawn? Do you immediately try to prove the other person wrong? Ask yourself what that criticism might represent to you.',
  },
  {
    number: 8,
    title: "What kinds of people irritate me the most?",
    text: "Be honest. Maybe it's arrogant people, people who talk too much, people who need constant attention, people who seem overly confident, people who complain, or people who never ask for help. What exactly about them bothers you? And why?",
  },
  {
    number: 9,
    title: "When I feel rejected, what story do I tell myself?",
    text: 'For example: "I\'m not good enough." "Nobody actually wants me around." "People always leave." "I knew I shouldn\'t have trusted them." Try to identify the story underneath the emotion.',
  },
  {
    number: 10,
    title: "What causes me to shut down emotionally?",
    text: "When something becomes uncomfortable, do you withdraw? Change the subject? Become quiet? Leave? Pretend you don't care? Think about what you're protecting yourself from when you shut down.",
  },
  {
    number: 11,
    title: "What patterns keep repeating in my relationships?",
    text: "Do you repeatedly choose similar people? Do relationships tend to end in similar ways? Do you become distant when someone gets close? Do you become anxious when someone pulls away? Look for patterns rather than blaming yourself or someone else.",
  },
  {
    number: 12,
    title: "What do I need from other people but have difficulty asking for?",
    text: "Maybe reassurance, affection, attention, space, support, or understanding. Why is it difficult for you to ask for it?",
  },
  {
    number: 13,
    title: "What am I afraid people will discover about me if they get too close?",
    text: "What would someone have to know about you before you felt truly vulnerable?",
  },
  {
    number: 14,
    title: "Do I behave differently when I feel insecure?",
    text: "What changes? Your personality? Your communication? Your confidence? Your boundaries? Your need for reassurance? Try to notice what you do when you don't feel emotionally safe.",
  },
  {
    number: 15,
    title: "What boundaries do I struggle to maintain?",
    text: "Maybe you say yes when you want to say no. Maybe you tolerate behavior that bothers you. Maybe you avoid telling people when they've hurt you. Why? What are you afraid might happen if you set the boundary?",
  },
  {
    number: 16,
    title: "What did I learn about emotions growing up?",
    text: "Were emotions encouraged? Ignored? Mocked? Punished? Were you allowed to be angry? Were you allowed to cry? Were you encouraged to talk about difficult things?",
  },
  {
    number: 17,
    title: "What did I have to become in order to feel accepted?",
    text: 'Maybe you became the responsible one, the quiet one, the funny one, the successful one, the caretaker, the peacemaker, the tough one, or the invisible one. Ask yourself: "What did that version of me need to do to belong?"',
  },
  {
    number: 18,
    title: "What emotions were considered unacceptable when I was growing up?",
    text: 'Think about the messages you received. "Don\'t cry." "Stop being so sensitive." "Don\'t be angry." "Be grateful." "Don\'t talk back." How might those messages still influence you today?',
  },
  {
    number: 19,
    title: "What did I need as a child that I didn't know how to ask for?",
    text: "This isn't about blaming your past. It's about understanding yourself. Maybe you needed reassurance, attention, protection, encouragement, understanding, or someone to listen. Write about what you wish you could have expressed at the time.",
  },
  {
    number: 20,
    title: "What did I believe I had to do to be worthy of love?",
    text: "This can reveal some powerful beliefs. Did you feel you had to be useful? Successful? Easy to deal with? Perfect? Independent? Quiet? What happens when you don't meet that standard?",
  },
  {
    number: 21,
    title: "What do I keep doing even though I know it isn't helping me?",
    text: "Think about recurring behaviors. Avoidance. Procrastination. Isolation. Overthinking. People-pleasing. Giving up too early. Whatever comes to mind. Don't immediately judge the behavior. Ask what purpose it might be serving.",
  },
  {
    number: 22,
    title: "What am I afraid might happen if I actually succeed?",
    text: "This may sound strange, but success can create its own fears. More responsibility. More attention. Higher expectations. Fear of losing what you've built. Fear that you won't be able to repeat the success. What does success represent to you?",
  },
  {
    number: 23,
    title: "What do I avoid because I'm afraid I won't be good at it?",
    text: "What would happen if you allowed yourself to be a beginner?",
  },
  {
    number: 24,
    title: "Where in my life am I settling for something I don't actually want?",
    text: "Be honest. Where are you choosing familiarity over change? What makes the familiar feel safer?",
  },
  {
    number: 25,
    title: "What excuse do I keep telling myself?",
    text: 'Everyone has them. "I\'ll start tomorrow." "It\'s not the right time." "I need to figure everything out first." "I\'m just not that kind of person." What excuse might actually be protecting you from something you\'re afraid to face?',
  },
  {
    number: 26,
    title: "What part of myself am I constantly trying to fix?",
    text: "What if that part doesn't need to be hated before it can change? What would happen if you approached it with curiosity instead?",
  },
  {
    number: 27,
    title: "What would I say to myself if I treated myself like someone I cared about?",
    text: "Write the answer as though you're speaking to a close friend. Would you use the same words you normally use with yourself?",
  },
  {
    number: 28,
    title: "What am I ashamed of that I have never fully forgiven myself for?",
    text: "You don't need to excuse something simply because you want to forgive yourself. Instead, explore what happened. What did you learn? What would you do differently now? Who are you today compared with the person who made that decision?",
  },
  {
    number: 29,
    title: "What part of myself deserves more compassion?",
    text: "Maybe it's the part that gets scared. The part that becomes angry. The part that needs reassurance. The part that makes mistakes. The part that doesn't have everything figured out. What would compassion look like here?",
  },
  {
    number: 30,
    title: "What would change if I stopped trying to hide from myself?",
    text: "Imagine that you no longer had to maintain a perfect image. You could acknowledge your fears, your weaknesses, your mistakes, your desires, your contradictions, and your strengths. What might become possible?",
  },
];

const sections = [
  {
    title: "1. Understanding Yourself",
    start: 1,
    end: 5,
  },
  {
    title: "2. Exploring Your Triggers",
    start: 6,
    end: 10,
  },
  {
    title: "3. Looking at Your Relationships",
    start: 11,
    end: 15,
  },
  {
    title: "4. Exploring Your Past",
    start: 16,
    end: 20,
  },
  {
    title: "5. Exploring Self-Sabotage",
    start: 21,
    end: 25,
  },
  {
    title: "6. Accepting the Parts of Yourself You Don't Like",
    start: 26,
    end: 30,
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shadow Work Prompts for Beginners: 30 Questions to Start With",
    description:
      "New to shadow work? Explore 30 thoughtful shadow work prompts for beginners to help you understand your emotions, triggers, relationships, self-sabotage, and hidden patterns.",
  };
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202622]">
      {/* ARTICLE HEADER */}
      <section className="border-b border-[#202622]/10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/journal"
            className="text-xs uppercase tracking-[0.2em] text-[#687068] transition hover:text-[#202622]"
          >
            ← Back to the Journal
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[#687068]">
            Shadow Work · Self-Awareness · Personal Growth
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Shadow Work Prompts for Beginners: 30 Questions to Start With
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#59615a]">
            A thoughtful starting point for understanding your emotions,
            triggers, relationships, self-sabotage, and hidden patterns.
          </p>

          <p className="mt-6 text-sm text-[#7a817a]">
            September 2026 · 12 min read
          </p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/shadow-work.jpg"
            alt="Shadow work and self-reflection"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ARTICLE */}
      <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-[#4f5750] text-[17px] leading-8 [&_p]:mb-7 [&_p]:leading-8 [&_strong]:font-semibold [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#344137] [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:leading-8">
          <p className="text-xl leading-9">
            There are parts of ourselves we understand easily.
          </p>

          <p className="leading-8">
            The parts we're proud of.
            <br />
            <br />
            The parts we show other people.
            <br />
            <br />
            The parts that fit comfortably into the story we tell ourselves
            about who we are.
          </p>

          <p className="leading-8">
            Then there are the other parts.
          </p>

          <p className="leading-8">
            The jealousy we don't want to admit to. The anger that seems to
            come out of nowhere. The need for approval. The fear of being
            rejected. The habit of pushing people away when we actually want
            them closer.
          </p>

          <p className="leading-8">
            Sometimes, we know these parts are there.
            <br />
            <br />
            Sometimes, we don't.
          </p>

          <p className="border-l-2 border-[#344137] pl-6 text-xl font-medium leading-9 text-[#344137]">
            Shadow work is about becoming curious about those hidden or
            uncomfortable parts of ourselves rather than automatically
            judging them.
          </p>

          <p className="leading-8">
            And you don't need to have everything figured out before you begin.
          </p>

          <p className="leading-8">
            In fact, you don't need much at all.
          </p>

          <p className="leading-8">
            A quiet place, a journal, some honesty, and the willingness to ask
            yourself questions you might normally avoid can be enough.
          </p>

          <p className="leading-8">
            If you're new to shadow work, these{" "}
            <strong>30 shadow work prompts for beginners</strong> can give you
            somewhere to start.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <p className="mb-10 text-lg leading-8 text-[#59615a]">
            Shadow work isn't about judging yourself or digging endlessly into the past.
            It's about becoming curious about the parts of yourself you may have learned
            to hide, avoid, or push away. These prompts are designed to help you slow down,
            notice your patterns, and understand yourself with a little more honesty and
            compassion.
          </p>

          <div className="mb-12 h-px w-16 bg-[#344137]/30" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            What Is Shadow Work?
          </h2>

          <p className="leading-8">
            The idea of the psychological "shadow" is most closely associated
            with Swiss psychiatrist <strong>Carl Jung</strong>.
          </p>

          <p className="leading-8">
            Jung used the term to describe aspects of ourselves that we don't
            fully acknowledge or accept. These can include traits, emotions,
            desires, fears, memories, and impulses that don't fit with the
            image we have of ourselves.
          </p>

          <p className="leading-8">
            For example, someone might think:
          </p>

          <blockquote>
            "I'm a very calm person."
          </blockquote>

          <p className="leading-8">
            But perhaps they have a lot of anger that they rarely acknowledge.
          </p>

          <p className="leading-8">
            Someone else might think:
          </p>

          <blockquote>
            "I don't care what people think of me."
          </blockquote>

          <p className="leading-8">
            Yet they constantly change their behavior depending on whether
            they're being accepted or rejected.
          </p>

          <p className="leading-8">
            Another person might pride themselves on being independent while
            secretly feeling terrified of needing anyone.
          </p>

          <p className="leading-8">
            The shadow isn't necessarily made up of "bad" parts of ourselves.
          </p>

          <p className="leading-8">
            It can also contain qualities we've learned to suppress because we
            were taught they weren't acceptable.
          </p>

          <p className="leading-8">
            Maybe you learned that being angry was wrong.
            <br />
            <br />
            Maybe you were discouraged from speaking up.
            <br />
            <br />
            Maybe being sensitive was treated as weakness.
            <br />
            <br />
            Maybe you learned that asking for help meant you weren't strong
            enough.
          </p>

          <p className="leading-8">
            Over time, those experiences can influence which parts of ourselves
            we allow into our conscious identity and which parts we push away.
          </p>

          <p className="leading-8">
            <strong>Shadow work is an attempt to bring greater awareness to
            those hidden patterns.</strong>
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            Why Does Shadow Work Feel Uncomfortable?
          </h2>

          <p className="leading-8">
            If looking inward were always pleasant, we probably wouldn't need
            the term "shadow" in the first place.
          </p>

          <p className="leading-8">
            Some of the things you discover about yourself may challenge the
            way you see yourself.
          </p>

          <p className="leading-8">
            You might realize that you're more afraid of rejection than you
            thought.
            <br />
            <br />
            You might notice that you become defensive when someone gives you
            criticism.
            <br />
            <br />
            You might discover that some of your strongest reactions aren't
            really about what's happening right now.
            <br />
            <br />
            Or you might recognize a pattern you've repeated for years.
          </p>

          <p className="leading-8">
            That's where shadow work can become valuable.
          </p>

          <p className="leading-8">Instead of saying:</p>

          <p className="text-xl font-medium text-[#202622]">
            "What's wrong with me?"
          </p>

          <p className="leading-8">you can begin asking:</p>

          <p className="text-xl font-medium text-[#344137]">
            "Why do I react this way?"
          </p>

          <p className="leading-8">
            That small change in perspective matters.
          </p>

          <p className="leading-8">
            The goal isn't to shame yourself for having difficult emotions or
            behaviors.
          </p>

          <p className="leading-8">The goal is to understand them.</p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            How to Start Shadow Work as a Beginner
          </h2>

          <p className="leading-8">
            You don't need an elaborate ritual or a perfect journaling routine.
          </p>

          <p className="leading-8">Start simple.</p>

          <p className="leading-8">
            Find somewhere you can write without constantly worrying about what
            someone else might think.
          </p>

          <p className="leading-8">
            Then choose <strong>one prompt</strong>.
          </p>

          <p className="leading-8">
            Don't try to answer all 30 in one sitting.
          </p>

          <p className="leading-8">Write whatever comes to mind.</p>

          <p className="leading-8">
            If your first answer is something like:
          </p>

          <blockquote>"I don't know."</blockquote>

          <p className="leading-8">Keep going.</p>

          <p className="leading-8">Ask yourself:</p>

          <blockquote>"If I did know, what might the answer be?"</blockquote>

          <p className="leading-8">
            Don't worry about making your writing sound intelligent, spiritual,
            or profound.
          </p>

          <p className="leading-8">Your journal isn't an essay.</p>

          <p className="leading-8">
            It's a place where you can be honest.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            30 Shadow Work Prompts for Beginners
          </h2>

          <p className="leading-8">
            I've divided these prompts into different areas so you can choose
            the ones that feel most relevant to you.
          </p>

          <p className="leading-8">
            You don't have to work through them in order.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="mt-24">
              <h3 className="font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
                {section.title}
              </h3>

              <div className="mt-10 space-y-14">
                {prompts
                  .filter(
                    (prompt) =>
                      prompt.number >= section.start &&
                      prompt.number <= section.end
                  )
                  .map((prompt) => (
                    <div
                      key={prompt.number}
                   className="rounded-sm border border-[#202622]/10 bg-white/40 p-8 transition-colors hover:bg-white/70 md:p-10"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687068]">
                        Prompt {String(prompt.number).padStart(2, "0")}
                      </p>

                     <h4 className="mt-3 font-serif text-2xl font-medium leading-tight text-[#202622] md:text-[30px]">
                        {prompt.title}
                      </h4>

                    <p className="mt-4 max-w-2xl leading-8">{prompt.text}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}

          <hr className="my-16 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            What to Do After Answering a Shadow Work Prompt
          </h2>

          <p className="leading-8">
            The most important part isn't necessarily answering the question.
          </p>

          <p className="leading-8">
            It's noticing what happens <strong>after</strong> you answer it.
          </p>

          <p className="leading-8">
            Read what you wrote.
            <br />
            <br />
            Look for recurring themes.
            <br />
            <br />
            Maybe you keep mentioning rejection.
            <br />
            <br />
            Maybe control comes up repeatedly.
            <br />
            <br />
            Maybe you're afraid of disappointing people.
            <br />
            <br />
            Maybe you keep describing yourself as "not good enough."
          </p>

          <p className="leading-8">
            These patterns can be more valuable than any individual answer.
          </p>

          <p className="leading-8">Try asking yourself:</p>

          <blockquote>
            "Where else does this show up in my life?"
          </blockquote>

          <p className="leading-8">
            That's where journaling can move from simply describing your
            feelings to actually understanding your patterns.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            A Simple Shadow Work Exercise for Beginners
          </h2>

          <p className="leading-8">
            If 30 prompts feel overwhelming, try this three-step exercise
            instead.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            Step 1: Identify a reaction
          </h3>

          <p className="leading-8">
            Think about something that recently upset you.
          </p>

          <p className="leading-8">
            Write down exactly what happened.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            Step 2: Go underneath the reaction
          </h3>

          <p className="leading-8">Ask:</p>

          <blockquote>"What was I actually feeling?"</blockquote>

          <p className="leading-8">Then ask:</p>

          <blockquote>
            "What was I afraid this situation meant about me?"
          </blockquote>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            Step 3: Respond with curiosity
          </h3>

          <p className="leading-8">Instead of asking:</p>

          <blockquote>"Why am I like this?"</blockquote>

          <p className="leading-8">ask:</p>

          <blockquote>
            "What might this reaction be trying to protect me from?"
          </blockquote>

          <p className="leading-8">
            You may not get an immediate answer.
          </p>

          <p className="leading-8">That's okay.</p>

          <p className="leading-8">
            Shadow work isn't a test you have to pass.
          </p>

          <p className="leading-8">
            Sometimes simply noticing the question is the beginning.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            What Shadow Work Isn't
          </h2>

          <p className="leading-8">
            It's worth clearing up a few misconceptions.
          </p>

          <p className="leading-8">
            Shadow work isn't about convincing yourself that everything bad
            that happens is your fault.
          </p>

          <p className="leading-8">
            It isn't about blaming yourself for having emotions.
          </p>

          <p className="leading-8">
            It isn't about endlessly analyzing every childhood experience.
          </p>

          <p className="leading-8">
            And it shouldn't become an excuse to ignore genuine problems in
            your current life.
          </p>

          <p className="leading-8">
            If someone treats you badly, recognizing your own emotional
            patterns doesn't mean you have to tolerate their behavior.
          </p>

          <p className="leading-8">
            <strong>Self-awareness and boundaries can exist together.</strong>
          </p>

          <p className="leading-8">
            Shadow work also isn't about becoming perfectly healed.
          </p>

          <p className="leading-8">
            You're still going to get angry.
            <br />
            <br />
            You'll still become insecure.
            <br />
            <br />
            You'll still make mistakes.
            <br />
            <br />
            You'll still have reactions you don't understand sometimes.
          </p>

          <p className="leading-8">
            The difference is that you may begin noticing them sooner.
          </p>

          <p className="leading-8">
            And instead of automatically reacting, you have a chance to choose
            what happens next.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            When Shadow Work Feels Like Too Much
          </h2>

          <p className="leading-8">
            Looking inward can sometimes bring up difficult emotions or
            memories.
          </p>

          <p className="leading-8">
            If a journaling exercise leaves you feeling overwhelmed, you don't
            have to force yourself to continue.
          </p>

          <p className="leading-8">
            Take a break.
            <br />
            <br />
            Ground yourself.
            <br />
            <br />
            Go for a walk.
            <br />
            <br />
            Talk to someone you trust.
          </p>

          <p className="leading-8">
            And if you're dealing with significant distress or traumatic
            experiences, consider working with a qualified mental-health
            professional who can provide appropriate support.
          </p>

          <p className="leading-8">
            <strong>You don't have to explore everything at once.</strong>
          </p>

          <p className="leading-8">
            There is no prize for digging the deepest.
          </p>

          <p className="leading-8">
            Sometimes the healthiest thing you can do is stop, take a breath,
            and come back another day.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            A 7-Day Shadow Work Practice
          </h2>

          <p className="leading-8">
            If you want something more structured, try spending just{" "}
            <strong>10–15 minutes a day</strong> with one prompt.
          </p>

          {[
            ["Day 1", "What parts of myself do I try to hide?"],
            ["Day 2", "What triggers me most strongly?"],
            [
              "Day 3",
              "What do I fear other people will discover about me?",
            ],
            ["Day 4", "What did I learn about emotions growing up?"],
            ["Day 5", "What pattern keeps repeating in my life?"],
            ["Day 6", "What part of myself needs more compassion?"],
            ["Day 7", "What have I learned about myself this week?"],
          ].map(([day, question]) => (
            <div
              key={day}
              className="mt-8 border-l-2 border-[#344137] pl-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a817a]">
                {day}
              </p>
              <p className="mt-2 font-serif text-xl text-[#202622]">
                {question}
              </p>
            </div>
          ))}

          <p className="mt-10 leading-8">
            Don't worry about producing profound answers.
          </p>

          <p className="leading-8">Just be honest.</p>

          <p className="leading-8">
            Sometimes the most important realization is surprisingly simple.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            You Don't Have to Become Someone Else
          </h2>

          <p className="leading-8">
            It's easy to approach personal growth as another project to
            complete.
          </p>

          <p className="leading-8">
            Find your flaws.
            <br />
            <br />
            Fix your flaws.
            <br />
            <br />
            Become better.
            <br />
            <br />
            Become happier.
            <br />
            <br />
            Become more productive.
            <br />
            <br />
            Become someone you're finally proud of.
          </p>

          <p className="leading-8">
            But perhaps self-awareness isn't really about becoming a completely
            different person.
          </p>

          <p className="leading-8">
            Maybe it's about becoming more comfortable being{" "}
            <strong>the whole person you already are</strong>.
          </p>

          <p className="leading-8">
            The confident parts.
            <br />
            <br />
            The insecure parts.
            <br />
            <br />
            The generous parts.
            <br />
            <br />
            The selfish parts.
            <br />
            <br />
            The brave parts.
            <br />
            <br />
            The frightened parts.
            <br />
            <br />
            The parts you're proud of.
            <br />
            <br />
            And the parts you're still learning to understand.
          </p>

          <p className="leading-8">
            You don't have to love every part of yourself immediately.
          </p>

          <p className="leading-8">
            Sometimes acceptance begins with something much smaller:
          </p>

          <p className="font-serif text-2xl text-[#344137]">
            being willing to look.
          </p>

          <p className="leading-8">
            That's what shadow work can offer.
          </p>

          <p className="leading-8">
            Not perfection.
            <br />
            <br />
            Not a completely transformed life overnight.
            <br />
            <br />
            Just a little more honesty about who you are—and a little more
            compassion for the person you're becoming.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mt-2 mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            Start With One Question
          </h2>

          <p className="leading-8">
            You don't need to answer all 30 prompts today.
          </p>

          <p className="leading-8">
            Pick the one that makes you pause.
          </p>

          <p className="leading-8">
            The one you want to skip.
          </p>

          <p className="leading-8">
            The one that makes you slightly uncomfortable.
          </p>

          <p className="leading-8">Then sit with it.</p>

          <p className="leading-8">
            Write without trying to impress anyone.
          </p>

          <p className="leading-8">And see what you discover.</p>

          <div className="my-16 border-y border-[#344137]/20 py-14 text-center">
            <p className="font-serif text-2xl leading-9 text-[#344137] md:text-3xl">
              The more honestly we look within, the more freely we can live.
            </p>
          </div>

          {/* ARTICLE FOOTER */}
          <div className="mt-20 border-t border-[#202622]/10 pt-12">
            <Link
              href="/journal"
             className="inline-block border border-[#344137] bg-[#344137] px-7 py-3.5 text-sm text-white transition hover:bg-[#202622]"
            >
              ← Back to the Journal
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}