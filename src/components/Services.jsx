import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Services() {
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
        <div className="bg-[#121211] h-auto py-[10px] md:py-[50px] z-30 relative " >
            <div className="flex flex-col md:flex-row mx-2 md:mx-10 rounded-xl bg-[#e3f551] py-[80px] md:py-[100px] px-[20px] md:px-[0px]">
                <p className=" basis-1/2 text-[#202020] font-MATTERS px-[10px] md:px-[80px] text-4xl md:text-5xl ">Services</p>
                <div className="basis-1/2 flex flex-col md:flex-row  justify-end">
                    <div className=" basis-1/2 text-[#202020] font-MATTERS px-[10px] md:px-[80px]  mt-8 md:mt-0">
                        <p className="text-lg">DIGITAL</p>
                        <ul className="mt-8 text-lg">
                            <li className="mt-2">Web Design</li>
                            <li className="mt-2">Motion Design</li>
                            <li className="mt-2">Product Design</li>
                            <li className="mt-2">UI/UX</li>
                            <li className="mt-2">Design Systems</li>
                        </ul>
                    </div>
                    <div className=" basis-1/2 text-[#202020] font-MATTERS px-[10px] md:px-[80px]  mt-8 md:mt-0">
                        <p className="text-lg">DESIGN</p>
                        <ul className="mt-8 text-lg">
                            <li className="mt-2">Brand Design</li>
                            <li className="mt-2">Rebranding</li>
                            <li className="mt-2">Naming</li>
                            <li className="mt-2">Typography</li>
                            <li className="mt-2">Brand Strategy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}