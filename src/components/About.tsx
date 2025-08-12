import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless performance."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams with strong communication and problem-solving skills."
    }
  ]

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-indigo-500" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Docker", color: "bg-blue-700" },
    { name: "Git", color: "bg-red-500" }
  ]

  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with experience in building modern web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not 
            coding, you can find me exploring new technologies or contributing to open-source projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8">What I Bring to the Table</h3>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card-hover p-4 rounded-lg bg-card border border-border"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-gradient-card border border-border"
            >
              <h4 className="text-xl font-semibold mb-3">Always Learning</h4>
              <p className="text-muted-foreground">
                Currently exploring AI/ML integration, serverless architectures, and advancing my skills 
                in cloud technologies. I believe in continuous learning and staying updated with the 
                latest industry trends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}