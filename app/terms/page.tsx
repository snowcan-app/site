import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
                <CardTitle className="text-3xl text-purple-300 text-center">Terms of Service</CardTitle>
                <p className="text-center text-gray-300">Effective Date: 2025-05-01</p>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Welcome to Snowcan's mobile puzzle game ("the App"). By downloading or using the App, you agree to the
                    following terms. If you do not agree with these terms, please do not use the App.
                  </p>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">1. License</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Snowcan grants you a limited, non-exclusive, non-transferable license to use the App for personal,
                      non-commercial purposes only. This license does not permit distribution, resale, or modification of
                      the App.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">2. User Conduct</h2>
                    <p className="text-gray-300 leading-relaxed">You agree not to:</p>
                    <ul className="text-gray-300 space-y-1 list-disc pl-5">
                      <li>Use the App for any unlawful or prohibited purpose.</li>
                      <li>
                        Modify, decompile, reverse engineer, or otherwise attempt to extract the source code of the App.
                      </li>
                      <li>Exploit bugs or use any automation tools or bots to gain an unfair advantage.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">3. In-App Purchases</h2>
                    <p className="text-gray-300 leading-relaxed">
                      The App may offer virtual items or premium features through in-app purchases. All purchases are
                      final and non-refundable, except as required by law or the policies of the platform (such as Apple
                      App Store or Google Play).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">4. Advertisements</h2>
                    <p className="text-gray-300 leading-relaxed">
                      The App may display third-party advertisements. Snowcan is not responsible for the accuracy or
                      content of such advertisements, nor for any consequences arising from user interactions with them.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">5. Intellectual Property</h2>
                    <p className="text-gray-300 leading-relaxed">
                      All rights, title, and interest in the App and its content, including but not limited to graphics,
                      game design, code, and sounds, are owned by Snowcan or its licensors. You may not reproduce,
                      distribute, or publicly display any content without prior written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">6. Termination</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Snowcan reserves the right to suspend or terminate your access to the App at any time and without
                      notice if you violate these Terms or if the App is discontinued.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">7. Disclaimer of Warranty</h2>
                    <p className="text-gray-300 leading-relaxed">
                      The App is provided "as is" without warranties of any kind, either express or implied. Your use of
                      the App is at your own risk.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">8. Limitation of Liability</h2>
                    <p className="text-gray-300 leading-relaxed">
                      To the fullest extent permitted by law, Snowcan shall not be liable for any indirect, incidental,
                      special, or consequential damages arising out of or in connection with your use of the App.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">9. Governing Law</h2>
                    <p className="text-gray-300 leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea,
                      without regard to its conflict of laws principles. Any disputes arising out of or in connection with
                      these Terms shall be submitted to the exclusive jurisdiction of the Seoul Central District Court.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">10. Contact Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                      If you have any questions about these Terms, please contact us at:
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
