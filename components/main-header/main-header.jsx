import Link from 'next/link'
import React from 'react'
import Imglogo from '@/assets/logo.png'
import cssClasses from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-bg'
import NavLink from './navlink'
const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
    <header className={cssClasses.header}>
      <Link href='/' className={cssClasses.logo}>
        <Image src={Imglogo} alt="Logo Image" priority/>
        FooDWheelS
      </Link>
      <nav className={cssClasses.nav}>
        <ul>
            <li>
                <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
                <NavLink href='/community'>Community</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default MainHeader
