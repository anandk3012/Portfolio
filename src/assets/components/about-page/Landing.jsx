import React from 'react'
import me2 from '../../images/me2.png'

const Landing = () => {
  return (
    <div className='w-10/12 h-auto mx-auto mt-8 flex border-blue-900 rounded-xl bg-white'>
        <div className="text w-2/3  p-6">
            <div className="heading p-3">
                <p className='text-4xl text-cyan-950 font-bold'>Hello! I'm Anand, a part-time Front-end Developer and full-time Student ;)</p>
            </div>

            <div className="content p-3 text-lg font-normal text-black text-wrap">
                <p className='p-2'>I love making User Friendly and attractive Websites.</p>
                <p className='p-2'>I am a student at the Indian Institute of Technology, Hyderabad (fondly known as IITH) majoring in Physics ⚛.I also worked on various freelancing projects for startups and was the Web Development team Coordinator for the Finance and Consulting Club💲 (FCC) at IITH for the year 2023-24.
                </p>
                <p className='p-2'>Through these experiences I learned a lot about Team-work, Project Management, Networking and developed a working style that leans towards flexibility, clarity and collaboration</p>
                <p>I'm currently looking for an Software Developer Internship. If you're willing to give me an opportunity, do check out my Github and Linkedin pages below ⬇</p>
            </div>

            <div className="buttons w-full mt-4 p-3 flex">
                <a className='w-1/3 mr-3 p-2 bg-slate-700 hover:shadow-md hover:shadow-slate-900  text-2xl text-white text-center rounded-sm  ' href="https://github.com/anandk3012" target='_blank'>Github</a>
                <a className='w-1/3 mr-3 p-2 bg-blue-600  hover:shadow-md hover:shadow-blue-900  text-2xl text-white text-center rounded-sm  ' href="https://www.linkedin.com/in/anand-kasyup-40216016b/" target='_blank'>Linkedin</a>
            </div>
        </div>

        <div className="image w-1/3 p-5 ">
            <div className='w-full h-auto p-auto text-black border-blue-800 rounded-xl'>
                <img className=' rounded-2xl' src={me2} width="100%" height="100%" alt="Anand" />
            </div>
        </div>
    </div>
  )
}

export default Landing