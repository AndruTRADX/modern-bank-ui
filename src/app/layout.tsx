import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Modern UI bank',
  description:
    'This is a beautiful application that showcases a modern UI, so I can proudly demonstrate my elegant programming skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
