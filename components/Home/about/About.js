import BackgroundImage from "../../../public/images/nora_bg-1.png"
import SectionTitle from "@/components/SectionTitle"
import mdnyt from "../../../public/images/artists/mdnyt.jpg"
import imronny from "../../../public/images/artists/imronny.jpg"
import girl1 from "../../../public/images/artists/girl1.jpg"
import guy2 from "../../../public/images/artists/guy2.jpg"
import rn_drops from "../../../public/images/artists/rn_drops.jpg"
import AboutNav from "./AboutNav"


export default function About(){
    return (
        <div className="" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-24">
                <div className="flex flex-col w-full justify-between">
                    <div className="lg:w-1/2">
                        <SectionTitle title={"About Us"} />
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum numquam sequi maxime, id officiis totam pariatur culpa enim rerum modi omnis deleniti ipsa laudantium aspernatur voluptatem voluptatibus repellendus aut accusamus blanditiis odit dolorem officia placeat quasi. Nulla iusto officiis maiores necessitatibus, ipsum sit, magni consectetur suscipit cum repellendus iure numquam vel commodi. Reprehenderit exercitationem, debitis iure id placeat asperiores sunt natus, sint, amet ipsum odio perferendis est adipisci velit qui libero aperiam autem! Officiis porro pariatur sequi odit velit eius, dolor voluptatum! Minus beatae iusto earum? Voluptates cumque repellendus natus voluptate quas</p>
                    </div>
                    <div className="mt-12">
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
        </div>
    )
}