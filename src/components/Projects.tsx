import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "ElementX",
      description:
        "A developer-friendly platform for sharing customizable UI components, featuring a built-in HTML & CSS code editor with live preview. Includes social features like likes, shares, comments, and saves to enhance collaboration and usability.",
      image: "/elementx.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://elementx-stable.vercel.app",
      githubUrl: "",
      featured: true,
    },
    {
      title: "To-Do App",
      description:
        "A simple yet powerful task management web app that allows users to create, edit, delete, and mark tasks as complete. Features filtering by status, persistent storage using local storage, and a clean responsive UI for seamless usage across devices.",
      image: "/todo.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://karan-todo-app.vercel.app",
      githubUrl: "https://github.com/karanprajapat824/todo-app",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects - Larger Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover h-full bg-card border-border overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                        <img src={project.image}></img>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 text-black hover:bg-white"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Other Projects - Smaller Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover h-full bg-card border-border overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-accent rounded-t-lg flex items-center justify-center">
                        <div className="text-accent-foreground text-xl font-bold">
                          {project.title}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="btn-outline-glow"
            asChild
          >
            <a
              href="https://github.com/karanprajapat824"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
