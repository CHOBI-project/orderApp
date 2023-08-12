import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '注文画面',
  description: '夏休みの自主課題（プログラミング始めて約１年目）',
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
          </Providers>
        </body>
    </html>
  )
}
