import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="hero-background  min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-1 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={itemVariants} 
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="gradient-text pr-4">Karan</span>
                <span className="text-foreground">Prajapat</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Full Stack Web Developer
              </p>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              Crafting modern, scalable web applications with cutting-edge technologies. 
              Passionate about clean code, user experience, and building solutions that make a difference.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="btn-hero px-8 py-3 text-lg font-semibold rounded-full min-w-[200px]"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <a href="./resume.pdf" download>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-glow px-8 py-3 text-lg font-semibold rounded-full min-w-[200px]"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}