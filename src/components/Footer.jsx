export default function Footer() {
    return (
        <div className=" w-full bg-[#f3efe6] py-[80px] ">
            <div className="flex flex-col md:flex-row md:items-center ">
                <div className="basis-1/2 pl-[20px] md:pl-[70px]">
                    <button className=" relative mb-2 md:mb-8 bg-[#b9b8b8] hover:bg-[#121211] rounded-3xl px-7 py-2 text-black hover:text-[#b9b8b8]">
                        <span className="absolute text-lg left-3 top-1/2 transform -translate-y-1/2 h-2 w-2 bg-green-500 rounded-full"></span>
                        SCHEDULE A CALL</button>
                    <h1 className=" font-MATTERS font-bold text-sm md:text-md"> ENQUIRES</h1>
                    <a href="mailto:hi@sridhar.fyi" className="text-lg md:text-2xl font-MATTERS text-[#7a7979] hover:text-[#b4b3b3] font-bold" >hi@sridhar.fyi</a>
                    <h1 className=" font-MATTERS font-bold text-sm md:text-md"> SOCIAL</h1>
                    <div className="flex flex-row gap-2">
                        <p className="text-lg md:text-2xl font-MATTERS text-[#7a7979] hover:text-[#b4b3b3] font-bold">Instagram</p>
                        <p className="text-lg md:text-2xl font-MATTERS text-[#7a7979] hover:text-[#b4b3b3] font-bold">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </p>
                        <p className="text-lg md:text-2xl font-MATTERS text-[#7a7979] hover:text-[#b4b3b3] font-bold">Behance</p>
                    </div>
                    <h1 className=" font-MATTERS font-bold text-sm md:text-md"> NEWSLETTER</h1>
                    <p className="text-lg md:text-2xl font-MATTERS text-[#7a7979] hover:text-[#b4b3b3] font-bold">Monthly Inspiration and News</p>
                </div>
                <div className="flex basis-1/2 justify-center mt-12 md:mt-0 mx-2 md:mx-0">
                    <img className="w-[500px]" src="/static/images/footer.png" alt="" />
                </div>
            </div>
        </div>
    )
}