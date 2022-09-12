import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/images/symbitech_white.png"
import SIT_logo from "../../public/images/sit_full_whitefont.png";

export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        {/* <h1 className="navbar-text">
          <Link href="/">
            <Image src={logo}/>
          </Link></h1> */}
        <Link href="/">
          <Image src={logo} width="120px" height="80px" alt='Symbi Tech Logo' />
        </Link>

        <Link href="https://www.sitpune.edu.in/">
          <Image src={SIT_logo} width='600px' height='100px' alt='Symbiosis Logo' />
        </Link>
        <div className="nav bar-items">
          <h3 className="navbar-items-text">
            <Link href="/register">
              Register Now
            </Link>
          </h3>
        </div>
      </div>
    </Fade>
  )
}
