import { Lexend_Zetta } from 'next/font/google';
import Events from "@/components/Home/Events/Events";
import Artists from "@/components/Home/artists/Artists";
import Header from "@/components/Home/Header";
import About2 from "@/components/Home/about/About2";
import Blog from "@/components/Home/blog/Blog";

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
