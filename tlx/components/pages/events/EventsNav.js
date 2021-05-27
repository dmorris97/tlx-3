import React from 'react'
import Link from 'next/link'
import * as Scroll from 'react-scroll';
import EButton from './EButton';
let ScrollLink = Scroll.Link;

const EventsNav = () => {
   
  return (
    <nav className='EN-container'>
        <ul className='EN-layout'>
            <li className='EN-item'>
                <Link href='/rules-and-regs'>
                    <EButton className='EN-color1'>
                        FAQ
                    </EButton>
                </Link>
            </li>
            <li className='EN-item'>
                <ScrollLink className="EN-link" to="E-about" spy={true} smooth={true} duration={500}>
                    <EButton className='EN-color1'>
                        ABOUT
                    </EButton>
                </ScrollLink>
            </li>
            <li className='EN-item'>
                <ScrollLink className="EN-link" to="E-map" spy={true} smooth={true} duration={500}>
                    <EButton className='EN-color1'>
                        MAP
                    </EButton>
                </ScrollLink>
            </li>
            <li className='EN-item'>
                <a className="EN-link" href='https://www.eventliveus.com/purchase/event/2226102' target='_blank'>
                    <EButton className='EN-color2'>
                        GET TICKETS
                    </EButton>
                </a>
            </li>
        </ul>
           
    </nav>
  )
}




export default EventsNav;