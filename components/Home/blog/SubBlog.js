import Image from "next/image"
export default function SubBlog({title, image, article = "Lorem ipsum dolor sit, amet consectetur sit, amet consectetur"}){
    return(
        <div className="flex flex-col lg:flex-row lg:h-28 gap-2 hover:scale-105 hover:duration-300 cursor-pointer">
            <Image src={image} alt={title} className="lg:w-1/2 object-cover" />
            <div>
                <h3 className="uppercase text-xs font-bold mb-1 text-[#8001ff]">Title of the blog</h3>
                <article className="leading-tight uppercase text-sm hidden md:block text-clip text-gray-300">{article}</article>
            </div>
        </div>
    )
}