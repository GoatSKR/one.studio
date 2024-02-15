export default function HeroAbout() {
    return (
        <div className="bg-[#121211] h-auto pt-[80px] pb-[50px] md:pb-[20px] z-30 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-10 rounded-lg pt-[20px] md:pt-[60px] px-[20px] md:px-[0px] ">
                <p className=" text-[#e3f551] font-MATTERS px-[10px] md:px-[20px] text-4xl md:text-5xl flex items-center ">Transforming Brands through Design</p>
                <div className="  text-white font-MATTERS px-[10px] md:px-[80px] text-lg mt-8 md:mt-0">
                    <p>Based in Aarhus, Denmark, we are a tiny design studio dedicated to redefining brand
                        identity for the new digital age. Collaborating closely with companies around the
                        globe, we create digital designs that bring vision to life.

                    </p>
                    <p className="mt-8">We specialize in building brands, apps, and websites. For humans, by humans.
                    </p>
                </div>

            </div>
            <div className=" mx-2 md:mx-10 ">
                <img className="mt-[80px]  " src="https://assets-global.website-files.com/62f9f54a992a3bf5aece378a/650fff1b8268c1353cc80338_doozy%20studio-p-1600.png" alt="" />

            </div>
        </div>
    )
}