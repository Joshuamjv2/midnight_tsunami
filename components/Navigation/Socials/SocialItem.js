import Link from "next/link"
export default function SocialItem({name, link}){
    return(
        <Link href={link}>
            <li className="hover:text-[#8001ff] text-sm hover:transition-all rotate-90">{name}</li>
        </Link>
    )
}