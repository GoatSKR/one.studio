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
        <div className="bg-[#121211] h-auto pt-[50px] md:pt-[100px] z-30 relative" >
            <div className="  font-MATTERS  text-center px-[2%] py-[14%] md:py-[10%] md:px-[20%]">
                <h1 className="text-3xl md:text-7xl text-bold text-white">We design brands of today to build the vision of tomorrow.</h1>
                <p className="text-sm pt-[40px] text-center md:text-lg px-[15%] text-gray-600">Doozy is a tiny design studio dedicated to redefining brand
                    identity for the new digital age. Our narrative is simple; envision</p>
            </div>
        </div>

    )
}