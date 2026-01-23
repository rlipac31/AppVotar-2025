'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoVote from '../../../../public/votos/vote.svg'
import { montserrat } from '../../../lib/fonts'

// modo escuro
import ThemeToggle from '../ThemeToggle';

const NavMenu = () => {
  return (
    <div className={`flex h-full flex-col p-6 ${montserrat.className}`}>
      


      <div className="mb-10 flex justify-center">

       <Link href="/"> 
        <Image
          src={logoVote}
          width={60}
          height={60}
          alt="logo"
          className="brightness-0 invert"
        />
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        <NavLink href="/" label="Home" />
        <NavLink href="/candidatos" label="Candidatos" />
        <NavLink href="/#resultados" label="Resultados" />
      </nav>

      <div className="mt-auto flex flex-col gap-8">
         <ThemeToggle className="" /> 
          
        {/* <Link 
          href="/login"
          className="flex w-full items-center justify-center rounded-lg bg-french-blue-700 py-3 text-sm font-bold text-white transition-all hover:bg-french-blue-800"
        >
          Login
        </Link> */}
      </div>
    </div>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href} className="rounded-lg px-4 py-3 text-french-blue-100 hover:bg-french-blue-900 transition-colors text-sm">
    {label}
  </Link>
)

export default NavMenu