import Image from "next/image"
import BackgroundImage from "../../../public/images/nora_bg-1.png"
import event1 from "../../../public/images/community6.jpg"
import SectionTitle from "@/components/SectionTitle"
import SubBlog from "./SubBlog"

export default function Blog(){
    return (
        <div className="" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>

            <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-24">
                <SectionTitle title={"Featured Blog"} size="text-3xl" />
                <div className="flex">
                    {/* main blog */}
                    <div className=" w-4/6 flex gap-6 h-96">
                        {/* <div className="w-full"> */}
                            <Image src={event1} className="object-cover" alt="Event 1 Probably" />
                        {/* </div> */}
                        <div className="">
                            <div>
                                <h4 className="mb-2 text-2xl uppercase">First Blog Title</h4>
                            </div>
                            <article className="uppercase leading-tight text-clip overflow-hidden">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odit magnam voluptas rerum officiis inventore? Asperiores aliquam nisi quas laborum maiores nobis odit, nostrum quaerat repellendus consectetur cupiditate tempore! Maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in! </article>
                        </div>
                    </div>

                    {/* other blogs */}
                    <div className="w-2/6">
                        <ul className="flex gap-4 flex-col">
                            <SubBlog image={event1} title={"Testing title"} />
                            <SubBlog image={event1} title={"Testing title"} />
                            <SubBlog image={event1} title={"Testing title"} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}