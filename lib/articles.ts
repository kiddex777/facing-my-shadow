export type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  published: boolean;
  read?: string;
};

export const articles: Article[] = [
  {
    title: "Shadow Work Prompts for Beginners: 30 Questions to Start With",
    excerpt:
      "A gentle introduction to shadow work, with 30 questions designed to help you understand your patterns with more honesty and compassion.",
    category: "Shadow Work",
    date: "September 2026",
    image: "/images/shadow-work.jpg",
    slug: "shadow-work-prompts-for-beginners",
    published: true,
  },

  {
    title: "Shadow Work Exercises: 10 Practices to Understand Yourself Better",
    excerpt:
      "Explore 10 simple shadow work exercises to understand your emotions, triggers, relationships, self-sabotage, and hidden patterns with greater honesty and compassion.",
    category: "Shadow Work",
    date: "September 2026",
    image: "/images/shadow-work.jpg",
    slug: "shadow-work-exercises",
    published: true,
  },

  {
    title: "Why We Hide the Parts of Ourselves We Need to Understand",
    excerpt:
      "We all have parts of ourselves we would rather not look at. Understanding why we hide them can be the beginning of real self-awareness.",
    category: "Self-Awareness",
    date: "Coming Soon",
    image: "/images/self-acceptance.jpg",
    slug: "",
    published: false,
  },
  {
    title: "The Hidden Reasons You Keep Getting in Your Own Way",
    excerpt:
      "Self-sabotage rarely comes from nowhere. Explore some of the deeper patterns that can keep us repeating the same cycles.",
    category: "Self-Sabotage",
    date: "Coming Soon",
    image: "/images/self-sabotage.jpg",
    slug: "",
    published: false,
  },
  {
    title: "Learning to Sit With the Parts of Yourself You Don't Like",
    excerpt:
      "Self-acceptance doesn't mean approving of everything you do. Sometimes it begins with learning to look at yourself without immediately turning away.",
    category: "Self-Acceptance",
    date: "Coming Soon",
    image: "/images/self-acceptance.jpg",
    slug: "",
    published: false,
  },
  {
    title: "What Your Triggers Might Be Trying to Show You",
    excerpt:
      "Triggers can reveal emotional patterns that are easy to overlook. Learning to pause and become curious can change how you respond.",
    category: "Triggers",
    date: "Coming Soon",
    image: "/images/triggers.jpg",
    slug: "",
    published: false,
  },
  {
    title: "The Inner Child and the Adult You Became",
    excerpt:
      "The experiences we had growing up can continue to shape how we relate to ourselves, other people, and the world around us.",
    category: "Inner Child",
    date: "Coming Soon",
    image: "/images/inner-child.jpg",
    slug: "",
    published: false,
  },
];