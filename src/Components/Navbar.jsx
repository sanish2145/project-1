import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white w-full z-1">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
    <a href="#" className="text-2xl font-bold">Sanish.</a>
     
        <a href="#" className=" hover:bg-orange-500 hover:p-5 hover:text-gray-500 duration-200 " ><FaHome />Blog</a>
        <a href="#" className="hover:dark:md:hover:bg-fuchsia-600 ..."><FaBlog />Contact</a>
        <a href="#" className="hover:dark:md:hover:bg-fuchsia-600 ..."><GrGallery />Gallery</a>
        <a href="#" className="hover:dark:md:hover:bg-fuchsia-600 ..."><IoMdContact />About</a>
        
      </div>
    </nav>
  )
}

export default Navbar

