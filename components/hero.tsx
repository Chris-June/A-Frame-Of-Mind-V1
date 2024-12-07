import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-emerald-500/20 rounded-full bg-emerald-500/10 text-emerald-500">
          <Heart className="w-4 h-4 mr-2" />
          You're not alone in this journey
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Redefining Mental Health
          <span className="text-emerald-500"> Together</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join a community that understands. Share your story, find support, and access resources designed to help you thrive.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-500/50 hover:border-emerald-500">
            Browse Resources
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            ['1000+', 'Community Members'],
            ['50+', 'Expert Resources'],
            ['24/7', 'Support Available'],
            ['100%', 'Confidential'],
          ].map(([stat, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-bold text-emerald-500">{stat}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}