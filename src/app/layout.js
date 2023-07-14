'use client'

import Debugger from '@/components/Debugger/Debugger'
import { GlobalStyles } from '@/styles/global'
import { Main } from '@/styles/styles'
import { onAuthStateChanged } from 'firebase/auth'
import { atom, useAtom } from 'jotai'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { auth } from '../../firebase/firebase'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nomadic',
  description: 'Generated by create next app',
}

export const webContext = atom({})

export default function RootLayout({ children }) {

  const [context, setContext] = useAtom(webContext);

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        setContext({
          ...context,
          isLoggedin: true
        })
      } else {
        setContext({
          ...context,
          isLoggedin: false
        })
      }
    }) 
  }, [])

  return (
    <html lang="en">
      <head> 
        <link rel="icon" type="image/x-icon" href="images/favicon.ico"/>
        <link rel="apple-touch-icon" size="57x57" href="images/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" size="60x60" href="images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" size="72x72" href="images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" size="76x76" href="images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" size="114x114" href="images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" size="120x120" href="images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" size="144x144" href="images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" size="152x152" href="images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" size="180x180" href="images/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" size="192x192" href="images/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" size="32x32" href="images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" size="96x96" href="images/favicon-96x96.png"/>
        <link rel="icon" type="image/png" size="16x16" href="images/favicon-16x16.png"/>

        <GlobalStyles />
      </head>
      <body className={inter.className}>
        {
          process.env.NEXT_PUBLIC_DEBUGGER && <Debugger />
        }

        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
