import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-800/50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-purple-300">Get in touch with the Snowcan team</p>
          </header>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto mb-12">
            {/* Company Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-300 flex items-center">
                  <MapPin className="mr-2 h-6 w-6" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                 Owner 
                </h3>
                <p className="text-gray-300">HYEWON JANG</p>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-300">
                    26-7, Cheonggyesan-ro 4-gil, Sujeong-gu
                    <br />
                    Seongnam-si, Gyeonggi-do,
                    <br />
                    Republic of Korea
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Phone
                  </h3>
                  <p className="text-gray-300">+82 1086551677</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </h3>
                  <p className="text-gray-300">
                    <a href="mailto:support@snowcan.app" className="text-blue-400 hover:text-blue-300">
                      support@snowcan.app
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legal Links */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300 text-center">Legal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/cookies" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-purple-400/30">
            <p className="text-purple-300">&copy; 2025 Snowcan All rights reserved.</p>
          </footer>
        </div>
      </div>
  )
}
