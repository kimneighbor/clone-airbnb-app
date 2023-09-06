import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb kim',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
