"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "This platform gave me the courage to speak up about my struggles. The support I received was life-changing.",
    author: "Mark R.",
    role: "Community Member",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    id: 2,
    quote: "Finding others who understood exactly what I was going through made all the difference in my recovery journey.",
    author: "Chris P.",
    role: "Support Group Member",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 3,
    quote: "The resources here helped me understand that mental health struggles don't define who I am.",
    author: "Alex M.",
    role: "Community Member",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Voices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from members who have found support and strength through our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                <p className="mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}