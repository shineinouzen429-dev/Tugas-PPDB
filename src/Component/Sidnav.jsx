import React from 'react'

function Sidnav() {
  return (
      <div className="flex">
            <div className={` fixed top-0 h-full w-60 bg-gray-800 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>

                <div className="text-xl font-bold mb-8 text-center bg-gray-700 py-4 shadow-lg">Binus</div>

                <nav classname="space-y-3 text-center">
                    <a href="/M1" className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl">MENU 1</a>
                    <a href="/M2" className="block py-2 px-3 rounded hover:bg-blue-600 text-2xl">MENU 2</a>
                    <a href="/M3" className="block py-2 px-3 rounded hover:bg-blue-600 text-2xl">MENU 3</a>
                </nav>

                <div className=""></div>
            </div>
    </div>
  )
}

export default Sidnav