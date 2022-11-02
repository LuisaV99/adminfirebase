import { useState } from 'react'
import tienda from "../assets/tienda.png";
import {Link} from "react-router-dom";

function Navbar({data}) {
  return (
<nav className="w-full h-auto bg-zinc-900 text-cyan-400 p-2 flex justifi-between">
    <div className='flex justify-evenly shadow-md w-full  top-0 left-0'>
    <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
    <div className='flex justify-evenly shadow-md w-full'>
    <img src={tienda} className="w-9 h-8 "/>
    </div>
  <ul className='h-8 grid-cols-5 content-center md:flex md:items-center md:pb-0 pb-16 absolute md:static bg-zinc-900 
  md:z-auto z-[-1] left-0 w-full md:w-auto'>
    {data.map((data) =>
    <li className='md:ml-8 text-xl md:my-0 my-7'>
    <Link className='mx-3.5 md:ml-8 md:my-0 my-7' to={data.url}>{data.name}</Link></li>
    )}
  </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar