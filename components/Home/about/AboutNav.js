import Image from "next/image";
import Link from "next/link";

export default function AboutNav({image, name, link}){
    return (
        <Link href={link}>
            <div className="relative hover:scale-105 duration-300 w-64 h-80 cursor-pointer">
                <div className="absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center hover:animate-pulse">
                    <p className="text-center font-bold text-white">{name}</p>
                </div>
                <Image src={image} alt="Image of about us section" className="h-full object-cover" />
            </div>
        </Link>
    )
}