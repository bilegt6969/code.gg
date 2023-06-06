'use client'
import './globals.css'
import Navbar from './Navbar'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  

  return (
    <html lang="en">
      <body className='bg-black text-white overscroll-none'>
        <Navbar/>

        <main className='max-w-screen-xl mx-auto'>{children}</main>
        </body>
    </html>
  )
}




