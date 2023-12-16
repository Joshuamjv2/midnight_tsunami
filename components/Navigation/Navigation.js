import SingleNav from "./SingleNav";
import logo from "../../public/images/logo/logo3.png"
import logo2 from "../../public/images/logo/logo2.png"
import Image from "next/image";

// const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Navigation(){
    return(
        <div className="z-40 absolute opacity_anime">
            <div className="text-white fixed w-full py-2">
                <div className={`flex justify-between items-center px-4 relative py-2`}>
                    <div className="flex gap-2 items-center">
                        <div className="cursor-pointer text-xl font-bold">
                            <Image src={logo2} width={100} alt="logo2" className="h-auto" />
                        </div>
                        <div className="cursor-pointer text-xl font-bold hidden">
                            <Image src={logo} width={180} alt="logo" className="h-auto" />
                        </div>
                    </div>
                    <div className="md:flex sm:gap-4 gap:8 lg:gap-12 items-center relative hidden uppercase text-sm">
                        <SingleNav name={"Home"} link={"/"} />
                        <SingleNav name={"Community"} link={"/"} />
                        <SingleNav name={"About"} link={"/blog"} />
                        <SingleNav name={"Gallery"} link={"/artists"} />
                        <SingleNav name={"Contact Us"} link={"/artists"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
