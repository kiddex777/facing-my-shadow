import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shadow Work Exercises: 10 Practices to Understand Yourself Better",
  description:
    "Explore 10 simple shadow work exercises to understand your emotions, triggers, relationships, self-sabotage, and hidden patterns with greater honesty and compassion.",
};

export default function ShadowWorkExercisesPage() {
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
            Shadow Work Exercises: 10 Practices to Understand Yourself Better
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#59615a]">
            Simple exercises to help you explore your emotions, triggers,
            relationships, self-sabotage, and the hidden patterns shaping your
            life.
          </p>

          <p className="mt-6 text-sm text-[#7a817a]">
            September 2026 · 10 min read
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
        <div className="mx-auto max-w-3xl text-[17px] leading-8 text-[#4f5750] [&_p]:mb-7 [&_p]:leading-8 [&_strong]:font-semibold [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#344137] [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:leading-8">
          <p className="text-xl leading-9">
            Shadow work can sound complicated, but at its heart, it&apos;s
            about becoming more curious about the parts of yourself you
            usually avoid.
          </p>

          <p>
            Maybe certain people seem to get under your skin almost instantly.
            Maybe you keep repeating a relationship pattern you promised
            yourself you&apos;d leave behind. Or perhaps you find yourself
            reacting much more strongly to certain situations than you think
            you should.
          </p>

          <p>
            These moments can be uncomfortable, but they can also be revealing.
          </p>

          <p>
            Shadow work is the practice of slowing down and asking what might
            be underneath those reactions, patterns, fears, and behaviors. It
            isn&apos;t about judging yourself or digging endlessly into the
            past. It&apos;s about understanding yourself with enough honesty
            and compassion that you can begin responding differently.
          </p>

          <p>
            The exercises below are designed to help you do exactly that.
          </p>

          <p>
            You don&apos;t need to complete all ten at once. Choose one that
            speaks to you, give yourself some quiet time, and see what you
            discover.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            What Is Shadow Work?
          </h2>

          <p>
            The idea of the &quot;shadow&quot; comes primarily from the work of
            Swiss psychiatrist <strong>Carl Jung</strong>.
          </p>

          <p>
            In simple terms, the shadow can be thought of as the parts of
            ourselves that we have pushed out of our conscious awareness.
            These might include emotions, desires, fears, insecurities,
            personality traits, or memories that we&apos;ve learned to hide,
            suppress, or reject.
          </p>

          <p>
            Not everything in your shadow is necessarily negative.
          </p>

          <p>
            Sometimes we hide anger because we were taught that anger was
            unacceptable. Sometimes we suppress our needs because we learned
            that asking for things made us feel selfish. We might even hide
            confidence, creativity, or ambition because we were afraid of
            standing out.
          </p>

          <p>
            Shadow work gives us an opportunity to look at these hidden parts
            rather than automatically reacting to them.
          </p>

          <blockquote>
            The goal isn&apos;t to become a completely different person.
            <br />
            <br />
            It&apos;s to become more aware of the person you already are.
          </blockquote>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            1. The Trigger Journal
          </h2>

          <p>
            One of the easiest ways to begin shadow work is by paying
            attention to what triggers you.
          </p>

          <p>
            A trigger is an experience that creates a strong emotional
            reaction. It might be anger, embarrassment, jealousy, anxiety,
            resentment, sadness, or defensiveness.
          </p>

          <p>
            When something triggers you, instead of immediately asking:
          </p>

          <blockquote>&quot;Why are they doing this to me?&quot;</blockquote>

          <p>try asking:</p>

          <blockquote>&quot;Why does this affect me so strongly?&quot;</blockquote>

          <h3 className="mt-10 mb-4 font-serif text-2xl text-[#202622]">
            Try this exercise
          </h3>

          <p>After a strong emotional reaction, write down:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>What happened?</li>
            <li>What did the other person say or do?</li>
            <li>What emotion did I feel?</li>
            <li>What did I immediately think?</li>
            <li>What did I want to do?</li>
            <li>Have I felt this way before?</li>
            <li>What did this situation seem to mean about me?</li>
          </ul>

          <p>Don&apos;t try to make yourself feel differently.</p>

          <p>Just observe.</p>

          <p>
            Over time, you may notice that certain situations repeatedly
            activate the same emotional wounds or beliefs.
          </p>

          <p>
            That awareness is where the work begins.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            2. Explore the Parts of Yourself You Hide
          </h2>

          <p>
            Most of us have qualities we don&apos;t like showing other people.
          </p>

          <p>
            Maybe you&apos;re afraid of appearing needy.
            <br />
            Maybe you don&apos;t like people seeing you angry.
            <br />
            Maybe you hide how ambitious you are.
            <br />
            Maybe you pretend you don&apos;t care when you actually care
            deeply.
          </p>

          <p>
            Ask yourself:
          </p>

          <blockquote>
            &quot;What parts of myself do I work hardest to keep other people
            from seeing?&quot;
          </blockquote>

          <p>
            Make a list without judging your answers.
          </p>

          <p>You might write:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>I don&apos;t want people to see that I get jealous.</li>
            <li>I don&apos;t want people to know how badly I want approval.</li>
            <li>I don&apos;t like admitting when I&apos;m hurt.</li>
            <li>I don&apos;t want anyone to think I&apos;m weak.</li>
          </ul>

          <p>
            Then ask:
          </p>

          <blockquote>
            &quot;What am I afraid would happen if people saw this part of
            me?&quot;
          </blockquote>

          <p>
            There is often a belief underneath the behavior.
          </p>

          <p>
            Perhaps:
            <br />
            &quot;They&apos;ll reject me.&quot;
            <br />
            &quot;They&apos;ll think I&apos;m weak.&quot;
            <br />
            &quot;They&apos;ll take advantage of me.&quot;
            <br />
            &quot;I&apos;ll lose control.&quot;
          </p>

          <p>
            Those beliefs can be far more revealing than the behavior itself.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            3. The Projection Exercise
          </h2>

          <p>
            Sometimes the qualities that irritate us most in other people can
            teach us something about ourselves.
          </p>

          <p>
            This is sometimes referred to as projection.
          </p>

          <p>
            For example, you might become extremely irritated by someone who
            constantly seeks attention.
          </p>

          <p>
            That doesn&apos;t necessarily mean you&apos;re secretly an
            attention seeker.
          </p>

          <p>
            But it might be worth asking:
          </p>

          <blockquote>
            &quot;Why does their need for attention bother me so
            much?&quot;
          </blockquote>

          <p>
            Perhaps you were taught that wanting attention was selfish.
            Perhaps you learned to suppress your own desire to be noticed.
            Perhaps you&apos;re uncomfortable with your own need for
            recognition.
          </p>

          <h3 className="mt-10 mb-4 font-serif text-2xl text-[#202622]">
            Try this
          </h3>

          <p>
            Think of someone who consistently irritates you.
          </p>

          <p>
            Write down three qualities about them that bother you.
          </p>

          <p>Then ask:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>Do I recognize any of these qualities in myself?</li>
            <li>
              Do I secretly wish I could express any of these qualities?
            </li>
            <li>Was I taught that this behavior was unacceptable?</li>
            <li>
              What does this person allow themselves to do that I don&apos;t
              allow myself to do?
            </li>
          </ul>

          <p>
            This isn&apos;t about blaming yourself for someone else&apos;s
            behavior.
          </p>

          <p>
            It&apos;s about using your emotional reaction as information.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            4. Meet Your Inner Critic
          </h2>

          <p>
            For many people, the harshest voice they hear isn&apos;t coming
            from someone else.
          </p>

          <p>It&apos;s their own.</p>

          <p>Your inner critic might sound like:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>&quot;You&apos;re not good enough.&quot;</li>
            <li>&quot;You always mess things up.&quot;</li>
            <li>&quot;Nobody really likes you.&quot;</li>
            <li>&quot;You should be further ahead by now.&quot;</li>
          </ul>

          <p>
            Instead of fighting that voice, try getting curious about it.
          </p>

          <blockquote>
            &quot;When did I first learn to talk to myself this way?&quot;
          </blockquote>

          <p>Then ask:</p>

          <blockquote>
            &quot;What is this voice trying to protect me from?&quot;
          </blockquote>

          <p>
            Sometimes the inner critic develops as a way of preventing
            rejection, embarrassment, failure, or disappointment.
          </p>

          <p>
            If you criticize yourself before someone else can, you may feel as
            though you&apos;re protecting yourself from their criticism.
          </p>

          <p>
            That doesn&apos;t make the voice correct.
          </p>

          <p>
            It simply means there may be a reason it developed.
          </p>

          <p>
            You can acknowledge that reason without allowing the critic to run
            your life.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            5. Ask: &quot;What Am I Really Feeling?&quot;
          </h2>

          <p>
            Sometimes the emotion we express isn&apos;t the emotion
            underneath.
          </p>

          <p>
            Anger might be covering sadness.
            <br />
            Indifference might be covering disappointment.
            <br />
            Jealousy might be covering insecurity.
            <br />
            Irritation might be covering hurt.
          </p>

          <p>
            Try this the next time you experience a strong emotion.
          </p>

          <p>
            Write:
          </p>

          <blockquote>
            &quot;I feel ______ because ______.&quot;
          </blockquote>

          <p>Then ask yourself:</p>

          <blockquote>
            &quot;If that isn&apos;t the whole story, what else might I be
            feeling?&quot;
          </blockquote>

          <p>Keep going.</p>

          <p>
            For example:
          </p>

          <p>
            I&apos;m angry because they ignored me.
          </p>

          <p>
            Then:
            <br />
            Maybe I&apos;m actually hurt.
          </p>

          <p>
            Then:
            <br />
            Maybe being ignored made me feel unimportant.
          </p>

          <p>
            Then:
            <br />
            Maybe feeling unimportant is something I&apos;ve experienced
            before.
          </p>

          <p>
            The deeper you go, the more specific the emotion can become.
          </p>

          <p>
            And sometimes the most useful discovery isn&apos;t what happened.
          </p>

          <p>
            It&apos;s what the experience meant to you.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            6. Look for Childhood Patterns
          </h2>

          <p>
            Our childhood experiences don&apos;t completely determine who we
            become, but they can influence the beliefs and patterns we carry
            into adulthood.
          </p>

          <p>
            Think about the environment you grew up in.
          </p>

          <p>
            What emotions were welcomed?
            <br />
            Which ones weren&apos;t?
            <br />
            What happened when you made a mistake?
            <br />
            What happened when you disagreed with someone?
            <br />
            What happened when you needed attention, reassurance, or comfort?
          </p>

          <p>Complete these sentences:</p>

          <blockquote>
            &quot;Growing up, I learned that it was okay to
            ______.&quot;
            <br />
            <br />
            &quot;Growing up, I learned that it wasn&apos;t okay to
            ______.&quot;
            <br />
            <br />
            &quot;When I was upset, people usually ______.&quot;
            <br />
            <br />
            &quot;When I made a mistake, I was ______.&quot;
            <br />
            <br />
            &quot;I learned to keep ______ to myself.&quot;
          </blockquote>

          <p>Then ask:</p>

          <blockquote>
            &quot;Do I still live by these rules today?&quot;
          </blockquote>

          <p>
            You may discover that some rules that once helped you navigate
            childhood no longer fit the person you&apos;ve become.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            7. Examine Repeating Relationship Patterns
          </h2>

          <p>
            One of the most revealing forms of self-reflection is looking for
            patterns in your relationships.
          </p>

          <p>
            Think about friendships, romantic relationships, family
            relationships, or even relationships at work.
          </p>

          <p>Ask yourself:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>Do I repeatedly choose similar types of people?</li>
            <li>Do I avoid certain types of people?</li>
            <li>Do I have the same arguments over and over?</li>
            <li>Do I become distant when someone gets close?</li>
            <li>Do I constantly seek reassurance?</li>
            <li>Do I have trouble setting boundaries?</li>
            <li>Do I feel responsible for other people&apos;s emotions?</li>
            <li>Do I leave relationships when I begin feeling vulnerable?</li>
          </ul>

          <p>
            Now ask:
          </p>

          <blockquote>
            &quot;What role do I tend to play in my relationships?&quot;
          </blockquote>

          <p>
            You might discover that you&apos;re always the rescuer, the
            peacemaker, the outsider, the caretaker, the people-pleaser, or the
            person who eventually withdraws.
          </p>

          <p>
            Recognizing a pattern doesn&apos;t mean blaming yourself.
          </p>

          <p>
            It gives you an opportunity to interrupt it.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            8. Investigate Your Self-Sabotage
          </h2>

          <p>
            Self-sabotage can be confusing because part of you wants something
            while another part seems determined to prevent you from having it.
          </p>

          <p>
            You might want to start a business but continually put it off.
            <br />
            You might want a relationship but push people away.
            <br />
            You might want to become healthier but repeatedly abandon your
            plans.
            <br />
            You might want to pursue a dream but convince yourself you&apos;re
            not ready.
          </p>

          <p>
            Instead of asking:
          </p>

          <blockquote>
            &quot;Why do I keep ruining things?&quot;
          </blockquote>

          <p>try asking:</p>

          <blockquote>
            &quot;What am I protecting myself from?&quot;
          </blockquote>

          <p>
            Success can be frightening.
          </p>

          <p>
            Change can be frightening.
          </p>

          <p>
            Being seen can be frightening.
          </p>

          <p>
            Even getting what you want can create uncertainty because it means
            leaving something familiar behind.
          </p>

          <p>Complete this sentence:</p>

          <blockquote>
            &quot;If I actually succeeded, I would have to ______.&quot;
          </blockquote>

          <p>Then:</p>

          <blockquote>
            &quot;If I failed, I would be afraid that ______.&quot;
          </blockquote>

          <p>
            These answers can reveal fears that are hiding underneath
            procrastination or avoidance.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            9. Explore Your &quot;Opposite Self&quot;
          </h2>

          <p>
            Here&apos;s a simple exercise that can reveal some interesting
            contradictions.
          </p>

          <p>
            Think about the person you believe you are supposed to be.
          </p>

          <p>Maybe you&apos;re supposed to be:</p>

          <ul className="mb-8 list-disc space-y-3 pl-6">
            <li>calm</li>
            <li>responsible</li>
            <li>strong</li>
            <li>independent</li>
            <li>kind</li>
            <li>successful</li>
            <li>agreeable</li>
            <li>confident</li>
          </ul>

          <p>Now ask:</p>

          <blockquote>
            &quot;What is the opposite of that?&quot;
          </blockquote>

          <p>
            For example, if you believe you must always be strong, what happens
            when you feel vulnerable?
          </p>

          <p>
            If you believe you must always be independent, what happens when
            you need help?
          </p>

          <p>
            If you believe you must always be kind, what happens when
            you&apos;re angry?
          </p>

          <p>
            The goal isn&apos;t to become the opposite.
          </p>

          <p>
            It&apos;s to recognize that human beings are complicated.
          </p>

          <blockquote>
            You can be strong and vulnerable.
            <br />
            <br />
            Independent and in need of support.
            <br />
            <br />
            Kind and angry.
            <br />
            <br />
            Confident and uncertain.
          </blockquote>

          <p>
            Healthy self-awareness allows contradictory parts of you to exist
            without requiring one of them to be destroyed.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-8 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            10. Practice Integration
          </h2>

          <p>
            Shadow work isn&apos;t supposed to end with discovering something
            uncomfortable.
          </p>

          <p>
            The final step is integration.
          </p>

          <p>
            Integration means taking what you&apos;ve learned about yourself
            and deciding what you want to do with that knowledge.
          </p>

          <p>
            After completing any of these exercises, ask:
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            What did I discover?
          </h3>

          <p>
            Write down the most important thing you noticed.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            What emotion came up?
          </h3>

          <p>
            Don&apos;t just name the obvious emotion. Look underneath it.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            What belief might be connected to this?
          </h3>

          <p>
            For example:
          </p>

          <blockquote>
            &quot;I have to please everyone to be accepted.&quot;
          </blockquote>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            Is that belief still true?
          </h3>

          <p>
            Ask whether this is actually a rule you want to live by.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-[#202622]">
            What would a healthier response look like?
          </h3>

          <p>
            Think about what you could do differently the next time the same
            situation occurs.
          </p>

          <p>
            Finally ask:
          </p>

          <blockquote>
            &quot;What is one small thing I can do differently this
            week?&quot;
          </blockquote>

          <p>
            Keep it small.
          </p>

          <p>
            Real change doesn&apos;t always come from dramatic breakthroughs.
          </p>

          <p>
            Sometimes it comes from noticing yourself pause before reacting.
          </p>

          <p>
            Sometimes it means saying no.
          </p>

          <p>
            Sometimes it means admitting you&apos;re hurt.
          </p>

          <p>
            Sometimes it means allowing yourself to want something.
          </p>

          <p>
            Sometimes it means giving yourself the compassion you would
            normally give someone else.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            You Don&apos;t Have to Fix Everything You Discover
          </h2>

          <p>
            One of the biggest mistakes people can make with shadow work is
            turning it into another reason to criticize themselves.
          </p>

          <p>
            You discover that you&apos;re jealous, so you judge yourself.
            <br />
            You discover that you&apos;re angry, so you judge yourself.
            <br />
            You notice that you seek approval, so you judge yourself.
            <br />
            You realize you&apos;ve repeated an unhealthy pattern, so you
            decide something is wrong with you.
          </p>

          <p>
            That isn&apos;t the point.
          </p>

          <p>
            The purpose of self-awareness isn&apos;t to create a perfect
            version of yourself.
          </p>

          <p>
            It&apos;s to create a more honest relationship with yourself.
          </p>

          <p>
            You are allowed to discover things about yourself that you
            don&apos;t particularly like.
          </p>

          <p>
            You are also allowed to have compassion for the person who
            developed those patterns.
          </p>

          <blockquote>
            Awareness comes before change.
            <br />
            <br />
            You can&apos;t change a pattern you can&apos;t see.
          </blockquote>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            Start With One Exercise
          </h2>

          <p>
            You don&apos;t need a special journal, a perfect morning routine,
            or hours of uninterrupted meditation to begin.
          </p>

          <p>Pick one exercise.</p>

          <p>Set aside 10 or 15 minutes.</p>

          <p>
            Write honestly.
          </p>

          <p>
            Don&apos;t worry about sounding intelligent or having the
            &quot;right&quot; answer.
          </p>

          <p>
            If you get uncomfortable, slow down.
          </p>

          <p>
            If you don&apos;t know what to write, write that.
          </p>

          <blockquote>
            &quot;I don&apos;t know why this bothers me so much.&quot;
          </blockquote>

          <p>
            can be a better starting point than trying to immediately come up
            with an explanation.
          </p>

          <p>
            The deeper answers often appear when we stop forcing them.
          </p>

          <p>
            And if you&apos;re looking for an easy place to begin, try our{" "}
            <Link
              href="/journal/shadow-work-prompts-for-beginners"
              className="font-medium text-[#344137] underline underline-offset-4"
            >
              30 Shadow Work Prompts for Beginners
            </Link>
            . They can help you explore your emotions, patterns,
            relationships, fears, and the parts of yourself you may have been
            avoiding.
          </p>

          <hr className="my-14 border-[#202622]/10" />

          <h2 className="mb-6 font-serif text-3xl leading-tight text-[#202622] md:text-4xl">
            Final Thoughts
          </h2>

          <p>
            Shadow work isn&apos;t about becoming someone you&apos;re not.
          </p>

          <p>
            It&apos;s about becoming more familiar with the person you already
            are.
          </p>

          <p>
            The emotions you suppress.
            <br />
            The patterns you repeat.
            <br />
            The things that trigger you.
            <br />
            The qualities you hide.
            <br />
            The fears underneath your behavior.
            <br />
            The parts of yourself you&apos;ve learned to reject.
          </p>

          <p>
            When you become willing to look at these things without immediately
            judging them, something begins to change.
          </p>

          <p>
            You have more choice.
          </p>

          <p>
            Instead of automatically reacting, you can pause.
          </p>

          <p>
            Instead of repeating the same pattern, you can recognize it.
          </p>

          <p>
            Instead of asking, &quot;What&apos;s wrong with me?&quot; you can
            begin asking:
          </p>

          <blockquote>
            &quot;What is this part of me trying to tell me?&quot;
          </blockquote>

          <p>
            That question can be the beginning of a very different relationship
            with yourself.
          </p>

          <p>
            And sometimes, understanding yourself isn&apos;t about discovering
            something new.
          </p>

          <p>
            It&apos;s about finally being willing to look at what has been
            there all along.
          </p>

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