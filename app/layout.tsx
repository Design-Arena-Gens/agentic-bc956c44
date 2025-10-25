import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Showcase',
  description: 'Interactive showcase of beautiful web designs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
