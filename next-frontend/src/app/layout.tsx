import type { Metadata } from "next";
import "./globals.css";

import { Rubik } from 'next/font/google'
import { Chivo } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})
const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export const metadata: Metadata = {
  title: "StreamBlend",
  description: "Elevating Video Calls with Seamless, Efficient Stream Management and High Quality Communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable + chivo.variable}>
        {children}
      </body>
    </html>
  )
}

