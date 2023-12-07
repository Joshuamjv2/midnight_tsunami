import SingleEvent from "./SingleEvent";
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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
            <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-12">

                <h2 className="mb-4 font-bold text-2xl uppercase">Upcoming Events</h2>
                <div className="flex flex-col gap-16 justify-center items-center"> 
                    {events.map(event => <SingleEvent key={event.title} title={event.title} image={event.image} details={event.details} />)}
                </div>
            </div>
        </div>
    )
}