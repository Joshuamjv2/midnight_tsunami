"use client"
import Image from "next/image"
import nana from "../../../public/images/artists/creed.jpg"
import { useState } from "react"

export default function SingleArtist({image=nana, name="Creed"}){
    const [hovered, setHovered] = useState(false)
    return (
        <div className="relative">
            <div className="cursor-pointer" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                <div className="h-full">
                    <Image src={image} alt={name} className={`h-auto w-full object-fill`}/>
                </div>
                <div className={`absolute top-0 bottom-0 h-full transition-all text-center w-full opacity-0 hover:opacity-100 hover:duration-500 ${hovered ? "cursor-pointer" : "hidden"}`}>
                    <div className="flex flex-col bg-[#000] bg-opacity-70 justify-center items-center h-full">
                        <h5 className="uppercase text-white font-bold text-xl sm:text-3xl">{name}</h5>
                        <button className="text-white hover:text-[#8001ff] py-1 px-4 text-md font-semibold bg-[#8001ff] hover:bg-[#fff] mt-2 hover:duration-300">Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
