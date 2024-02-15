import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Transforming() {
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
        <div className="bg-[#121211] h-auto py-4 z-30 relative" >
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-10 rounded-lg bg-[#202020] py-[80px] md:py-[100px] px-[20px] md:px-[0px] ">
                <p className=" text-[#e3f551] font-MATTERS px-[10px] md:px-[80px] text-4xl md:text-5xl ">Transforming Brands through Design</p>
                <div className="  text-white font-MATTERS px-[10px] md:px-[180px] text-xl mt-8 md:mt-8">
                    <p>Based in Aarhus, Denmark, we are a tiny design studio dedicated to transforming
                        brands. Collaborating closely with companies around the globe, we create
                        captivating designs that bring visions to life and elevate brands.

                    </p>
                    <p className="mt-8">We build brands, apps and websites.
                        What do you have in mind?</p>
                    <button
                        className=" mt-8 px-8 py-3 md:px-5 md:py-2 text-base md:text-lg text-white 
                                 bg-[#202020] rounded-full border-2  
                                 hover:border-[#5e5d5d] hover:text-[#5e5d5d] 
                                focus:ring-offset-2"
                        >
                        Say hello
                    </button>
                </div>


            </div>
        </div>
    )
}