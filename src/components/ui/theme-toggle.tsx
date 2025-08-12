import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = localStorage.getItem("theme") || "light"
    setTheme(initialTheme)
    
    if (initialTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    const newTheme = theme === "light" ? "dark" : "light"
    
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}