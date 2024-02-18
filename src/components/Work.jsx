import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Work(){
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
    return(
        <div  className="bg-[#121211] h-auto py-4 z-30 relative !scroll-smooth" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-10">
                <div className="">
                    <img className="rounded-xl " src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/65b02ce24cb2bd4bf7a52421_Falko.gif"  />
                    <p className="text-white font-MATTERS text-bold text-md">Falko Football</p>
                    <p className="text-[#8a8a8a] font-CREATO text-sm ">Undefeated spirit to break all limits</p>
                </div>
                <div className="pt-3 md:pt-0">
                    <img className="rounded-xl" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/65b02ce24cb2bd4bf7a52419_Padel%2520Agency%2520-p-1080.png"  />
                    <p className="text-white font-MATTERS text-bold text-md">The Padel Agency</p>
                    <p className="text-[#8a8a8a] font-CREATO text-sm ">Cutting Edge and Innovative Padel center</p>               
                </div>
                <div className="pt-3 md:pt-8">
                    <img className="rounded-xl" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/65b02ce24cb2bd4bf7a52423_Shouter-p-1080.png"  />
                    <p className="text-white font-MATTERS text-bold text-md">Shouter App</p>
                    <p className="text-[#8a8a8a] font-CREATO text-sm ">The fastest local service marketplace in Europe</p>
                </div>
                <div className="pt-3 md:pt-8">
                    <img className="rounded-xl" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/65b02ce24cb2bd4bf7a5242a_HeptaxArsenalGIF.gif"  />
                    <p className="text-white font-MATTERS text-bold text-md">Hepta x Arsenal FC</p>
                    <p className="text-[#8a8a8a] font-CREATO text-sm ">Heptaviews connecting with the Heart of Arsenal FC's Community</p>
                </div>
            </div>
        </div>
    )
}