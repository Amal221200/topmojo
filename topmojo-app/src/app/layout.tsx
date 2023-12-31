import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Theme from '@/providers/Theme'
import { Footer, Header } from '@/components'
import ProgressProvider from '@/providers/ProgressProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TOPMOJO',
  description: 'Here we can talk about pop culture',
  keywords: ["superheroes", "anime", "movies", "tv shows", "music", "fiction", "life"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-200`}>
        <Theme>
          <ProgressProvider>
            <Header />
            {children}
            <Footer />
          </ProgressProvider>
        </Theme>
      </body>
    </html>
  )
}
