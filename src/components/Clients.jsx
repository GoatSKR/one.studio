import { useEffect } from 'react';
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Clients() {
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
    useEffect(() => {
        let isScrolling;
        const handleScroll = () => {
            window.clearTimeout(isScrolling);
            document.body.classList.add('smooth-scrolling');
            isScrolling = setTimeout(function () {
                document.body.classList.remove('smooth-scrolling');
            }, 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="bg-[#121211] py-[70px] rounded-b-3xl z-30 relative">
            <h1 className="font-MATTERS text-center text-4xl text-white">Selected clients</h1>
            <div className="flex flex-col md:flex-row gap-[30px] items-center justify-center mt-[40px] mx-10">
                <img className="h-[60px] md:h-[100px]" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/637cbcd70b9eca1e737a9986_4.png" alt="client1" />
                <img className="h-[60px] md:h-[100px]" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/637cbcb8d47966f4c116320c_2.png" alt="client2" />
                <img className="h-[60px] md:h-[100px]" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/637cbcc01ec666ddf6afd53b_3.png" alt="client3" />
                <img className="h-[60px] md:h-[100px]" src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/637df2ba5802ea949f842220_12.png" alt="client4" />
            </div>
        </div>
    );
}
