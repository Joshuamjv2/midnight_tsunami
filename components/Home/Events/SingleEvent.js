import Image from "next/image"
import sample from "../../../public/images/bg-3.jpg"

export default function SingleEvent({image = sample, title = "Rooftop Transit", details = ""}){
    return  (
        <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-16 w-full h-4/5 items-end">
            <div className="md:w-1/2 w-full cursor-pointer">
                <Image src={image} alt="This is a property" className="hover:scale-105 hover:duration-300 object-cover h-full w-full border-2 rounded-xl" />
            </div>
            <div className="md:w-1/2">
                <div className="flex justify-between items-start">
                    <h5 className="font-semibold md:font-bold text-lg mb-2 hover:text-[#8001ff] md:text-3xl hover:duration-300 cursor-pointer text-[#8001ff]">{title}</h5>
                    <h5 className="text-[#8001ff] cursor-pointer md:hidden">See more ...</h5>
                </div>
                <p className="lg:w-4/5 leading-5 md:leading-6">{details}</p>
                <button className="bg-[#8001ff] mt-4 py-1 px-2 text-md hidden md:block text-white md:font-semibold hover:duration-300">See More</button>
            </div>
        </div>
    )
}