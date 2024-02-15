export default function OurValues() {
    return (
        <div className="bg-[#121211] h-auto pt-[80px] pb-[50px] md:pb-[20px] z-30 relative">
            <div className="text-white px-[20px] md:px-[400px]">
                <h1 className="text-3xl text-center font-MATTERS">Our Values</h1>
                <p className="mt-4 text-center font-MATTERS text-[#808080]">
                    At One Studio, innovation and excellence meet captivating design. We push boundaries,
                    explore new ideas, and creates designs that help companies of today stand out. We redefine
                    the brands of tomorrow.
                </p>
            </div>

            <div className="flex flex-col md:flex-row mt-8 mx-8 md:mx-[70px] gap-4 ">
                <div className="border border-[#2e2e2d]  text-white rounded-xl px-[30px] py-[30px] mt-[30px]">
                    <h1 className="text-2xl  font-MATTERS">Innovation</h1>
                    <p className="mt-4 text-[#808080] text-md font-MATTERS">We value the power of design and believe in pushing boundaries to bring innovative
                        solutions to our clients. Our team thrives on creativity, constantly exploring new
                        ideas and approaches to create unique and captivating designs that help businesses
                        stand out in the market.
                    </p>
                </div>
                <div className="border border-[#2e2e2d]  text-white  rounded-xl px-[30px] py-[30px] mt-[30px]">
                    <h1 className="text-2xl  font-MATTERS">Playfullness</h1>
                    <p className="mt-4 text-[#808080] text-md font-MATTERS">
                        We embrace a playful spirit in our work. We believe that a touch of whimsy and
                        lightheartedness can infuse joy and delight into design, making it more engaging
                        and memorable. Our team isn't afraid to think outside the box, infusing a sense of playfulness
                        that brings a fresh perspective to every project.
                    </p>
                </div>
                <div className="border border-[#2e2e2d]  text-white  rounded-xl px-[30px] py-[30px]  mt-[30px]">
                    <h1 className="text-2xl  font-MATTERS">Excellence</h1>
                    <p className="mt-4 text-[#808080] text-md font-MATTERS">
                        With our years of experience and expertise, we strive
                        to exceed client expectations by consistently providing high-quality designs that
                        drive tangible results. We take pride in our attention to details and precision,
                        ensuring that every project we undertake reflects the highest standards of excellence.
                    </p>
                </div>

            </div>
        </div>
    )
}