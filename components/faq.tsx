"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I need professional help?",
    answer: "If you're experiencing persistent feelings of sadness, anxiety, or other emotional challenges that interfere with your daily life, it may be time to seek professional help. Remember, seeking support is a sign of strength, not weakness.",
  },
  {
    question: "What can I expect in my first therapy session?",
    answer: "Your first therapy session typically involves getting to know each other. Your therapist will ask about your background, current challenges, and what you hope to achieve. It's an opportunity to ensure you feel comfortable and to establish trust.",
  },
  {
    question: "How can I support a friend who's struggling?",
    answer: "Listen without judgment, express your concern, and encourage them to seek professional help if needed. Sometimes just being present and showing you care can make a significant difference.",
  },
  {
    question: "Are my conversations confidential?",
    answer: "Yes, all conversations and interactions on our platform are completely confidential. We follow strict privacy guidelines and industry-standard security measures to protect your information.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground">
            Find answers to frequently asked questions about mental health and support.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}