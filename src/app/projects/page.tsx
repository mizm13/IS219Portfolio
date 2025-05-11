import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Interactive Data Visualization",
      description: "A dynamic data visualization project that transforms complex datasets into intuitive, interactive experiences.",
      category: "Data Visualization",
      technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/data-viz.jpg",
      link: "https://nj-housing-prices-data-visualization.onrender.com/"
    },
    {
      title: "AI-Powered Chat Interface",
      description: "An innovative chat interface leveraging large language models to provide intelligent, context-aware responses.",
      category: "AI Dev",
      technologies: ["Node.js", "Gemini API", "Express.js", "CSS"],
      image: "/projects/ai-chat.jpg",
      link: "https://chatbot-v2-mqit.onrender.com/"
    },
    {
      title: "Free to Play Games Database",
      description: "A showcase of my technical capabilities and innovative thinking through a FreeToPlay Games Database",
      category: "Web Dev",
      technologies: ["React", "Express.js", "MongoDB", "React Bootstrap"],
      image: "/projects/personal.jpg",
      link: "https://freetoplay-games-site.onrender.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <main className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            A collection of innovative solutions showcasing technical expertise and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-neutral-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {project.category}
                  </span>
                </div>
                <CardDescription className="text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-block text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-8">
            Check out my GitHub for additional projects and contributions.
          </p>
          <Link
            href="https://github.com/mizm13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Visit GitHub
          </Link>
        </div>
      </main>
    </div>
  );
} 