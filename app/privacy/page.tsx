import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
                <CardTitle className="text-3xl text-purple-300 text-center">Privacy Policy</CardTitle>
                <p className="text-center text-gray-300">Effective Date: 2025-05-01</p>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy explains how Snowcan collects, uses, and shares information when you use our
                    puzzle game application ("the App").
                  </p>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">1. Information We Collect</h2>
                    <p className="text-gray-300 leading-relaxed">We may collect the following types of information:</p>
                    <ul className="text-gray-300 space-y-1 list-disc pl-5">
                      <li>Device information (e.g., OS version, device model)</li>
                      <li>Gameplay data (e.g., levels completed, in-app purchases)</li>
                      <li>Crash logs and diagnostics</li>
                      <li>User identifiers (e.g., Google Play ID or Apple Game Center ID)</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-3">We do NOT collect:</p>
                    <ul className="text-gray-300 space-y-1 list-disc pl-5">
                      <li>Personally identifiable information (PII) like name, address, email</li>
                      <li>Location data</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">2. How We Use Information</h2>
                    <p className="text-gray-300 leading-relaxed">We use the data to:</p>
                    <ul className="text-gray-300 space-y-1 list-disc pl-5">
                      <li>Improve game performance and fix bugs</li>
                      <li>Analyze gameplay trends</li>
                      <li>Manage and verify in-app purchases</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">3. Third-Party Services</h2>
                    <p className="text-gray-300 leading-relaxed">
                      The App may use third-party SDKs (e.g., Google Play Services). These services may collect limited
                      information as described in their privacy policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">4. Children's Privacy</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Our app is not directed to children under 13. We do not knowingly collect personal data from
                      children. If you are a parent and believe your child provided data, please contact us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">5. Data Retention</h2>
                    <p className="text-gray-300 leading-relaxed">
                      We retain data only as long as necessary for game functionality and legal compliance.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">6. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                      If you have any questions or requests regarding your data, contact us at:
                      <br />📧{" "}
                      <a href="mailto:support@snowcan.app" className="text-blue-400 hover:text-blue-300">
                        support@snowcan.app
                      </a>
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
