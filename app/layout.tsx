import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rakesh Bodapatla',
  description: 'Created with v0',
  icons: {
    icon: '/favicon.ico', // Path relative to the public folder
  },
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
