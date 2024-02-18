import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function HeroContact() {
    const animaton = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(animaton.current, {
                opacity: 0,
                duration: 2.5,
            })
        })

        return () => ctx.revert();
    }, [])
    return (
        <div className="bg-[#121211] h-auto pt-[120px] md:pt-[180px] pb-[80px] md:pb-[200px] z-30 relative rounded-b-3xl !scroll-smooth" >
            <div className=" font-MATTERS  text-center px-[2%] py-[14%] md:py-[0%] md:px-[20%]">
                <p className="text-sm pt-[40px] text-center md:text-lg px-[15%] text-[#636363]">
                    Want a new brand, a website, or a coffee?<br />
                    Tell us everything.
                </p>
                <h1 className="text-3xl text-[#E5DFD5] md:text-8xl text-bold mt-8 md:mt-4 ">HI@SRIDHAR.FYI</h1>
                <div className="flex flex-row justify-center gap-4 mt-[30px]">
                    <p className="text-white bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#e3f551] rounded-2xl">
                        <a
                            href="mailto:hi@sridhar.fyi" >
                            Email
                        </a>
                    </p>
                    <p className="text-white bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#e3f551] rounded-2xl">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>

                </div>

            </div>
            <div className="flex justify-center pt-[50px] md:pt[10px]">
                <img className="px-[40px] md:w-[900px] " src="https://www.reactiongifs.com/wp-content/uploads/2013/07/ralph-wave.gif" alt="gify" />
            </div>
        </div>
    )
}