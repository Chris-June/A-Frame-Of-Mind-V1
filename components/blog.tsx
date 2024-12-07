"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Breaking the Stigma: Men's Mental Health in 2024",
    category: "Mental Health",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
  },
  {
    id: 2,
    title: "5 Daily Habits for Better Mental Well-being",
    category: "Wellness",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
  },
  {
    id: 3,
    title: "The Power of Professional Support",
    category: "Therapy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expert articles and practical advice for your mental health journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="group">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" className="border-emerald-500/50 hover:border-emerald-500">
          View All Articles
        </Button>
      </div>
    </section>
  );
}