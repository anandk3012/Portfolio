import React from 'react'
import f1 from '../assets/images/ferrari.jpg'
const Projects = () => {
  return (
    <div className='h-auto w-5/6 mx-auto flex flex-wrap justify-evenly'>

      <div className="project-card w-1/3 p-2 my-6 mx-4 flex flex-col border-2 rounded-xl border-white">
        <img src={f1} alt="img" width="100%" height="30%" />
        <hr />
        <p className="card-title w-full h-auto p-3 text-xl font-bold">Desk Pe website</p>
        <hr />
        <p className="card-text w-full h-auto p-3 text-lg font-normal">A static website that I made for a start up fair using HTML,CSS and JS primarily for web layout and GSAP scroll animations </p>
      </div>

      <div className="project-card w-1/3 p-2 my-6 mx-4 flex flex-col border-2 rounded-xl border-white">
        <img src={f1} alt="img" width="100%" height="30%" />
        <hr />
        <p className="card-title w-full h-auto p-3 text-xl font-bold">FCC IITH</p>
        <hr />
        <p className="card-text w-full h-auto p-3 text-lg font-normal">A static website that I made for FCC IITH using HTML,CSS and JS primarily for web layout, Bootstrap Framework for styling and GSAP scroll animations </p>
      </div>

      <div className="project-card w-1/3 p-2 my-6 mx-4 flex flex-col border-2 rounded-xl border-white">
        <img src={f1} alt="img" width="100%" height="30%" />
        <hr />
        <p className="card-title w-full h-auto p-3 text-xl font-bold">Desk Pe website</p>
        <hr />
        <p className="card-text w-full h-auto p-3 text-lg font-normal">A static website that I made for a start up fair using HTML,CSS and JS primarily for web layout and GSAP scroll animations </p>
      </div>

      <div className="project-card w-1/3 p-2 my-6 mx-4 flex flex-col border-2 rounded-xl border-white">
        <img src={f1} alt="img" width="100%" height="30%" />
        <hr />
        <p className="card-title w-full h-auto p-3 text-xl font-bold">Desk Pe website</p>
        <hr />
        <p className="card-text w-full h-auto p-3 text-lg font-normal">A static website that I made for a start up fair using HTML,CSS and JS primarily for web layout and GSAP scroll animations </p>
      </div>

    </div>
  )
}

export default Projects