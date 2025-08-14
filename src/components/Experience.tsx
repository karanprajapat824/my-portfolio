import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react";
import { ArrowDown, Download } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "IndusAi Solutions",
      location: "Remote",
      duration: "July 2024 - Oct 2024",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with senior developers to implement new features and optimize existing codebase.",
      responsibilities: [
        "Built responsive user interfaces with React and TypeScript",
        "Developed RESTful APIs using Node.js and Express",
        "Worked with MongoDB for database design and optimization",
        "Participated in code reviews and followed agile development practices",
        "Reduced application load time by 40% through optimization techniques",
      ],
      technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Git"],
      certificate : "./indusAi Solution.png"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Elavate Labs",
      location: "Remote",
      duration: "Aug 2025 - Current",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with senior developers to implement new features and optimize existing codebase.",
      responsibilities: [
        "Designed and implemented responsive web interfaces",
        "Collaborated with UX/UI designers to create pixel-perfect layouts",
        "Integrated frontend applications with backend APIs",
        "Optimized web applications for cross-browser compatibility",
        "Mentored junior interns and conducted code reviews",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Git",
      ],
      certificate : ''
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and internship experiences that have shaped
            my development skills.
          </p>
        </motion.div>

        <div className="mx-auto w-full">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="space-y-8 ">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="card-hover ml-0 md:ml-20 bg-card border-border">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {experience.title}
                          </CardTitle>
                          <div className="text-xl font-semibold text-primary mb-2">
                            {experience.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-1">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground text-lg">
                        {experience.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map(
                            (responsibility, respIndex) => (
                              <motion.li
                                key={respIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1 + respIndex * 0.05,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">
                                  {responsibility}
                                </span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {
                        experience.certificate && <a
                        href={experience.certificate}
                        download
                        ><Button
                        variant="outline"
                        size="lg"
                        className="btn-outline-glow px-8 py-3 mt-4 text-lg font-semibold rounded-full min-w-[200px]"
                      >
                        Download Certificat
                        <Download className="ml-2 h-5 w-5" />
                      </Button></a>
                      }
                      
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <Card className="card-hover bg-gradient-card border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Months of Experience</div>
            </CardContent>
          </Card>
          <Card className="card-hover bg-gradient-card border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </CardContent>
          </Card>
          <Card className="card-hover bg-gradient-card border-border text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Companies Worked With</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
