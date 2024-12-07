"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Menu, 
  X, 
  Users, 
  BookOpen, 
  Newspaper, 
  HelpCircle,
  HeartHandshake 
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#stories', label: 'Stories', icon: Users },
    { href: '#resources', label: 'Resources', icon: BookOpen },
    { href: '#blog', label: 'Blog', icon: Newspaper },
    { href: '#faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-lg">Frame of Mind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Button variant="outline" className="border-emerald-500/50 hover:border-emerald-500">
              <HeartHandshake className="h-4 w-4 mr-2" />
              Get Help
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden',
          'fixed inset-x-0 top-16 bg-background/80 backdrop-blur-md border-b border-border/40',
          'transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
          <Button
            variant="outline"
            className="w-full border-emerald-500/50 hover:border-emerald-500"
          >
            <HeartHandshake className="h-4 w-4 mr-2" />
            Get Help
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;