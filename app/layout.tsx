import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toxic Trace - AI-Powered Wastewater Drug Detection',
  description: 'Empowering public health and forensic science through sustainable, privacy-respecting innovation with AI-powered wastewater drug detection technology.',
  keywords: 'wastewater drug detection, AI forensics, environmental monitoring, ToxiSew, forensic science',
  authors: [{ name: 'Toxic Trace' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 