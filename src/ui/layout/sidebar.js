
'use client'
import NavMenu from './menu/NavMenu'

const Sidebar = () => {
  return (
    // Agregamos z-50 para que siempre esté encima y w-64 (256px)////
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-50 flex-col border-r border-french-blue-800 bg-french-blue-950 lg:flex">
      <NavMenu />
    </aside>
  )
}

export default Sidebar