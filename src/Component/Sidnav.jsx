import React from "react";
import { Link } from "react-router-dom";


function Sidnav() {
  return (
    <div className="flex">
      <div
        className={` fixed top-0 h-full w-60 bg-indigo-700 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="text-xl font-bold mb-8 text-center bg-indigo-600 py-4 shadow-lg">
          Binus
        </div>

        <nav className="space-y-9 text-center">
          <Link
            to="/M1"
            className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl text-center"
          >
            Menu 1
          </Link>
          <Link
            to="/M2"
            className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl text-center"
          >
            Menu 2
          </Link>
          <Link
            to="/M3"
            className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl text-center"
          >
            Menu 3
          </Link>
          <Link
            to="/P"
            className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl mt-110 text-center"
          >
            Profile
          </Link>
        </nav>

        <div className=""></div>
      </div>
    </div>
  );
}

export default Sidnav;
