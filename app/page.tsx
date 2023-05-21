'use client'
import Head from 'next/head'
import React from 'react'
import Navbar from '@/app/Navbar'
import Home from '../app/Home'

function page() {
  return (
    <div>
      <Head><title>Code.gg</title></Head>
      <Home/>
      
    </div>
  )
}

export default page