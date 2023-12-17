import Image from "next/image"
import sample from "../../../public/images/bg-3.jpg"

export default function SingleEvent({image = sample, title = "Rooftop Transit", details = ""}){
    return  (
        <div className="flex flex-col justify-center sm:flex-row gap-4 md:gap-8 w-full h-4/5">
            <div className="sm:w-1/2 w-full cursor-pointer h-72 md:h-80">
                {/* <div className="h-96"> */}
                    <Image src={image} alt="This is a property" className="hover:scale-105 hover:duration-300 object-cover h-full w-full" />
                {/* </div> */}
            </div>
            <div className="sm:w-1/2">
                <div className="flex justify-between items-start">
                    <h5 className="uppercase font-extralight text-lg mb-1 md:text-xl lg:text-2xl hover:duration-300 cursor-pointer text-[#8001ff]">{title}</h5>
                    <h5 className="text-[#8001ff] cursor-pointer md:hidden">See more ...</h5>
                </div>
                <p className="lg:w-4/5 leading-tight md:leading-5 uppercase text-sm tracking-wider font-thin">{details}</p>
                <button className="bg-[#8001ff] mt-2 lg:mt-4 py-2 px-2 hover:bg-white hover:text-[#8001ff] text-sm tracking-wider hidden md:block text-white md:font-semibold hover:duration-300 uppercase">See More</button>
            </div>
        </div>
    )
}