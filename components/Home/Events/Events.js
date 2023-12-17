import SingleEvent from "./SingleEvent";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import BackgroundImage from "../../../public/images/nora_bg-1.png"
import event1 from "../../../public/images/community6.jpg"
import event2 from "../../../public/images/crowd2.jpg"
import event3 from "../../../public/images/art1.jpg"



const events = [
    {image: event1, title: "Rooftop Transit", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est itaque voluptate vel vero incidunt placeat debitis quasi laborum, cupiditate laudantium quas nihil perferendis impedit, ipsa distinctio natus ea tenetur recusandae. Quasi aut quam sint iure earum nesciunt! Minima harum quisquam nobis!"},
    {image: event2, title: "Masquerade Scene", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est itaque voluptate vel vero incidunt placeat debitis quasi laborum, cupiditate laudantium quas nihil perferendis impedit, ipsa distinctio natus ea tenetur recusandae. Quasi aut quam sint iure earum nesciunt! Minima harum quisquam nobis!"},
    {image: event3, title: "Drum move", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est itaque voluptate vel vero incidunt placeat debitis quasi laborum, cupiditate laudantium quas nihil perferendis impedit, ipsa distinctio natus ea tenetur recusandae. Quasi aut quam sint iure earum nesciunt! Minima harum quisquam nobis!"}
]




export default function Events(){
    return (
        <div className="" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            <div className="mx-auto max-w-screen-2xl">
                <div className="md:ml-8 mx-4 md:mr-4 md:px-24 pb-16 lg:pb-24">

                    <SectionTitle title={"Upcoming Events"} />
                    <div className="flex flex-col gap-16 justify-center items-center text-white">
                        {events.map(event => <SingleEvent key={event.title} title={event.title} image={event.image} details={event.details} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}