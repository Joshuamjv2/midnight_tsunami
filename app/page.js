import BackgroundImage from "./../public/images/tsunami2-113.jpg"
import { Lexend_Zetta } from 'next/font/google';
import Image from "next/image";
import Events from "@/components/Home/Events/Events";
import Artists from "@/components/Home/artists/Artists";
import Header from "@/components/Home/Header";

const lex = Lexend_Zetta({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Home() {
  return (
    <main>
    {/* header */}
      <Header />

      {/* About Section */}
      <Events />
      <Artists />
    </main>
  )
}
