"use client"
import BackgroundImage from "../../public/images/tsunami2-97.jpg"
import BackgroundImage2 from "../../public/images/tsunami2-113.jpg"
import BackgroundImage3 from "../../public/images/tsunami3-32.jpg"
import BackgroundImage4 from "../../public/images/tsunami3-10.jpg"
import BackgroundImage5 from "../../public/images/community2.jpg"
import { Lexend_Zetta } from 'next/font/google';

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
    const [currentSlide, setCurrentSlide] = useState(slides[0])
    const [autoSlide, setAutoSlide] = useState(true)

    const handleSlideClick = (slide) => {
        setCurrentSlide(slide);
        setAutoSlide(false); // Stop auto sliding when a slide is clicked
    };

    useEffect(() => {
        let changeSlides;
        let sliderTime = 6000;

        if (autoSlide) {
            let currentIndex = slides.indexOf(currentSlide);

            changeSlides = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                setCurrentSlide(slides[currentIndex]);
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
    }, [autoSlide, currentSlide, slides]);

    return (
            <div>
            {/* header */}
                <header className="min-h-screen min-w-screen" style={
                    {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${currentSlide.image.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                    }}>
                    <div className='min-h-screen flex overflow-hidden items-center'>
                    <div className='w-full'>
                        <div className='mx-4 md:flex justify-between'>
                        <div></div>
                        <div className='text-center md:text-right md:right-4 md:w-3/4'>
                            <h3 className={`${lex.className} text-3xl md:text-5xl lg:text-6xl right-4`}>Sustainable art collaborations <br></br> and spaces</h3>
                            <button className='bg-[#8001ff] hover:transition-all py-1 md:py-2 text-md md:text-lg mt-4 md:mt-8 px-4 md:px-8 font-semibold hover:bg-white hover:duration-300 hover:text-[#8001ff] uppercase md:mr-4'>Contact Us</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="relative w-full">
                        <div className="flex justify-center absolute bottom-8 w-full">
                            <ul className="flex justify-center w-full gap-8 md:gap-16">
                                {slides.map((slide, index) => <li className="cursor-pointer" onClick={() => handleSlideClick(slide)} key={index}>
                                    <div className={`h-5 w-5 border-4 rounded-full ${index === slides.indexOf(currentSlide) && "bg-[#8001ff]"}`}></div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
    )
}
