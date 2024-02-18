import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Audience() {
    const animaton = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(animaton.current, {
                opacity: 0,
                duration: 2.0,
            })
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className="bg-[#121211] h-auto pt-[80px] pb-[50px] md:pb-[120px] z-30 relative !scroll-smooth" >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-10">
                <div className="bg-[#4182e4] rounded-xl h-[600px] py-[90px] px-[60px]">
                    <h1 className="text-white text-3xl md:text-6xl ">"An audience fed up with fancy talk and broken vows."</h1>
                </div>
                <div className="bg-[white] rounded-xl h-[600px] py-[90px] px-[60px] flex flex-col text-center  justify-between">
                    <h1 className="text-black text-bold text-2xl md:text-5xl mt-[120px]">AdvanceLab</h1>
                    <h1 className="text-black text-lg ">Coming Soon</h1>
                </div>
                <div className="bg-[#4141e4] rounded-xl h-[600px] ">
                    <img className="h-[600px]" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/65b04821405d01c825938b80_Frame%209.png" alt="" />
                </div>
            </div>
        </div>
    )
}