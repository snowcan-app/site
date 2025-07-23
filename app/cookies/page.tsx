import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/contact">
            <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-800/50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Contact
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-300 text-center">Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-purple-300 mb-3">What Are Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are stored on your computer or mobile device when you visit our
                    website or use our games.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-purple-300 mb-3">How We Use Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies to improve your gaming experience, remember your preferences, and analyze how our
                    games are used.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-purple-300 mb-3">Types of Cookies We Use</h2>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Essential cookies for basic functionality</li>
                    <li>Performance cookies to analyze usage</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-purple-300 mb-3">Managing Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You can control and manage cookies through your browser settings. Please note that disabling cookies
                    may affect the functionality of our games.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
