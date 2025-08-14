import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/karanprajapat824",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/karanprajapat824",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:karanprajapat824@gmail.com",
      label: "Email"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Karan Prajapat
            </h3>
            <p className="text-muted-foreground">
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <nav className="flex flex-wrap justify-center gap-6">
              {[
                { label: "About", href: "about" },
                { label: "Skills", href: "skills" },
                { label: "Projects", href: "projects" },
                { label: "Experience", href: "experience" },
                { label: "Education", href: "education" },
                { label: "Contact", href: "contact" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social Links & Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-end space-x-4"
          >
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-background hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="w-px h-8 bg-border"></div>
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Karan Prajapat. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            using React & TypeScript
          </p>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      </div>
    </footer>
  )
}