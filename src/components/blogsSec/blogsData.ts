// components/blogsSec/blogsData.ts
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Modern React Patterns Every Developer Should Know",
    excerpt:
      "Explore cutting-edge React patterns that will elevate your component architecture and state management.",
    date: "May 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Frontend", "Patterns"],
    image: "/images/blogImage/blog-react-patterns.png",
    url: "#",
  },

  {
    id: 3,
    title: "Building Scalable Microservices with Go",
    excerpt:
      "Learn how to design and implement high-performance microservices architecture using Golang.",
    date: "March 10, 2024",
    readTime: "15 min read",
    tags: ["Go", "Backend", "Microservices"],
    image: "/images/blogImage/blog-golang.png",
    url: "#",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive comparison between CSS Grid and Flexbox with practical use cases for both.",
    date: "February 22, 2024",
    readTime: "10 min read",
    tags: ["CSS", "Frontend"],
    image: "/images/blogImage/blog-css.png",
    url: "#",
  },
];
