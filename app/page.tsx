import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Snowcan
          </h1>
          <div className="flex justify-center">
            <Image
              src="/logo.png?height=120&width=120"
              alt="Snowcan Logo"
              width={120}
              height={120}
              className="rounded-full border-4 border-white-400 shadow-lg shadow-purple-400/50"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-center space-y-12">
          {/* About Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 max-w-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-purple-300">About</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                We are a game development company dedicated to creating fun
                and unforgettable experiences for players.
                <p/>
                We are committed to developing high-quality games
                that can be enjoyed by players of all ages.
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Image
                src="/snowmen-group.png?height=120&width=120"
                alt="Snowcan Logo"
                width={600}
                height={120}
            />
          </div>
          
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
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-purple-400/30">
          <p className="text-purple-300">&copy; 2025 Snowcan All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
