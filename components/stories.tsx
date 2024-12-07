"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Share2 } from "lucide-react";
import ContactForm from "./contact-form";

const stories = [
  {
    id: 1,
    author: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    title: "Finding Strength in Vulnerability",
    preview: "I never thought opening up would make me stronger, but sharing my story changed everything...",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    title: "The Journey to Self-Acceptance",
    preview: "Learning to accept myself was the first step in my healing journey...",
    date: "March 12, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    author: "David Thompson",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    title: "Breaking the Silence",
    preview: "For years, I kept my struggles hidden. Here's how I learned to speak up...",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
];

export default function Stories() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Real Stories, Real Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Read inspiring stories from men who've faced similar challenges and emerged stronger.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={story.avatar} alt={story.author} />
                  <AvatarFallback>{story.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{story.author}</p>
                  <p className="text-sm text-muted-foreground">{story.date}</p>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
              <CardDescription>{story.preview}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="outline"
          className="border-emerald-500/50 hover:border-emerald-500"
          onClick={() => setShowContactForm(true)}
        >
          Share Your Story
        </Button>
      </div>
      <ContactForm open={showContactForm} onOpenChange={setShowContactForm} />
    </section>
  );
}