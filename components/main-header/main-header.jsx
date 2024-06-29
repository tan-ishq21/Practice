import Link from 'next/link'
import React from 'react'
import Imglogo from '@/assets/logo.png'
import cssClasses from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-bg'
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
                <Link href='/meals'> Brows Meals </Link>
            </li>
            <li>
                <Link href='/community'> Community </Link>
            </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default MainHeader
