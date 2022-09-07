import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/symbitech_gradient.png"
import SIT_logo from "../../public/images/sit_full_whitefont.png";

export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        {/* <h1 className="navbar-text">
          <Link href="/">
            <Image src={logo}/>
          </Link></h1> */}
        <Image src={logo} width="170px" height="170px" alt='Symbi Tech Logo' />
        <Image src={SIT_logo} width="700px" height="150px" alt='Symbiosis Logo' />
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
