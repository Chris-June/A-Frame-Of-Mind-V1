"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Link as LinkIcon } from "lucide-react";
import ResourceModal from "./resource-modal";

const resources = [
  {
    id: 1,
    title: "Understanding Anxiety",
    description: "Learn about anxiety symptoms, triggers, and coping strategies.",
    type: "guide",
    icon: BookOpen,
    importance: "Anxiety affects millions of men worldwide, yet many struggle in silence. Understanding anxiety is the first step toward managing it effectively and living a fuller life.",
    content: "Anxiety is more than just feeling stressed or worried. It's a complex interplay of physical and emotional responses that can significantly impact daily life. By understanding its mechanisms, triggers, and effects, you can develop better strategies to manage it.",
    tips: [
      "Practice deep breathing exercises - inhale for 4 counts, hold for 4, exhale for 4",
      "Challenge negative thought patterns by questioning their validity",
      "Create a daily routine to provide structure and predictability",
      "Reach out to trusted friends or professionals when feeling overwhelmed"
    ]
  },
  {
    id: 2,
    title: "Meditation Basics",
    description: "A beginner's guide to meditation and mindfulness practices.",
    type: "video",
    icon: Video,
    importance: "Meditation is a powerful tool for mental well-being, helping reduce stress, improve focus, and enhance emotional regulation.",
    content: "Meditation isn't about clearing your mind completely - it's about observing your thoughts without judgment. This practice can help you develop a more balanced and peaceful relationship with your mental experiences.",
    tips: [
      "Start with just 5 minutes of meditation daily",
      "Focus on your breath as an anchor when your mind wanders",
      "Find a quiet, comfortable space for your practice",
      "Use guided meditations to help build your practice"
    ]
  },
  {
    id: 3,
    title: "Stress Management",
    description: "Practical techniques for managing daily stress and pressure.",
    type: "pdf",
    icon: FileText,
    importance: "Chronic stress can lead to serious physical and mental health issues. Learning to manage stress effectively is crucial for maintaining overall well-being.",
    content: "Stress is a natural response, but chronic stress can be harmful. Understanding your stress triggers and having effective management techniques can help you maintain balance in challenging times.",
    tips: [
      "Identify and list your personal stress triggers",
      "Develop healthy coping mechanisms like exercise or journaling",
      "Set boundaries in work and personal relationships",
      "Practice regular self-care activities"
    ]
  },
  {
    id: 4,
    title: "Support Networks",
    description: "How to build and maintain supportive relationships.",
    type: "link",
    icon: LinkIcon,
    importance: "Strong support networks are essential for mental health. They provide emotional backing, practical help, and a sense of belonging.",
    content: "Building and maintaining supportive relationships takes time and effort, but the benefits to your mental health are invaluable. A strong support network can provide different types of support when you need it most.",
    tips: [
      "Actively nurture existing relationships with regular communication",
      "Join groups or communities with shared interests",
      "Be open to giving and receiving support",
      "Practice active listening and empathy"
    ]
  },
];

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);

  return (
    <section id="resources" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access professional resources designed to support your mental health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setSelectedResource(resource)}
                >
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Browse All Resources
          </Button>
        </div>
      </div>
      <ResourceModal
        open={!!selectedResource}
        onOpenChange={(open) => !open && setSelectedResource(null)}
        resource={selectedResource}
      />
    </section>
  );
}