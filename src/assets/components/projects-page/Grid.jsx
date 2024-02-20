import React from 'react'
import Card from './Card'
import deskpe from '../../images/deskpe.jpg'
import fcc from  '../../images/fcc.jpg'

const Grid = () => {
    return (
        <div className='h-auto w-5/6 mx-auto flex flex-wrap justify-evenly'>
            <a href="https://anandk3012.github.io/DeskPe/" className='w-1/3 h-auto' target='_blank'>
                <Card img={deskpe} title="Desk Pe Website" text="A static website that I made for a start up fair using HTML,CSS and JS primarily for web layout and GSAP scroll animations " />
            </a>
            <a href="https://fcc-did.pages.dev/" className='w-1/3 h-auto' target='_blank'>
                <Card img={fcc} title="FCC IITH" text="A static website that I made for FCC IITH using HTML,CSS and JS primarily for web layout, Bootstrap Framework for styling and GSAP scroll animations" />
            </a>
        </div>)
}

export default Grid