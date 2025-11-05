"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-pulse-glow" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ChargeNomad
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-foreground/80 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#technology" className="text-foreground/80 hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="#products" className="text-foreground/80 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#technology" className="text-foreground/80 hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Shop Now</Button>
          </div>
        )}
      </nav>
    </header>
  )
}
