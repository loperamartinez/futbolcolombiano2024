import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props{
    path: string;
    title: string;
}

const NavBarMenuItem = ({path,title}: Props) => {

    const currentPath = usePathname;

  return (
    <Link href={path} className='mr-2 font-normal flex items-center text-[#242526]'>
        {title}
    </Link>

  )
}

export default NavBarMenuItem
