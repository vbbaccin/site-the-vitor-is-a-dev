import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Sobre', id: 'about' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-700/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold bg-gradient-to-r from-neon-green to-neon-emerald bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            VB
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-neon-green transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/vbbaccin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neon-green/10 text-neon-green hover:bg-neon-green/20 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-dark-700/30 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-400 hover:text-neon-green hover:bg-dark-800/50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/vbbaccin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 rounded-lg bg-neon-green/10 text-neon-green hover:bg-neon-green/20 transition-colors text-center"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
