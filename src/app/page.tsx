import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-neutral-900 dark:text-white">Welcome!</span>
              <br />
              <span className="text-gradient-brand">I'm Mizan Modak</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Bridging development and infrastructure to deliver smart, reliable, and future-ready tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/projects">
                <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-700">Radical Innovation</CardTitle>
                <CardDescription>Breaking conventional boundaries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Pushing the limits of what's possible through cutting-edge technology and creative problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-secondary-700">Technical Excellence</CardTitle>
                <CardDescription>Beyond the ordinary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Combining technical expertise with innovative thinking to deliver exceptional solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-accent-700">Future-Focused</CardTitle>
                <CardDescription>Building tomorrow's solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Creating technology solutions that anticipate and shape the future of digital experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              A showcase of innovative solutions that challenge conventional approaches
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  Data Visualization
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Interactive Data Viz</CardTitle>
                <CardDescription>Transforming complex data into intuitive experiences</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  AI Project
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">AI Chat Interface</CardTitle>
                <CardDescription>Intelligent, context-aware interactions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  Personal Project
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Innovation Showcase</CardTitle>
                <CardDescription>Pushing boundaries with creative solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90 text-white">
                View All Projects →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            Let's collaborate to build innovative solutions that challenge the status quo.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
