import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';
import S1 from "../../public/sponsor/bfin.jpg";
import S2 from "../../public/sponsor/byte.jpg";
import S3 from "../../public/sponsor/CL.jpeg";
import S4 from "../../public/sponsor/ieee.png";
import S5 from "../../public/sponsor/len.jpg";
import S6 from "../../public/sponsor/RoyalEnfield.png";
import S7 from '../../public/sponsor/phrotonsLogo.jpeg';

import { Row, Col, Grid, Button, Spacer, Link } from '@nextui-org/react';

// import { SiJavascript } from 'react-icons/si'

// import rlogowhite from '../../public/images/react-logo-white.png'
// import nextlogo from '../../public/images/next-logo.png'
import Collage from '../../public/images/collage_about.png';

export default function About() {


    return (
        <div className="sponsors" id="sponsors">
            <h1 className="sponsors-header">Sponsors</h1>
            <div className='sponsors-logo'>
                <div className='main-sponsors'>
                    <div className='main-logo-container'>
                        <p className='sponsor-footer'>Title Sponsor</p>
                        <Image src={S1} height='300px' width={'300px'} />
                    </div>
                    <div className='main-logo-container'>
                        <p className='sponsor-footer'>Partnered By</p>
                        <Image src={S2} height='300px' width={'300px'} />
                    </div>
                </div>
                <div className='other-sponsors'>
                    <Image src={S3} width='400px' height={'300px'} />
                    <Image src={S4} width='400px' height={'300px'} />
                    <Image src={S5} width='400px' height={'300px'} />
                    <Image src={S6} width='400px' height={'300px'} />
                    <Image src={S7} width='400px' height={'300px'} />
                </div>
            </div>
        </div>
    )
}
