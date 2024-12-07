import Hero from '@/components/hero';
import Stories from '@/components/stories';
import Resources from '@/components/resources';
import Blog from '@/components/blog';
import FAQ from '@/components/faq';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stories />
      <Resources />
      <Blog />
      <Testimonials />
      <FAQ />
    </div>
  );
}