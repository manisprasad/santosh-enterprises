"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">Santosh Enterprises</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Services
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button Desktop */}
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#services"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#products"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <a
              href="#contact"
              className="block px-2 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
