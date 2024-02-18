import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Hero() {
    const animaton = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(animaton.current, {
                opacity: 0,
                duration: 0.5,
            })
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className="bg-[#121211] h-auto pt-[50px] md:pt-[100px] z-30 relative !scroll-smooth" >
            <div className="  font-MATTERS  text-center px-[2%] py-[14%] md:py-[10%] md:px-[20%]">
                <h1 className="text-3xl md:text-7xl text-bold text-white">We Craft today's brands to shape tomorrow's vision.</h1>
                <p className="text-sm pt-[40px] text-center md:text-lg px-[15%] text-gray-600">One studio, a small design studio, is all about refreshing brand identities for the digital age. Our motto? Imagine differently.</p>
            </div>
        </div>

    )
}