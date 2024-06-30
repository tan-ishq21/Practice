"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classes from "./navlink.module.css"

const NavLink = ({href, children}) => {
    const path = usePathname();
  return (
      <Link href={href} className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link }>
      {children}
      </Link>
  )
}

export default NavLink
