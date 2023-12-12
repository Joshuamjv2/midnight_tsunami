import Image from "next/image"
export default function SubBlog({title, image, article = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}){
    return(
        <div className="flex h-32 gap-2 hover:scale-105 hover:duration-300">
            <Image src={image} alt={title} className="w-1/2" />
            <div>
                <h3 className="uppercase text-sm font-bold">Title</h3>
                <article className="leading-tight">{article}</article>
            </div>
        </div>
    )
}