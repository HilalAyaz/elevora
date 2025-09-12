"use client";

import React from "react";
import Container from "@/components/Container";
import { Italiana } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
};

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern SPA with React and Next.js",
    excerpt: "Learn how to structure and deploy a modern SPA using Next.js 15 and React.",
    date: "2025-09-13",
    image: "https://source.unsplash.com/400x250/?code,react",
    slug: "/blog/modern-spa-react",
  },
  {
    id: 2,
    title: "Enhancing UX with Framer Motion Animations",
    excerpt: "Step-by-step guide to creating smooth animations with Framer Motion in React.",
    date: "2025-09-10",
    image: "https://source.unsplash.com/400x250/?animation,ui",
    slug: "/blog/framer-motion-guide",
  },
  {
    id: 3,
    title: "Next.js 15 Tips and Best Practices",
    excerpt: "Boost performance and maintainability in your Next.js projects with these tips.",
    date: "2025-09-05",
    image: "https://source.unsplash.com/400x250/?nextjs,web",
    slug: "/blog/nextjs-15-tips",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-20">
      <Container>
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className={`${italiana.className} text-5xl font-extrabold text-primary`}>
            Our Blog
          </h1>
          <p className={`${poppins.className} text-gray-500 mt-2 text-lg`}>
            Stay updated with the latest articles, tutorials, and news.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className={`${poppins.className} text-xl font-semibold text-primary mb-2`}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Link
                    href={post.slug}
                    className="text-primary font-semibold hover:text-secondary transition"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
