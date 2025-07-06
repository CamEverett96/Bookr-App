"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { ShineBorder } from "@/components/magicui/shine-border"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-border text-foreground" style={{ background: 'var(--background-gradient)' }}>
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Bookr</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Streamline your calendar, automate your bookings, and focus on what matters most.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Bookr. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="transition-colors hover:text-purple-600 text-muted-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-purple-600 text-muted-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-purple-600 text-muted-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 