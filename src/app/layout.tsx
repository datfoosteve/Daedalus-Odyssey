import Navbar from "@/components/Navbar";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daedalus',
  description: 'Abord the Daedalus:Steves Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
        </main>
        </body>
    </html>
    </ClerkProvider>
  )
}
