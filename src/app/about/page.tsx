import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-neutral-900 dark:text-white">About</span>
              <span className="text-gradient-brand ml-2">Me</span>
            </h1>
            <p className="text-xl text-neutral-700 dark:text-neutral-200">
              Challenging conventional IT solutions through innovative development and infrastructure expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">Mission & Values</h2>
            <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-200">
              <p>
                I believe in challenging the status quo of traditional IT solutions. My mission is to revolutionize how businesses approach technology by combining cutting-edge development practices with robust infrastructure solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-l-4 border-l-primary-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-600 dark:text-primary-400">Innovation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Pushing boundaries and embracing unconventional solutions to solve complex problems.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-secondary-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary-600 dark:text-secondary-400">Technical Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Delivering robust, scalable solutions that stand the test of time.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">My Journey</h2>
            <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-200">
              <p>
                As an IT student specializing in web development, I've built a strong foundation in systems integration, networking, and automation. My experience spans from full-stack development with REST APIs to implementing complex cloud-native networking solutions.
              </p>
              <p>
                Through my internship, I've gained hands-on experience with enterprise tools like SolarWinds and Tanium, while developing expertise in both Windows and Linux environments. I'm currently expanding my cybersecurity knowledge through CompTIA Security+ certification preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-primary-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-600 dark:text-primary-400">Web Development</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">Full-Stack Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                  <li>• REST APIs</li>
                  <li>• PHP Development</li>
                  <li>• System Integration</li>
                  <li>• AWS Services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-secondary-600 dark:text-secondary-400">Infrastructure</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">Enterprise Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                  <li>• Network Monitoring</li>
                  <li>• SD-WAN Implementation</li>
                  <li>• Multi-Environment Setup</li>
                  <li>• SystemD Services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-accent-600 dark:text-accent-400">Tools & Platforms</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">Enterprise Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                  <li>• SolarWinds</li>
                  <li>• Tanium</li>
                  <li>• Active Roles</li>
                  <li>• Nagios</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">Education</h2>
            <Card className="border-l-4 border-l-primary-500">
              <CardHeader>
                <CardTitle className="text-xl text-neutral-900 dark:text-white">Bachelor of Science in Information Technology</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">New Jersey Institute of Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-200">
                  Currently pursuing my degree with a focus on web development and system integration. Actively involved in expanding my knowledge through certifications and practical experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 