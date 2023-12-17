import Image from "next/image"
import BackgroundImage from "../../../public/images/nora_bg-1.png"
import event1 from "../../../public/images/community6.jpg"
import SectionTitle from "@/components/SectionTitle"
import SubBlog from "./SubBlog"

export default function Blog(){
    return (
        <div className="" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            
            <div className="mx-auto max-w-screen-2xl">
                <div className="md:ml-8 mx-4 md:mr-4 md:px-24 pb-24">
                    <SectionTitle title={"Featured Blog"} size="text-xl" />
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* main blog */}
                        <div className="lg:w-4/6 flex flex-col sm:flex-row gap-4">
                            <div className="w-full h-96">
                                <Image src={event1} className="object-cover h-96" alt="Event 1 Probably" />
                            </div>
                            <div className="sm:w-3/6">
                                <div>
                                    <h4 className="mb-1 text-lg lg:text-xl font-bold uppercase cursor-pointer text-[#8001ff]">First Blog Title</h4>
                                </div>
                                <article className="uppercase leading-tight text-clip overflow-hidden text-sm text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odit magnam voluptas rerum officiis inventore? Asperiores aliquam nisi quas laborum maiores nobis odit,  </article>
                            </div>
                        </div>

                        {/* other blogs */}
                        <div className="lg:w-2/6">
                            <ul className="lg:flex grid grid-cols-3 gap-4 lg:flex-col justify-between items-center">
                                <SubBlog image={event1} title={"Testing title"} />
                                <SubBlog image={event1} title={"Testing title"} />
                                <SubBlog image={event1} title={"Testing title"} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}