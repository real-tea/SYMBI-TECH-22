import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/symbitech_gradient.png"

export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        {/* <h1 className="navbar-text">
          <Link href="/">
            <Image src={logo}/>
          </Link></h1> */}
          <Image src={ logo } width="100px" height="100px"/>
        <div className="navbar-items">
          <h3 className="navbar-items-text">
            <Link href="#">
              Register now
            </Link>
          </h3>
        </div>
      </div>
    </Fade>
  )
}
