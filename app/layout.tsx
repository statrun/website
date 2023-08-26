import { type LayoutProps } from '@/.next/types/app/layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stat',
  description: '',
}

type Props = {} & LayoutProps

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} dark h-full`}>{children}</body>
    </html>
  )
}
