import SocialItem from "./SocialItem";

export default function Socials(){
    return(
        <div className="min-h-screen absolute">
            <div className="flex h-screen items-center fixed">
                <ul className="list-none md:flex gap-24 hidden flex-col items-center cursor-pointer h-full justify-center ">
                    <SocialItem name={"Facebook"} link={"https://facebook.com"} />
                    <SocialItem name={"E-mail"} link={"https://facebook.com"} />
                    <SocialItem name={"Instagram"} link={"https://facebook.com"} />
                    <SocialItem name={"Spotify"} link={"https://facebook.com"} />
                    {/* <SocialItem name={"Soundcloud"} link={"https://facebook.com"} /> */}
                </ul>
            </div>
        </div>
    );
};