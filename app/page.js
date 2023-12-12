import BackgroundImage from "./../public/images/tsunami2-113.jpg"
import { Lexend_Zetta } from 'next/font/google';
import Image from "next/image";
import Events from "@/components/Home/Events/Events";
import Artists from "@/components/Home/artists/Artists";
import Clients from "@/components/Home/clients/Clients";
import Header from "@/components/Home/Header";
import About from "@/components/Home/about/About";
import About2 from "@/components/Home/about/About2";
import Blog from "@/components/Home/blog/Blog";

const lex = Lexend_Zetta({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Home() {
  return (
    <main className="overflow-hidden">
    {/* header */}
      <Header />

      {/* About Section */}
      <About2 />
      <Events />
      <Artists />
      <Blog />
      {/* <Clients /> */}
    </main>
  )
}
