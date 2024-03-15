import React from 'react'
import NavBarMenuItem from './NavBarMenuItem'
import Link from 'next/link'
import {Rubik} from 'next/font/google'
import { IoFootball, IoFootballOutline, IoFootballSharp } from 'react-icons/io5';
import { IoIosFootball } from 'react-icons/io';


const rubik = Rubik({ 
    subsets: ["latin"],
    display: 'swap',
 });

const menuItems = [
    {
        path: '/Menu/goleadores',
        title: 'Goleadores'
    }
]

const NavBar = () => {
  return (
 
    <nav className={`flex bg-[#242526] p-2 m-2 rounded  ${rubik.className}`}>
    <Link href={'/'} className='flex items-center text-[#b7f14d]'> 
       <IoFootballOutline size={30}/> <span className='font-medium text-2xl '>Fútbol Colombiano 2024</span>
    </Link>

        <div className='flex flex-1'> </div>
            {
            menuItems.map(item => (
                <NavBarMenuItem key={item.path} {...item}/>
            ))
            }
        
    </nav>

  )
}

export default NavBar
