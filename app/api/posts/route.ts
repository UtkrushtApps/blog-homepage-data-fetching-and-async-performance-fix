import { NextRequest, NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    title: "Boost Your Skills With TypeScript",
    content: "Learn how to supercharge your JavaScript apps with TypeScript!",
    author: "Priya Sharma",
    publishedAt: "2024-05-20T08:30:00Z"
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    content: "Your quickstart guide to building fast React apps.",
    author: "Vikram Das",
    publishedAt: "2024-05-17T12:00:00Z"
  },
  {
    id: 3,
    title: "Why Async Matters in Web Dev",
    content: "Understand the power of async programming for great UX.",
    author: "Jessica Lee",
    publishedAt: "2024-05-14T14:15:00Z"
  }
];

export async function GET(request: NextRequest) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 700));
  return NextResponse.json({ posts });
}
