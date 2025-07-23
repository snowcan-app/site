"use client"

import { useState, useEffect } from "react"
import { X, Mail, Instagram } from "lucide-react"
import { Fredoka } from "next/font/google"
import { SnowGround } from "@/components/snow-ground"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function SnowcanWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("floating-menu")
      const menuButton = document.getElementById("menu-button")

      if (menu && menuButton && !menu.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen text-slate-900 relative" style={{ backgroundColor: "#F0F8FF" }}>
      {/* Snow Ground Effect */}
      <SnowGround />

      {/* Floating Menu */}
      <div className="fixed top-6 left-6 z-50">
        <button
          id="menu-button"
          className="p-2 hover:scale-110 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-12 h-12 text-slate-700 stroke-[2.5] hover:text-slate-900" />
          ) : (
            <img
              src="/images/menu-icon.jpg"
              alt="Menu"
              className="w-12 h-12 object-contain hover:opacity-80 transition-opacity"
              style={{ imageRendering: "pixelated" }}
            />
          )}
        </button>

        {/* Menu Items */}
        {isMenuOpen && (
          <div
            id="floating-menu"
            className="absolute top-12 left-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200 py-2 min-w-[140px] animate-in fade-in-0 zoom-in-95 duration-200"
          >
            <button
              onClick={() => scrollToSection("we-can")}
              className="w-full px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              We Can
            </button>
            <button
              onClick={() => scrollToSection("our-games")}
              className="w-full px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Our Games
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="w-full px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center px-6">
        <div className="text-center">
          <img
            src="/images/snowcan-logo-with-snowman.png"
            alt="Snowcan - Game Development Company"
            className="w-full max-w-4xl h-auto object-contain mx-auto"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          />
        </div>
      </section>

      {/* We Can Section */}
      <section id="we-can" className="flex flex-col justify-between px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-800 mb-8 tracking-wide">We Can</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-light">
            We create games that bring joy and fun to players around the world. From small puzzle games to relaxing
            experiences in everyday life, we strive to grow in many directions. Our challenge doesn't stop until our
            players are truly satisfied.
          </p>
        </div>

        {/* Snowmen Group Image - moved to bottom */}
        <div className="max-w-4xl mx-auto w-full">
          <img
            src="/images/snowmen-group.png"
            alt="Five cute snowmen with different accessories"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>
      </section>

      {/* Our Games Section */}
      <section id="our-games" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-slate-800 mb-12 tracking-wide">Our Games</h2>

          <div className="space-y-8">
            <div>
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 tracking-wide ${fredoka.className}`}
                style={{
                  color: "#F5F5F5",
                  WebkitTextStroke: "1px #000000",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.2))",
                }}
              >
                Bubble City Pop
              </h3>
              <div className="w-full mb-6">
                <img
                  src="/images/bubble-city-pop.png"
                  alt="Bubble Game Screenshot"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Us Section */}
      <section id="contact-us" className="flex items-center px-6 py-20 mb-20 relative z-20">

          <div className="max-w-4xl mx-auto w-full">
          <div className="space-y-6">
              {/* Contact Button */}
              <div className="text-center">
                  <Link href="/contact">
                      <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                          Contact
                      </Button>
                  </Link>
              </div>
          </div>
        </div>
      </section>
        
    {/*  Footer */}
    <footer className="text-center py-6 border-t border-purple-400/30 bg-white/90 backdrop-blur-sm">
        <p className="text-black-400 text-sm">&copy; 2025 Snowcan. All rights reserved.</p>
    </footer>
</div>
  )
}
