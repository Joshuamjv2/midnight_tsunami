import Image from "next/image"
export default function SubBlog({title, image, article = "Lorem ipsum dolor sit, amet consectetur sit, amet consectetur"}){
    return(
        <div className="flex flex-col lg:flex-row lg:h-28 gap-2 hover:scale-105 hover:duration-300 cursor-pointer relative md:static">
            <Image src={image} alt={title} className="lg:w-1/2 object-cover" />
            <div>
                <div className="">
                    <h3 className="uppercase text-xs font-bold text-[#8001ff]">Title of the blog longer</h3>
                    <p className="py-1 text-xs uppercase">27th Sep, 2023</p>
                </div>
                <article className="leading-tight uppercase text-sm hidden tracking-wider md:block text-clip font-thin">{article}</article>
            </div>
        </div>
    )
}