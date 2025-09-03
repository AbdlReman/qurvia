import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qurvia - Quran International Academy',
  description: 'Learn Quran and Islamic studies with expert teachers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/923709177700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center hover:opacity-90"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width="56"
              height="56"
              className="block"
            />
          </a>
        </Providers>
      </body>
    </html>
  )
}
