"use client"
import Link from "next/link";
import { useState } from "react";

export default function SingleNav({name, link = null, more = []}){
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked)
    return(
        <li onClick={handleClick} className={`list-none ${!more.length > 0 && "hover:bg-[#8001ff]"} hover:duration-300 cursor-pointer py-1 px-2`}>
            {!more.length > 0 ? <Link href={link ?? ''}>{name}</Link>: name}
            {(more.length > 0 && clicked) &&
                <div className="absolute bg-black w-full right-4 mt-1 left-2 bg-opacity-20 pr-8">
                    <ul className="py-4 px-4 grid grid-cols-3 gap-4 justify-between">
                        {
                            more.map(item =>
                            <Link key={item.name} href={item.link}>
                                <li className="cursor-pointer hover:bg-[#8001ff] hover:bg-opacity-50 py-1 px-2 text-center">{item.name}</li>
                            </Link>)
                        }
                    </ul>
                </div>
            }
        </li>
    )
}