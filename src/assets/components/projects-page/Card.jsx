import React from 'react'

const Card = (props) => {
    return (
        <div className="project-card w-full h-full p-2 flex flex-col justify-evenly bg-white border-2 rounded-xl border-white hover:-translate-y-3 hover:cursor-pointer">
            <img src={props.img} alt="img" width="100%" height="50%" />
            <hr />
            <p className="card-title w-full h-auto p-3 text-3xl  text-cyan-950 font-bold ">{props.title}</p>
            <hr />
            <p className="card-text w-full h-auto p-3 text-lg text-black font-normal">{props.text}</p>
        </div>)
}

export default Card