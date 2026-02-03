// components/blogsSec/blogsData.ts
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: BlogContentBlock[];
}

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "modern-react-patterns",
    title: "Modern React Patterns Every Developer Should Know",
    excerpt:
      "Explore cutting-edge React patterns that will elevate your component architecture and state management.",
    date: "May 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Frontend", "Patterns"],
    image: "/images/blogImage/blog-react-patterns.png",
    content: [
      {
        type: "paragraph",
        text: "Great React apps feel effortless because their foundations are designed with intention. Patterns are the shortcuts that turn intent into clarity: they reduce mental load, improve consistency, and help teams scale without fracturing code style.",
      },
      { type: "heading", text: "1) Compound Components" },
      {
        type: "paragraph",
        text: "Compound components let you build flexible APIs while keeping state and logic in one place. You get the best of both worlds: a clean surface for consumers and control over the internals.",
      },
      {
        type: "list",
        items: [
          "Expose subcomponents like <Tabs.List> and <Tabs.Panel> for clarity.",
          "Use context to share state without prop drilling.",
          "Keep accessibility in the parent component.",
        ],
      },
      { type: "heading", text: "2) Render Props & Headless UI" },
      {
        type: "paragraph",
        text: "When you want full control over the markup, headless components are ideal. Render props let you reuse behavior while letting consumers fully control presentation.",
      },
      { type: "heading", text: "3) Controlled vs Uncontrolled" },
      {
        type: "paragraph",
        text: "Build components that can be both. Start uncontrolled for ease of use, then allow a controlled mode when consumers need full control over state.",
      },
      {
        type: "quote",
        text: "Designing for flexibility today means fewer rewrites tomorrow.",
      },
      {
        type: "paragraph",
        text: "Try one pattern at a time. The goal isn’t to be clever — it’s to make your UI durable, predictable, and easy to evolve.",
      },
    ],
  },

  {
    id: 3,
    slug: "scalable-microservices-go",
    title: "Building Scalable Microservices with Go",
    excerpt:
      "Learn how to design and implement high-performance microservices architecture using Golang.",
    date: "March 10, 2024",
    readTime: "15 min read",
    tags: ["Go", "Backend", "Microservices"],
    image: "/images/blogImage/blog-golang.png",
    content: [
      {
        type: "paragraph",
        text: "Go makes it easy to build fast, reliable services. But scalability isn’t only about speed — it’s about clarity in boundaries, strong contracts, and consistent observability.",
      },
      { type: "heading", text: "Define Clear Service Boundaries" },
      {
        type: "paragraph",
        text: "Start with business capabilities, not databases. Each service should own a specific outcome and expose a stable API for others to integrate.",
      },
      { type: "heading", text: "Design for Failure" },
      {
        type: "list",
        items: [
          "Use timeouts and retries with backoff.",
          "Add circuit breakers for dependent services.",
          "Favor async workflows where possible.",
        ],
      },
      { type: "heading", text: "Observability From Day One" },
      {
        type: "paragraph",
        text: "Logs, metrics, and traces should ship with every release. The best system is the one you can debug quickly.",
      },
      {
        type: "quote",
        text: "If it’s hard to see, it’s hard to scale.",
      },
      {
        type: "paragraph",
        text: "Start small and evolve. Microservices are a direction, not a finish line.",
      },
    ],
  },
  {
    id: 4,
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive comparison between CSS Grid and Flexbox with practical use cases for both.",
    date: "February 22, 2024",
    readTime: "10 min read",
    tags: ["CSS", "Frontend"],
    image: "/images/blogImage/blog-css.png",
    content: [
      {
        type: "paragraph",
        text: "Grid and Flexbox are not competitors — they’re complementary tools. The best UIs use both where they shine.",
      },
      { type: "heading", text: "When Grid Is the Right Fit" },
      {
        type: "list",
        items: [
          "Two-dimensional layouts (rows + columns).",
          "Precise placement of cards or dashboard panels.",
          "Complex responsive rearrangements.",
        ],
      },
      { type: "heading", text: "When Flexbox Wins" },
      {
        type: "list",
        items: [
          "One-dimensional alignment (row or column).",
          "Navigation bars and toolbars.",
          "Content that needs to wrap naturally.",
        ],
      },
      {
        type: "quote",
        text: "Use Grid for the structure, Flexbox for the flow.",
      },
      {
        type: "paragraph",
        text: "Start with grid for the major layout, then layer Flexbox inside cards or modules for clean alignment.",
      },
    ],
  },
];
