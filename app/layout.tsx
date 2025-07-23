import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snowcan',
  description: 'Do you wanna build a snowcan?',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
