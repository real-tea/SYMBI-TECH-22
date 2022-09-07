import { Container, Item } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';

import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';

import caffiene from '../../public/images/caffiene.png'
import next from '../../public/logos/next-logo.png'
import nextui from '../../public/logos/nextui.svg'

import { FiTwitter, FiGithub, FiLinkedin , FiInstagram } from 'react-icons/fi'
import { SiPolywork } from 'react-icons/si'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="socials">
                    {/* <a href="https://twitter.com/"><FiTwitter className="social-icon" /></a> */}
                    {/* <a href="https://github.com/real-tea"><FiGithub className="social-icon" /></a> */}
                    <a href="https://www.linkedin.com/company/symbitech-sit/"><FiLinkedin className="social-icon" /></a>
                    <a href="https://www.instagram.com/symbitech/"><FiInstagram className="social-icon" /></a>
                </div>

                <div className="credits">
                    <div className="made-with">
                        Made with 🤍 and <Spacer x={1} />
                        <Tooltip className="tooltip" content={'Caffiene!'} rounded hideArrow>
                            <Image src={caffiene} width="80px" height="80px" />
                        </Tooltip>
                    </div>

                    <Spacer x={3} />

                    <div className="hr"></div>

                    <Spacer x={3} />

                    <div className="powered">
                        <div>Powered By</div>
                        {/* <div className="next-logos">
                            <Image src={next} width="125px" height="70px" /><Spacer x={1} /> and <Spacer x={1} /><Image src={nextui} width="125px" height="60px" />
                        </div> */}
                    </div>
                </div>
            </Container>

        </div>
    )
}
