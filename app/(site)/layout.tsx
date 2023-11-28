import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakesh Baruah',
  description: 'Created with Next and Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className={`max-w-3xl mx-auto py-10 ${inter.className}`}>
        <header className="flex items-center justify-between"><Link className="text-lg font-bold" href="/">Rakesh</Link>
          <div className="flex items-center gap-3">
            {pages.map((page) => (
              <Link className="hover:underline" key={page._id} href={`/page/${page.slug}`}>{page.title}</Link>
            ))}
          </div>
        </header>
        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
