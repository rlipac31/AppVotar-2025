'use client'

import ThemeToggle from '../ThemeToggle';

////
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../../../public/votos/vote.svg'
import Image from 'next/image'
import Link from 'next/link'
import { montserrat } from '../../../lib/fonts'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Resultado', href: '#resultados', current: false },
  { name: 'Candidatos', href: '/candidatos', current: false },
  { name: 'Cómo funciona', href: '#como-funciona', current: false },
  //{ name: 'About', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderTw() {
  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full border-b border-white/10 bg-french-blue-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Botón Menú Móvil (Izquierda) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 
            text-french-blue-200 hover:bg-french-blue-800 hover:text-white focus:outline-none focus:ring-2 
            focus:ring-french-blue-500 ">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="block size-7 group-data-open:hidden transition-all duration-700" />
              <XMarkIcon aria-hidden="true" className="hidden size-7 group-data-open:block transition-all duration-700" />
            </DisclosureButton>
          </div>

          {/* Logo y Nombre (Centrado en móvil, Izquierda en PC) */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex shrink-0 items-center gap-3 transition-transform hover:scale-105">
              <Image
                alt="Logo AppVotar"
                src={logo}
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className={`${montserrat.className} text-xl font-black tracking-tighter text-white`}>
                VOTO<span className="text-french-blue-500">LIBRE</span>
              </span>
            </Link>

            {/* Navegación Desktop */}
            <div className="hidden sm:ml-10 sm:flex sm:items-center">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current 
                        ? 'bg-french-blue-600 text-white shadow-lg shadow-french-blue-600/20' 
                        : 'text-french-blue-100 hover:bg-white/10 hover:text-white',
                      'rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Botón Accion Rápida (Opcional - Login o Votar) */}
          <div className="hidden sm:flex items-center mr-4">
           

             <Link 
              href="/candidatos" 
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-black uppercase tracking-widest text-french-blue-950 transition-all hover:bg-french-blue-50 active:scale-95"
             >
              Votar ya
             </Link>
          </div>
              <ThemeToggle className="mr-0" /> 

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <DisclosurePanel className="sm:hidden bg-french-blue-950 border-b border-french-blue-800">
        <div className="space-y-2 px-4 pt-2 pb-6">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-french-blue-600 text-white' : 'text-french-blue-200 hover:bg-french-blue-800 hover:text-white',
                'block rounded-xl px-4 py-3 text-base font-bold'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}