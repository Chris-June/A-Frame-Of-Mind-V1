"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

interface ResourceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resource: {
    title: string;
    description: string;
    importance: string;
    content: string;
    tips: string[];
  } | null;
}

export default function ResourceModal({ open, onOpenChange, resource }: ResourceModalProps) {
  if (!resource) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{resource.title}</DialogTitle>
          <DialogDescription className="text-emerald-500">
            Why it's important
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="pr-4">
          <div className="space-y-6">
            <p className="text-muted-foreground">{resource.importance}</p>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Understanding {resource.title}</h3>
              <p className="text-muted-foreground">{resource.content}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Practical Tips</h3>
              <ul className="space-y-3">
                {resource.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
        <div className="mt-6">
          <Button
            className="w-full bg-emerald-500 hover:bg-emerald-600"
            onClick={() => onOpenChange(false)}
          >
            Got It
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}