import { useEffect } from 'react';

export default function Clients() {
    useEffect(() => {
        let isScrolling;

        // Define the scroll event listener function
        const handleScroll = () => {
            // Clear the previous timeout
            window.clearTimeout(isScrolling);

            // Add a class to trigger the smooth animation
            document.body.classList.add('smooth-scrolling');

            // Set a timeout to remove the class after a delay
            isScrolling = setTimeout(function() {
                document.body.classList.remove('smooth-scrolling');
            }, 500); // Adjust the delay as needed
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Provide both the event type and the listener function
        };
    }, []);

    return (
        <div className="bg-[#121211] py-[70px] rounded-b-3xl ">
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
