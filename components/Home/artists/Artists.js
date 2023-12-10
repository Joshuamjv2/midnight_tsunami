import SingleArtist from "./SingleArtist"
import SectionTitle from "@/components/SectionTitle"
import BackgroundImage from "../../../public/images/nora_bg-1.png"
import creed from "../../../public/images/artists/creed.jpg"
import rn_drops from "../../../public/images/artists/rn_drops.jpg"
import mdnyt from "../../../public/images/artists/mdnyt.jpg"
import imronny from "../../../public/images/artists/imronny.jpg"
import girl1 from "../../../public/images/artists/girl1.jpg"
import guy2 from "../../../public/images/artists/guy2.jpg"

const artists = [
    {image: mdnyt, name: "Itsmidnyt"},
    {image: imronny, name: "IMRonny"},
    {image: creed, name: "creed"},
    {image: rn_drops, name: "r3igndrops"},
    {image: girl1, name: "HersDecker"},
    {image: guy2, name: "youknowme"}
]


export default function Artists(){
    return (
        <div  className="" style={
                {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
        <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-12">
            <div className="lg:hidden">
                <SectionTitle title={"We're a community"} size={"text-xl"} />
            </div>
            <div className="flex w-full gap-8">
                <div className="hidden lg:block">
                    <SectionTitle title={"We're a community"} size={"text-xl"} />
                    <p className="leading-5 md:leading-6 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum, voluptas porro illum voluptate architecto quo. Amet repudiandae laboriosam soluta cumque architecto laborum et veniam temporibus labore xcepturi cumque quas perferendis nesciunt tenetur!
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
                    {artists.map(artist => <SingleArtist key={artist.name} name={artist.name} image={artist.image} />)}
                </div>
            </div>
        </div>
        </div>
    )
}