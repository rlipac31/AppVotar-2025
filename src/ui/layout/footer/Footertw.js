'use client'
import Link from 'next/link'
import React from 'react'
import { montserrat } from '../../../lib/fonts'
import {Github, Linkedin} from 'lucide-react'


const Footertw = () => {
  return (
    <footer className="bg-french-blue-950 text-french-blue-100 border-t border-french-blue-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo o Nombre del Proyecto */}
          <div className={`${montserrat.className} text-xl font-black tracking-tighter text-white mb-4`}>
            VOTO<span className="text-french-blue-500">LIBRE</span> 2026
          </div>

          {/* Enlaces Rápidos Simples */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/candidatos" className="hover:text-white transition-colors">Candidatos</Link>
            <Link href="/#resultados" className="hover:text-white transition-colors">Resultados</Link>
          </nav>

          {/* Redes Sociales con Filtro para que se vean blancas/elegantes */}
          <div className="flex gap-6 mb-8">
            <Link href="https://github.com/rlipac31" target="_blank" className="hover:scale-110 transition-transform brightness-0 invert opacity-80 hover:opacity-100">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/richard-lipa-394140b8/" target="_blank" className=" hover:scale-110 transition-transform brightness-0 invert opacity-80 hover:opacity-100">
              <Linkedin />
            </Link>

          </div>
        </div>

        {/* Línea Divisoria Sutil */}
        <hr className="border-french-blue-900 mb-6" />

        {/* Copyright y Créditos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide opacity-60 text-center">
          <p>© 2026 VOTOLIBRE  Perú. Plataforma Civil Independiente.</p>
          <p className="font-semibold">
            Desarrollado por <span className="text-french-blue-400">Richard Lipa Developer</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footertw