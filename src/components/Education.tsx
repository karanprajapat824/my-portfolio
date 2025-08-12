import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Rajasthan Technical University",
      location: "Kota, Rajasthan",
      duration: "2020 - 2024",
      grade: "8.5 CGPA",
      description: "Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, and web development.",
      achievements: [
        "Dean's List for academic excellence",
        "Led the web development team in college tech fest",
        "Completed capstone project on e-commerce platform"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ]

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      icon: "🏆"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      icon: "⚛️"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "HackerRank",
      date: "2022",
      icon: "📜"
    }
  ]

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that have built the foundation for my development career.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Education Details */}
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
                        <div className="space-y-2">
                          <div className="text-xl font-semibold text-primary">
                            {edu.institution}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {edu.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {edu.location}
                            </div>
                            <Badge variant="secondary" className="w-fit">
                              {edu.grade}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-lg">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.1 + achIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge 
                            key={course} 
                            variant="outline"
                            className="bg-background"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover bg-card border-border p-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-gradient-card border-border p-6 text-center">
                <h4 className="font-semibold mb-3">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Always staying updated with the latest technologies and best practices through online courses, workshops, and community contributions.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}