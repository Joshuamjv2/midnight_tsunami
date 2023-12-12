import Image from "next/image"
import event1 from "../../../public/images/community6.jpg"
import event2 from "../../../public/images/crowd2.jpg"
import event3 from "../../../public/images/art1.jpg"
import AboutNav from "./AboutNav"
import BackgroundImage from "../../../public/images/nora_bg-1.png"

import mdnyt from "../../../public/images/artists/mdnyt.jpg"
import imronny from "../../../public/images/artists/imronny.jpg"
import girl1 from "../../../public/images/artists/girl1.jpg"
import guy2 from "../../../public/images/artists/guy2.jpg"
import rn_drops from "../../../public/images/artists/rn_drops.jpg"



export default function About2(){
    return(
        <div className="bg-white" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-24">
                <div className="flex justify-between h-96 gap-4">
                    <div className="w-2/6">
                        <p className="text-6xl">We are having a phrase here today!</p>
                    </div>
                    {/* <div> */}
                        <Image src={event1} alt="event image" className="object-cover" />
                    {/* </div> */}
                </div>
                <div className=" flex justify-center">
                    <p className="w-1/2 py-8 text-lg font-serif italic">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptas, mollitia beatae expedita optio provident. Labore quas commodi neque placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quibusdam earum facilis vitae, eligendi optio nemo nulla nihil distinctio quaerat architecto, praesentium pariatur ipsa id debitis. Eum, asperiores mollitia. Quis minima sequi soluta natus debitis rerum dolorem, cupiditate voluptatum dolor, cumque quaerat modi, officia magni reprehenderit vitae optio fugit ipsum.
                    </p></div>

                <div className="flex justify-between h-96 k gap-4">
                    <Image src={event2} className="object-cover" alt="event image" />
                    <div className="w-2/6">
                        <p className="text-6xl">We are having a phrase here today!</p>
                    </div>
                </div>

                <div className="mt-12 px-12 hidden">
                            <div className="w-full flex gap-4 justify-between">
                                <AboutNav image={guy2} name={"Blog"} link={"https://google.com"} />
                                <AboutNav image={girl1} name={"Events"} link={"https://google.com"} />
                                <AboutNav image={imronny} name={"Gallery"} link={"https://google.com"} />
                                <AboutNav image={mdnyt} name={"Booking"} link={"https://google.com"} />
                                {/* <AboutNav image={rn_drops} name={"Shop"} link={"https://google.com"} />
                                <AboutNav image={girl1} name={"Events"} link={"https://google.com"} />
                                <AboutNav image={guy2} name={"Blog"} link={"https://google.com"} /> */}
                            </div>
                        </div>
            </div>
        </div>
    )
}