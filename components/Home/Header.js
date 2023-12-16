"use client"
import BackgroundImage from "../../public/images/tsunami2-97.jpg"
import BackgroundImage8 from "../../public/images/nora_bg-1.png"
import BackgroundImage2 from "../../public/images/tsunami2-113.jpg"
import BackgroundImage3 from "../../public/images/tsunami3-32.jpg"
import BackgroundImage4 from "../../public/images/tsunami3-10.jpg"
import BackgroundImage5 from "../../public/images/community2.jpg"
import { Lexend_Zetta } from 'next/font/google';
import Image from "next/image"

import { useState, useEffect } from "react";

const lex = Lexend_Zetta({ subsets: ['latin'], weight: ['400', '500', '600'] })

const slides = [
        {image: BackgroundImage, title: "Image 1"},
        {image: BackgroundImage2, title: "Image 2"},
        {image: BackgroundImage3, title: "Image 3"},
        {image: BackgroundImage4, title: "Image 4"},
        {image: BackgroundImage5, title: "Image 5"}
    ]

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoSlide, setAutoSlide] = useState(true)

    const handleSlideClick = (slide) => {
        setCurrentSlide(slides.indexOf(slide));
        setAutoSlide(false); // Stop auto sliding when a slide is clicked
    };

    useEffect(() => {
        let changeSlides;
        let sliderTime = 6000;

        if (autoSlide) {
            let currentIndex = currentSlide;

            changeSlides = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                setCurrentSlide(currentIndex);
                console.log(currentSlide)

                if (currentIndex === slides.length - 1) {
                    // Stop auto sliding after reaching the last slide
                    // setCurrentSlide(slides[0])
                    // sliderTime = sliderTime + 2000
                    clearInterval(changeSlides);
                    setAutoSlide(false);
                }
            }, sliderTime);
        }

        return () => {
            clearInterval(changeSlides);
        };
    }, [autoSlide, currentSlide]);

    return (
            <div className="relative">
            {/* header */}
                <div>
                    <header className="min-h-screen min-w-screen overflow-hidden relative" >
                        {
                            slides.map((slide, index)=>
                                <div key={slide.title} className={`absolute inset-0 w-full h-full ${currentSlide == index ? "opacity-100 opacity_anime delay-1000": "opacity-0 -z-10"}`}>
                                    <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover"  priority />
                                    <div className="h-full absolute bg-black bg-opacity-70 top-0 w-full left-0"></div>
                                </div>
                            )
                        }
                    </header>
                </div>
                <div className='min-h-screen flex overflow-hidden items-center absolute top-0 sm:right-0'>
                        <div className='w-full'>
                            <div className='mx-4 md:flex justify-between bg-opacity-50'>
                            <div></div>
                            <div className='text-center md:text-right md:right-4 md:w-3/4 move_up text-white'>
                                <h3 className={`${lex.className} text-2xl sm:text-4xl md:text-5xl lg:text-6xl right-4 opacity_anime`}>Sustainable art collaborations <br></br> <span className="">and spaces</span></h3>
                                <button className='bg-[#8001ff] opacity_anime_longer hover:transition-all py-1 md:py-2 text-md md:text-lg mt-4 px-4 md:px-8 font-semibold hover:bg-white hover:duration-300 hover:text-[#8001ff] uppercase md:mr-4'>Contact Us</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full opacity_anime delay-1000">
                        <div className="flex md:hidden justify-between absolute w-full bottom-8 px-4">
                            <p onClick={()=>{if (currentSlide > 0){setCurrentSlide(currentSlide-1)}}} className="cursor-pointer text-sm">Prev</p>
                            <p onClick={()=>{if (currentSlide < slides.length-1){setCurrentSlide(currentSlide+1)}}} className="cursor-pointer text-sm">Next</p>
                        </div>
                        <div className="hidden sm:flex justify-center absolute bottom-8 w-full">
                            <ul className="flex justify-center w-full gap-6 md:gap-16">
                                {slides.map((slide, index) => <li className="cursor-pointer" onClick={() => handleSlideClick(slide)} key={index}>
                                    <div className={`h-3 w-3 md:h-5 md:w-5 rounded-full ${index === currentSlide ? "bg-[#8001ff]": "bg-[#ffffff]"}`}></div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
            </div>
    )
}
