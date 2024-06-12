import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DarkModeButton from "./components/DarkModeButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lightstation Blog",
  description: "A simple blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#1F1F1F]`}>
        {children}
        <DarkModeButton />
      </body>
    </html>
  )
}
